import { Form } from "@lopecode/design-system";
export const Default = () => (
  <Form fields={{
    title: (I) => I.text({ label: "Title", value: "Flat trace" }),
    theme: (I) => I.select(["air", "near-midnight", "parchment"], { label: "Theme", value: "near-midnight" }),
    headless: (I) => I.toggle({ label: "Headless", value: false }),
  }} />
);
export const Publish = () => (
  <Form fields={{
    rkey: (I) => I.text({ label: "Record key", value: "tomlarkworthy-virtual-monorepo" }),
    description: (I) => I.textarea({ label: "Description", rows: 2, value: "Meta-repo of submodules with worktrees for patches." }),
    notify: (I) => I.toggle({ label: "Notify feed", value: true }),
  }} />
);
