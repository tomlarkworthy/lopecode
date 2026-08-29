import { Select } from "@lopecode/design-system";
const modules = ["@tomlarkworthy/editor-5", "@tomlarkworthy/lopepage-2", "@tomlarkworthy/themes", "@tomlarkworthy/view"];
export const Default = () => <Select label="Module" options={modules} value={modules[0]} />;
export const Multiple = () => <Select label="Boot modules" options={modules} value={[modules[1], modules[2]]} multiple size={4} />;
export const Disabled = () => <Select label="Runtime" options={["@observablehq/runtime@6.0.0"]} disabled />;
