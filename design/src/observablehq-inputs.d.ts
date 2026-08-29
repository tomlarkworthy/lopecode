// @observablehq/inputs ships no types; the wrappers re-type its surface.
declare module "@observablehq/inputs" {
  export function bind(target: HTMLElement, source: HTMLElement, invalidation?: Promise<unknown>): HTMLElement;
  export function button(content?: any, options?: any): HTMLElement;
  export function checkbox(data: any, options?: any): HTMLElement;
  export function radio(data: any, options?: any): HTMLElement;
  export function toggle(options?: any): HTMLElement;
  export function select(data: any, options?: any): HTMLElement;
  export function text(options?: any): HTMLElement;
  export function email(options?: any): HTMLElement;
  export function tel(options?: any): HTMLElement;
  export function url(options?: any): HTMLElement;
  export function password(options?: any): HTMLElement;
  export function textarea(options?: any): HTMLElement;
  export function number(range?: any, options?: any): HTMLElement;
  export function range(range?: any, options?: any): HTMLElement;
  export function date(options?: any): HTMLElement;
  export function datetime(options?: any): HTMLElement;
  export function color(options?: any): HTMLElement;
  export function file(options?: any): HTMLElement;
  export function search(data: any, options?: any): HTMLElement;
  export function searchFilter(query: string): (row: any) => boolean;
  export function table(data: any, options?: any): HTMLElement;
  export function form(inputs: any, options?: any): HTMLElement;
  export function input(value?: any): HTMLElement;
  export function disposal(element: Element): Promise<void>;
  export function formatAuto(locale?: string): (value: any) => string;
  export function formatDate(locale?: string): (date: Date) => string;
  export function formatNumber(locale?: string): (value: number) => string;
  export function formatTrim(value: number): string;
  export function formatLocaleAuto(locale?: string): (value: any) => string;
  export function formatLocaleNumber(locale?: string): (value: number) => string;
}
