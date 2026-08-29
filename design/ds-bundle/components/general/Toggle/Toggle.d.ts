import * as React from 'react';

/**
 * Toggle — from @lopecode/design-system@0.1.0.
 */
export interface ToggleProps {
  value?: boolean;
  onChange?: (value: boolean) => void;
  /** Visible label, rendered to the left of the control. */
  label?: React.ReactNode;
  /** Disables the control. */
  disabled?: boolean;
  /** Control width in px (default 240 for text-like inputs). */
  width?: string | number;
  className?: string;
  style?: React.CSSProperties;
}

export declare const Toggle: React.ComponentType<ToggleProps>;
