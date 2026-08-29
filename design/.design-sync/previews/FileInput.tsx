import { FileInput } from "@lopecode/design-system";
export const Default = () => <FileInput label="Attachment" accept=".csv,.json" />;
export const Multiple = () => <FileInput label="Stills" accept="image/*" multiple />;
export const Disabled = () => <FileInput label="Locked" disabled />;
