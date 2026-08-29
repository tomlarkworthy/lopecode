import { Theme, TextInput, Range, Toggle, Button } from "@lopecode/design-system";
const Sample = () => (
  <div style={{ display: "grid", gap: 8, padding: 16 }}>
    <TextInput label="Title" value="Coded landmark tracking" />
    <Range label="Opacity" min={0} max={1} step={0.1} value={0.7} />
    <Toggle label="Autosave" value={true} />
    <Button content="Export" />
  </div>
);
export const NearMidnight = () => <Theme name="near-midnight"><Sample /></Theme>;
export const Air = () => <Theme name="air"><Sample /></Theme>;
export const Parchment = () => <Theme name="parchment"><Sample /></Theme>;
export const OceanFloor = () => <Theme name="ocean-floor"><Sample /></Theme>;
