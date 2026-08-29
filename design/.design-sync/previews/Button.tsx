import { Button } from "@lopecode/design-system";
export const Default = () => <Button content="Run query" onClick={() => {}} />;
export const Labeled = () => <Button content="Export notebook" label="Actions" />;
export const Disabled = () => <Button content="Publish" disabled />;
export const Wide = () => <Button content="Recompute all cells" width={320} />;
