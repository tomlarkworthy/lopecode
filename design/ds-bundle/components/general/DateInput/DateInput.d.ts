import * as React from 'react';

/**
 * DateInput — from @lopecode/design-system@0.1.0.
 */
export interface DateInputProps {
  /** ISO date string (YYYY-MM-DD) or Date. */
  value?: string | Date;
  min?: string | Date;
  max?: string | Date;
  required?: boolean;
  submit?: string | boolean;
  onChange?: (value: Date | null) => void;
  /** Visible label, rendered to the left of the control. */
  label?: React.ReactNode;
  /** Disables the control. */
  disabled?: boolean;
  /** Control width in px (default 240 for text-like inputs). */
  width?: string | number;
  className?: string;
  style?: React.CSSProperties;
}

export declare const DateInput: React.ComponentType<DateInputProps>;
