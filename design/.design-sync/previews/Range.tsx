import { Range } from "@lopecode/design-system";
export const Default = () => <Range label="Opacity" min={0} max={1} step={0.01} value={0.7} />;
export const Integer = () => <Range label="Iterations" min={1} max={100} step={1} value={30} />;
export const Formatted = () => <Range label="Zoom" min={0.25} max={4} step={0.25} value={1} format={(v) => v.toFixed(2)} />;
export const Disabled = () => <Range label="Locked" min={0} max={10} value={5} disabled />;
