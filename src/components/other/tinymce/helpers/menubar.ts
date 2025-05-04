// https://www.tiny.cloud/docs/tinymce/latest/menus-configuration-options/
interface Menubar {
  key: string;
  active: boolean;
}

export const menubar: { [key: string]: Menubar } = {
  file: { key: 'file', active: true },
  edit: { key: 'edit', active: true },
  view: { key: 'view', active: true },
  insert: { key: 'insert', active: true },
  format: { key: 'format', active: true },
  tools: { key: 'tools', active: true },
  table: { key: 'table', active: true },
  help: { key: 'help', active: true },
};
