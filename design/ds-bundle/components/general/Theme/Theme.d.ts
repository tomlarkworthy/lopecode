import * as React from 'react';

/**
 * Theme — from @lopecode/design-system@0.1.0.
 */
export interface ThemeProps {
  /** One of the notebook-kit themes. Default (no wrapper) is near-midnight. */
  name: "air" | "coffee" | "cotton" | "deep-space" | "glacier" | "midnight" | "near-midnight" | "ocean-floor" | "parchment" | "slate" | "stark" | "sun-faded";
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export declare const Theme: React.ComponentType<ThemeProps>;
