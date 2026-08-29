import * as React from 'react';

/**
 * Color — from @lopecode/design-system@0.1.0.
 */
export interface ColorProps {
  /** Hex color, e.g. "#4269d0". */
  value?: string;
  submit?: string | boolean;
  onChange?: (value: string) => void;
  /** Visible label, rendered to the left of the control. */
  label?: React.ReactNode;
  /** Disables the control. */
  disabled?: boolean;
  /** Control width in px (default 240 for text-like inputs). */
  width?: string | number;
  className?: string;
  style?: React.CSSProperties;
}

export declare const Color: React.ComponentType<ColorProps>;
