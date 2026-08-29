import * as React from 'react';

/**
 * Select — from @lopecode/design-system@0.1.0.
 * @replaces select
 */
export interface SelectProps {
  options: readonly Option[] | Map<Option, Option>;
  value?: string | number | boolean | object | Date | Option[];
  /** Allow selecting several options (renders a listbox). */
  multiple?: boolean;
  /** Visible rows when `multiple`. */
  size?: number;
  format?: (option: Option, index: number) => string;
  onChange?: (value: Option | Option[]) => void;
  /** Visible label, rendered to the left of the control. */
  label?: React.ReactNode;
  /** Disables the control. */
  disabled?: boolean;
  /** Control width in px (default 240 for text-like inputs). */
  width?: string | number;
  className?: string;
  style?: React.CSSProperties;
}

export declare const Select: React.ComponentType<SelectProps>;
