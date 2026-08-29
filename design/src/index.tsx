/**
 * React wrappers over Observable Inputs (@observablehq/inputs), the input
 * vocabulary lopecode notebooks use. Each component mounts the real Inputs
 * DOM element — no reimplementation — and bridges its `input` event to
 * `onChange`. Styling comes from styles.css (Inputs CSS + notebook-kit
 * theme tokens); wrap designs in <Theme> to pick a theme.
 */
import * as React from "react";
import { useEffect, useLayoutEffect, useRef } from "react";
import * as Inputs from "@observablehq/inputs";

export { Inputs };

export type Option = string | number | boolean | Date | null | undefined | object;
export type Options = ReadonlyArray<Option> | Map<Option, Option>;

type InputElement<T> = HTMLElement & { value: T };

/** Mounts an Inputs element built by `make`; rebuilds when `deps` change. */
function useInput<T>(
  make: () => HTMLElement,
  deps: ReadonlyArray<unknown>,
  onChange: ((value: T) => void) | undefined,
  value: T | undefined,
) {
  const host = useRef<HTMLDivElement>(null);
  const el = useRef<InputElement<T> | null>(null);
  const change = useRef(onChange);
  change.current = onChange;

  useLayoutEffect(() => {
    const node = make() as InputElement<T>;
    el.current = node;
    const h = host.current!;
    h.replaceChildren(node);
    const listener = () => change.current?.(node.value);
    node.addEventListener("input", listener);
    return () => {
      node.removeEventListener("input", listener);
      Inputs.disposal(node).then(() => {});
      if (node.parentNode === h) h.removeChild(node);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  useEffect(() => {
    if (value !== undefined && el.current && el.current.value !== value) {
      el.current.value = value;
    }
  }, [value]);

  return host;
}

interface BaseProps {
  /** Visible label, rendered to the left of the control. */
  label?: React.ReactNode;
  /** Disables the control. */
  disabled?: boolean;
  /** Control width in px (default 240 for text-like inputs). */
  width?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

function Host({
  host,
  className,
  style,
}: {
  host: React.RefObject<HTMLDivElement>;
  className?: string;
  style?: React.CSSProperties;
}) {
  // Inputs forms are a fixed calc(--input-width + --label-width) with max-width:100%,
  // which resolves against THIS div. A flex/grid parent that sizes children to
  // content (align-items:flex-start, justify-items:start) would hand it the
  // form's max-content width and the form would overflow the panel.
  return <div ref={host} className={className} style={{ width: "100%", minWidth: 0, boxSizing: "border-box", ...style }} />;
}

function labelText(label: React.ReactNode): string | undefined {
  return label == null ? undefined : String(label);
}

// ---------------------------------------------------------------- Button

export interface ButtonProps extends Omit<BaseProps, "disabled"> {
  /** Button text. */
  content?: string;
  /** Called on each click with the click count. */
  onClick?: (count: number) => void;
  disabled?: boolean;
}

/** A push button. Counts clicks; `onClick` receives the running count. */
export function Button({ content = "OK", label, disabled, width, onClick, className, style }: ButtonProps) {
  const host = useInput<number>(
    () => Inputs.button(content, { label: labelText(label), disabled, width, value: 0, reduce: (v: number) => v + 1 }),
    [content, labelText(label), disabled, width],
    onClick,
    undefined,
  );
  return <Host host={host} className={className} style={style} />;
}

// ---------------------------------------------------------------- Toggle

export interface ToggleProps extends BaseProps {
  value?: boolean;
  onChange?: (value: boolean) => void;
}

/** A single on/off checkbox with a label. */
export function Toggle({ label, value, disabled, width, onChange, className, style }: ToggleProps) {
  const host = useInput<boolean>(
    () => Inputs.toggle({ label: labelText(label), value: value ?? false, disabled, width }),
    [labelText(label), disabled, width],
    onChange,
    value,
  );
  return <Host host={host} className={className} style={style} />;
}

// ---------------------------------------------------------------- Checkbox / Radio

export interface CheckboxProps extends BaseProps {
  /** The choices. A Map renders keys and yields values. */
  options: Options;
  /** Selected values. */
  value?: Option[];
  /** Formats each option's label. */
  format?: (option: Option, index: number) => string;
  onChange?: (value: Option[]) => void;
}

/** A group of checkboxes for multiple choice. */
export function Checkbox({ options, label, value, format, disabled, width, onChange, className, style }: CheckboxProps) {
  const host = useInput<Option[]>(
    () => Inputs.checkbox(options as any, { label: labelText(label), value, format, disabled, width }),
    [options, labelText(label), format, disabled, width],
    onChange,
    value,
  );
  return <Host host={host} className={className} style={style} />;
}

export interface RadioProps extends BaseProps {
  options: Options;
  /** Selected value. */
  value?: Option;
  format?: (option: Option, index: number) => string;
  onChange?: (value: Option) => void;
}

/** A group of radio buttons for single choice. */
export function Radio({ options, label, value, format, disabled, width, onChange, className, style }: RadioProps) {
  const host = useInput<Option>(
    () => Inputs.radio(options as any, { label: labelText(label), value, format, disabled, width }),
    [options, labelText(label), format, disabled, width],
    onChange,
    value,
  );
  return <Host host={host} className={className} style={style} />;
}

// ---------------------------------------------------------------- Select

export interface SelectProps extends BaseProps {
  options: Options;
  value?: Option | Option[];
  /** Allow selecting several options (renders a listbox). */
  multiple?: boolean;
  /** Visible rows when `multiple`. */
  size?: number;
  format?: (option: Option, index: number) => string;
  onChange?: (value: Option | Option[]) => void;
}

/** A drop-down menu (or listbox when `multiple`). */
export function Select({ options, label, value, multiple, size, format, disabled, width, onChange, className, style }: SelectProps) {
  const host = useInput<Option | Option[]>(
    () => Inputs.select(options as any, { label: labelText(label), value, multiple, size, format, disabled, width }),
    [options, labelText(label), multiple, size, format, disabled, width],
    onChange,
    value,
  );
  return <Host host={host} className={className} style={style} />;
}

// ---------------------------------------------------------------- Text-like

export interface TextInputProps extends BaseProps {
  value?: string;
  placeholder?: string;
  /** Input type; email/tel/url/password get native validation and masking. */
  type?: "text" | "email" | "tel" | "url" | "password";
  pattern?: string;
  minlength?: number;
  maxlength?: number;
  required?: boolean;
  /** Only emit on Enter / submit button instead of every keystroke. */
  submit?: boolean | string;
  onChange?: (value: string) => void;
}

/** A single-line text field. */
export function TextInput({ label, value, placeholder, type = "text", pattern, minlength, maxlength, required, submit, disabled, width, onChange, className, style }: TextInputProps) {
  const host = useInput<string>(
    () => Inputs.text({ label: labelText(label), value: value ?? "", placeholder, type, pattern, minlength, maxlength, required, submit, disabled, width }),
    [labelText(label), placeholder, type, pattern, minlength, maxlength, required, submit, disabled, width],
    onChange,
    value,
  );
  return <Host host={host} className={className} style={style} />;
}

export interface TextareaInputProps extends Omit<TextInputProps, "type" | "pattern"> {
  rows?: number;
  cols?: number;
  /** Allow the user to resize the area (default true). */
  resize?: boolean;
  spellcheck?: boolean;
}

/** A multi-line text field. */
export function TextareaInput({ label, value, placeholder, rows, cols, resize, spellcheck, minlength, maxlength, required, submit, disabled, width, onChange, className, style }: TextareaInputProps) {
  const host = useInput<string>(
    () => Inputs.textarea({ label: labelText(label), value: value ?? "", placeholder, rows, cols, resize, spellcheck, minlength, maxlength, required, submit, disabled, width }),
    [labelText(label), placeholder, rows, cols, resize, spellcheck, minlength, maxlength, required, submit, disabled, width],
    onChange,
    value,
  );
  return <Host host={host} className={className} style={style} />;
}

export interface NumberInputProps extends BaseProps {
  value?: number;
  min?: number;
  max?: number;
  step?: number | "any";
  placeholder?: string;
  required?: boolean;
  submit?: boolean | string;
  onChange?: (value: number) => void;
}

/** A numeric text field with optional bounds. */
export function NumberInput({ label, value, min, max, step, placeholder, required, submit, disabled, width, onChange, className, style }: NumberInputProps) {
  const host = useInput<number>(
    () => Inputs.number([min, max] as any, { label: labelText(label), value, step, placeholder, required, submit, disabled, width }),
    [labelText(label), min, max, step, placeholder, required, submit, disabled, width],
    onChange,
    value,
  );
  return <Host host={host} className={className} style={style} />;
}

// ---------------------------------------------------------------- Range

export interface RangeProps extends BaseProps {
  min?: number;
  max?: number;
  step?: number | "any";
  value?: number;
  /** Formats the number shown beside the slider. Must return a numeric string — it is written into an `<input type=number>`, which blanks on anything else (e.g. "1×"). */
  format?: (value: number) => string;
  onChange?: (value: number) => void;
}

/** A slider with a paired numeric field. */
export function Range({ min = 0, max = 1, step, label, value, format, disabled, width, onChange, className, style }: RangeProps) {
  const host = useInput<number>(
    () => Inputs.range([min, max], { label: labelText(label), step, value, format, disabled, width }),
    [min, max, step, labelText(label), format, disabled, width],
    onChange,
    value,
  );
  return <Host host={host} className={className} style={style} />;
}

// ---------------------------------------------------------------- Date / Datetime / Color

export interface DateInputProps extends BaseProps {
  /** ISO date string (YYYY-MM-DD) or Date. */
  value?: string | Date | null;
  min?: string | Date;
  max?: string | Date;
  required?: boolean;
  submit?: boolean | string;
  onChange?: (value: Date | null) => void;
}

/** A calendar date picker. */
export function DateInput({ label, value, min, max, required, submit, disabled, width, onChange, className, style }: DateInputProps) {
  const host = useInput<Date | null>(
    () => Inputs.date({ label: labelText(label), value: value as any, min, max, required, submit, disabled, width }),
    [labelText(label), String(min), String(max), required, submit, disabled, width],
    onChange,
    undefined,
  );
  return <Host host={host} className={className} style={style} />;
}

/** A date-and-time picker. */
export function DatetimeInput({ label, value, min, max, required, submit, disabled, width, onChange, className, style }: DateInputProps) {
  const host = useInput<Date | null>(
    () => Inputs.datetime({ label: labelText(label), value: value as any, min, max, required, submit, disabled, width }),
    [labelText(label), String(min), String(max), required, submit, disabled, width],
    onChange,
    undefined,
  );
  return <Host host={host} className={className} style={style} />;
}

export interface ColorProps extends BaseProps {
  /** Hex color, e.g. "#4269d0". */
  value?: string;
  submit?: boolean | string;
  onChange?: (value: string) => void;
}

/** A color swatch that opens the native color picker. */
export function Color({ label, value, submit, disabled, width, onChange, className, style }: ColorProps) {
  const host = useInput<string>(
    () => Inputs.color({ label: labelText(label), value, submit, disabled, width }),
    [labelText(label), submit, disabled, width],
    onChange,
    value,
  );
  return <Host host={host} className={className} style={style} />;
}

// ---------------------------------------------------------------- File

export interface FileInputProps extends BaseProps {
  /** Accepted MIME types or extensions, e.g. ".csv,.json". */
  accept?: string;
  multiple?: boolean;
  required?: boolean;
  onChange?: (file: File | File[] | null) => void;
}

/** A file chooser. `onChange` receives the selected File(s). */
export function FileInput({ label, accept, multiple, required, disabled, width, onChange, className, style }: FileInputProps) {
  const host = useInput<any>(
    () => Inputs.file({ label: labelText(label), accept, multiple, required, disabled, width }),
    [labelText(label), accept, multiple, required, disabled, width],
    onChange,
    undefined,
  );
  return <Host host={host} className={className} style={style} />;
}

// ---------------------------------------------------------------- Search / Table

export interface SearchProps extends BaseProps {
  /** Rows to filter. */
  data: ReadonlyArray<Record<string, unknown>>;
  placeholder?: string;
  /** Columns to search (default all). */
  columns?: string[];
  /** Initial query. */
  query?: string;
  /** Called with the filtered rows. */
  onChange?: (rows: Record<string, unknown>[]) => void;
}

/** A full-text filter over tabular data; emits the matching rows. */
export function Search({ data, label, placeholder, columns, query, disabled, width, onChange, className, style }: SearchProps) {
  const host = useInput<Record<string, unknown>[]>(
    () => Inputs.search(data as any, { label: labelText(label), placeholder, columns, query, disabled, width }),
    [data, labelText(label), placeholder, columns, query, disabled, width],
    onChange,
    undefined,
  );
  return <Host host={host} className={className} style={style} />;
}

export interface TableProps {
  data: ReadonlyArray<Record<string, unknown>>;
  /** Columns to show, in order (default: all keys of the first row). */
  columns?: string[];
  /** Column header labels. */
  header?: Record<string, string>;
  /** Per-column formatters. */
  format?: Record<string, (value: any, index: number, row: any) => React.ReactNode | string>;
  /** Column to sort by. */
  sort?: string;
  reverse?: boolean;
  /** Visible rows before scrolling (default 11.5). */
  rows?: number;
  width?: number | string | Record<string, number | string>;
  height?: number;
  /** Show row-selection checkboxes (default true). */
  select?: boolean;
  multiple?: boolean;
  /** Initially selected rows. */
  value?: Record<string, unknown>[];
  onChange?: (rows: Record<string, unknown>[]) => void;
  className?: string;
  style?: React.CSSProperties;
}

/** A scrollable, sortable data table with row selection. */
export function Table({ data, columns, header, format, sort, reverse, rows, width, height, select, multiple, value, onChange, className, style }: TableProps) {
  const host = useInput<Record<string, unknown>[]>(
    () => Inputs.table(data as any, { columns, header, format: format as any, sort, reverse, rows, width, height, select, multiple, value }),
    [data, columns, header, format, sort, reverse, rows, width, height, select, multiple],
    onChange,
    undefined,
  );
  return <Host host={host} className={className} style={style} />;
}

// ---------------------------------------------------------------- Form

export interface FormProps {
  /**
   * Field builders keyed by name. Each receives the Inputs namespace and
   * returns an input element, e.g. `{ name: (I) => I.text({ label: "Name" }) }`.
   */
  fields: Record<string, (I: typeof Inputs) => HTMLElement>;
  /** Emits the whole form value `{[name]: value}` on any field change. */
  onChange?: (value: Record<string, unknown>) => void;
  className?: string;
  style?: React.CSSProperties;
}

/** Composes several inputs into one value object. */
export function Form({ fields, onChange, className, style }: FormProps) {
  const host = useInput<Record<string, unknown>>(
    () => {
      const built: Record<string, HTMLElement> = {};
      for (const [k, f] of Object.entries(fields)) built[k] = f(Inputs);
      return Inputs.form(built as any);
    },
    [fields],
    onChange,
    undefined,
  );
  return <Host host={host} className={className} style={style} />;
}

// ---------------------------------------------------------------- Theme

export type ThemeName =
  | "air" | "coffee" | "cotton" | "deep-space" | "glacier" | "midnight"
  | "near-midnight" | "ocean-floor" | "parchment" | "slate" | "stark" | "sun-faded";

export interface ThemeProps {
  /** One of the notebook-kit themes. Default (no wrapper) is near-midnight. */
  name: ThemeName;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Scopes a notebook-kit theme to its subtree: sets the theme's tokens, paints
 * the theme background/foreground and applies the notebook body font
 * (17px/1.5 serif, as notebook-kit's `html` rule does). Use it as the root of a design.
 */
export function Theme({ name, children, className, style }: ThemeProps) {
  return (
    <div
      data-lc-theme={name}
      className={className}
      style={{ background: "var(--theme-background)", color: "var(--theme-foreground)", font: "17px/1.5 var(--serif)", ...style }}
    >
      {children}
    </div>
  );
}
