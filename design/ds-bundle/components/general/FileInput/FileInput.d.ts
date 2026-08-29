import * as React from 'react';

/**
 * FileInput — from @lopecode/design-system@0.1.0.
 */
export interface FileInputProps {
  /** Accepted MIME types or extensions, e.g. ".csv,.json". */
  accept?: string;
  multiple?: boolean;
  required?: boolean;
  onChange?: (file: File | File[] | null) => void;
  /** Visible label, rendered to the left of the control. */
  label?: React.ReactNode;
  /** Disables the control. */
  disabled?: boolean;
  /** Control width in px (default 240 for text-like inputs). */
  width?: string | number;
  className?: string;
  style?: React.CSSProperties;
}

export declare const FileInput: React.ComponentType<FileInputProps>;
