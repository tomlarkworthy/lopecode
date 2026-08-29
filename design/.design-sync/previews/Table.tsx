import { Table } from "@lopecode/design-system";
const rows = [
  { notebook: "editor-5", modules: 47, size: "2.4 MB", updated: "2026-08-25", published: true },
  { notebook: "lopepage-2", modules: 39, size: "1.9 MB", updated: "2026-08-24", published: true },
  { notebook: "themes", modules: 52, size: "1.1 MB", updated: "2026-08-20", published: false },
  { notebook: "corepox", modules: 61, size: "3.2 MB", updated: "2026-08-26", published: false },
  { notebook: "virtual-monorepo", modules: 84, size: "1.3 MB", updated: "2026-08-25", published: true },
  { notebook: "tarot", modules: 58, size: "5.9 MB", updated: "2026-08-19", published: true },
];
export const Default = () => <Table data={rows} />;
export const Sorted = () => <Table data={rows} sort="modules" reverse columns={["notebook", "modules", "updated"]} />;
export const Selection = () => <Table data={rows} value={[rows[0], rows[4]]} rows={4} />;
export const NoSelect = () => <Table data={rows} select={false} header={{ notebook: "Notebook", modules: "Modules", size: "Size", updated: "Updated", published: "Live" }} />;
