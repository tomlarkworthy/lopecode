import * as React from 'react';

/**
 * Range — from @lopecode/design-system@0.1.0.
 */
export interface RangeProps {
  min?: number;
  max?: number;
  step?: number | "any";
  value?: number;
  /** Formats the number shown beside the slider. Must return a numeric string — it is written into an `<input type=number>`,  */
  format?: (value: number) => string;
  onChange?: (value: number) => void;
  /** Visible label, rendered to the left of the control. */
  label?: React.ReactNode;
  /** Disables the control. */
  disabled?: boolean;
  /** Control width in px (default 240 for text-like inputs). */
  width?: string | number;
  className?: string;
  style?: React.CSSProperties;
}

export declare const Range: React.ComponentType<RangeProps>;
