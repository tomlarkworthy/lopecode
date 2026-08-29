import * as React from 'react';

/**
 * Button — from @lopecode/design-system@0.1.0.
 * @replaces button
 */
export interface ButtonProps {
  /** Button text. */
  content?: string;
  /** Called on each click with the click count. */
  onClick?: (count: number) => void;
  disabled?: boolean;
  /** Visible label, rendered to the left of the control. */
  label?: React.ReactNode;
  /** Control width in px (default 240 for text-like inputs). */
  width?: string | number;
  className?: string;
  style?: React.CSSProperties;
}

export declare const Button: React.ComponentType<ButtonProps>;
