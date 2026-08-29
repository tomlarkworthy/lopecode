import * as React from 'react';

/**
 * Table — from @lopecode/design-system@0.1.0.
 * @replaces table
 */
export interface TableProps {
  data: readonly Record<string, unknown>[];
  /** Columns to show, in order (default: all keys of the first row). */
  columns?: string[];
  /** Column header labels. */
  header?: Record<string, string>;
  /** Per-column formatters. */
  format?: Record<string, (value: any, index: number, row: any) => React.ReactNode | string>;
  /** Column to sort by. */
  sort?: string;
  reverse?: boolean;
  /** Visible rows before scrolling (default 11.5). */
  rows?: number;
  width?: string | number | Record<string, string | number>;
  height?: number;
  /** Show row-selection checkboxes (default true). */
  select?: boolean;
  multiple?: boolean;
  /** Initially selected rows. */
  value?: Record<string, unknown>[];
  onChange?: (rows: Record<string, unknown>[]) => void;
  className?: string;
  style?: React.CSSProperties;
}

export declare const Table: React.ComponentType<TableProps>;
