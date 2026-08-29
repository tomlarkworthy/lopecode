import * as React from 'react';

/**
 * Radio — from @lopecode/design-system@0.1.0.
 * @replaces input[type=radio]
 */
export interface RadioProps {
  options: readonly Option[] | Map<Option, Option>;
  /** Selected value. */
  value?: string | number | boolean | object | Date;
  format?: (option: Option, index: number) => string;
  onChange?: (value: Option) => void;
  /** Visible label, rendered to the left of the control. */
  label?: React.ReactNode;
  /** Disables the control. */
  disabled?: boolean;
  /** Control width in px (default 240 for text-like inputs). */
  width?: string | number;
  className?: string;
  style?: React.CSSProperties;
}

export declare const Radio: React.ComponentType<RadioProps>;
