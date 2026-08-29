import { Search } from "@lopecode/design-system";
const notebooks = [
  { name: "editor-5", owner: "tomlarkworthy", size: 2.4 },
  { name: "lopepage-2", owner: "tomlarkworthy", size: 1.9 },
  { name: "themes", owner: "tomlarkworthy", size: 1.1 },
  { name: "corepox", owner: "tomlarkworthy", size: 3.2 },
];
export const Default = () => <Search data={notebooks} placeholder="Search notebooks…" />;
export const Labeled = () => <Search label="Filter" data={notebooks} columns={["name"]} query="lope" />;
