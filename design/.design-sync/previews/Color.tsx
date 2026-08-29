import { Color } from "@lopecode/design-system";
export const Default = () => <Color label="Accent" value="#4269d0" />;
export const Swatches = () => (
  <div style={{ display: "grid", gap: 8 }}>
    <Color label="Foreground" value="#dfdfd6" />
    <Color label="Background" value="#161616" />
    <Color label="Error" value="#e7040f" />
  </div>
);
export const Disabled = () => <Color label="Locked" value="#888888" disabled />;
