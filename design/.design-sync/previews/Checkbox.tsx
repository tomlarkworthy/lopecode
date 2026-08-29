import { Checkbox } from "@lopecode/design-system";
const columns = ["Name", "Owner", "Size", "Modified", "Visibility"];
export const Default = () => <Checkbox label="Columns" options={columns} value={["Name", "Size"]} />;
export const Mapped = () => <Checkbox label="Export" options={new Map([["Cells", "cells"], ["Attachments", "files"], ["History", "history"]])} value={["cells"]} />;
export const Disabled = () => <Checkbox label="Locked" options={["Read", "Write"]} value={["Read"]} disabled />;
