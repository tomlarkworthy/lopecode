import * as React from 'react';

/**
 * TextInput — from @lopecode/design-system@0.1.0.
 * @replaces input
 */
export interface TextInputProps {
  value?: string;
  placeholder?: string;
  /** Input type; email/tel/url/password get native validation and masking. */
  type?: "text" | "email" | "tel" | "url" | "password";
  pattern?: string;
  minlength?: number;
  maxlength?: number;
  required?: boolean;
  /** Only emit on Enter / submit button instead of every keystroke. */
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

export declare const TextInput: React.ComponentType<TextInputProps>;
