import * as React from 'react';

/**
 * Checkbox — from @lopecode/design-system@0.1.0.
 * @replaces input[type=checkbox]
 */
export interface CheckboxProps {
  /** The choices. A Map renders keys and yields values. */
  options: readonly Option[] | Map<Option, Option>;
  /** Selected values. */
  value?: Option[];
  /** Formats each option's label. */
  format?: (option: Option, index: number) => string;
  onChange?: (value: Option[]) => void;
  /** Visible label, rendered to the left of the control. */
  label?: React.ReactNode;
  /** Disables the control. */
  disabled?: boolean;
  /** Control width in px (default 240 for text-like inputs). */
  width?: string | number;
  className?: string;
  style?: React.CSSProperties;
}

export declare const Checkbox: React.ComponentType<CheckboxProps>;
