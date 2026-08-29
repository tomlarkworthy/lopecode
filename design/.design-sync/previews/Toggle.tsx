import { Toggle } from "@lopecode/design-system";
export const Off = () => <Toggle label="Show gridlines" value={false} />;
export const On = () => <Toggle label="Autosave" value={true} />;
export const Disabled = () => <Toggle label="Headless export" value={true} disabled />;
