import { Radio } from "@lopecode/design-system";
export const Default = () => <Radio label="Theme" options={["air", "near-midnight", "parchment"]} value="near-midnight" />;
export const Mapped = () => <Radio label="Layout" options={new Map([["Single pane", 1], ["Split", 2], ["Grid", 4]])} value={2} />;
export const Disabled = () => <Radio label="Runtime" options={["v5", "v6"]} value="v6" disabled />;
