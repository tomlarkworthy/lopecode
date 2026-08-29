import * as React from 'react';

/**
 * TextareaInput — from @lopecode/design-system@0.1.0.
 */
export interface TextareaInputProps {
  rows?: number;
  cols?: number;
  /** Allow the user to resize the area (default true). */
  resize?: boolean;
  spellcheck?: boolean;
  /** Disables the control. */
  disabled?: boolean;
  /** Visible label, rendered to the left of the control. */
  label?: React.ReactNode;
  /** Control width in px (default 240 for text-like inputs). */
  width?: string | number;
  className?: string;
  style?: React.CSSProperties;
  value?: string;
  placeholder?: string;
  minlength?: number;
  maxlength?: number;
  required?: boolean;
  /** Only emit on Enter / submit button instead of every keystroke. */
  submit?: string | boolean;
  onChange?: (value: string) => void;
}

export declare const TextareaInput: React.ComponentType<TextareaInputProps>;
