import { NumberInput } from "@lopecode/design-system";
export const Default = () => <NumberInput label="Rows" value={25} min={1} max={500} />;
export const Step = () => <NumberInput label="Threshold" value={0.5} min={0} max={1} step={0.05} />;
export const Disabled = () => <NumberInput label="Frame budget (ms)" value={16} disabled />;
