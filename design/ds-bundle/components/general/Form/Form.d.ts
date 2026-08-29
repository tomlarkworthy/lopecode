import * as React from 'react';

/**
 * Form — from @lopecode/design-system@0.1.0.
 * @replaces form
 */
export interface FormProps {
  /** Field builders keyed by name. Each receives the Inputs namespace and returns an input element, e.g. `{ name: (I) => I.te */
  fields: Record<string, (I: typeof Inputs) => HTMLElement>;
  /** Emits the whole form value `{[name]: value}` on any field change. */
  onChange?: (value: Record<string, unknown>) => void;
  className?: string;
  style?: React.CSSProperties;
}

export declare const Form: React.ComponentType<FormProps>;
