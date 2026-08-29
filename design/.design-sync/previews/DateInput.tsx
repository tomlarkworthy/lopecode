import { DateInput } from "@lopecode/design-system";
export const Default = () => <DateInput label="Published" value="2026-08-25" />;
export const Bounded = () => <DateInput label="Snapshot" value="2026-06-03" min="2026-01-01" max="2026-12-31" />;
export const Disabled = () => <DateInput label="Created" value="2026-05-20" disabled />;
