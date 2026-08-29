import { TextareaInput } from "@lopecode/design-system";
export const Default = () => <TextareaInput label="Description" value="A reactive notebook that re-exports itself as a single HTML file." rows={3} />;
export const Placeholder = () => <TextareaInput label="Commit message" placeholder="What changed?" rows={4} />;
export const Disabled = () => <TextareaInput label="License" value="MIT" rows={2} disabled />;
