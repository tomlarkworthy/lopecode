import * as React from 'react';

/**
 * Search — from @lopecode/design-system@0.1.0.
 */
export interface SearchProps {
  /** Rows to filter. */
  data: readonly Record<string, unknown>[];
  placeholder?: string;
  /** Columns to search (default all). */
  columns?: string[];
  /** Initial query. */
  query?: string;
  /** Called with the filtered rows. */
  onChange?: (rows: Record<string, unknown>[]) => void;
  /** Visible label, rendered to the left of the control. */
  label?: React.ReactNode;
  /** Disables the control. */
  disabled?: boolean;
  /** Control width in px (default 240 for text-like inputs). */
  width?: string | number;
  className?: string;
  style?: React.CSSProperties;
}

export declare const Search: React.ComponentType<SearchProps>;
