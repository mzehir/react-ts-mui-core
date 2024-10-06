import { menubar } from './helpers/menubar';
import { toolbar } from './helpers/toolbar';
import { openSoucePlugins } from './helpers/plugins';

export const editorHeight = 500;
export const contentStyle = 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }';
export const editorInitialValue = '<p>This is the initial content of the editor.</p>';
export const resize = true;

export function getActiveMenubarItems(): string {
  const activeMenuItems = Object.entries(menubar)
    .filter(([_, item]) => item.active)
    .map(([_, item]) => item.key);

  return activeMenuItems.join(' ');
}

export function getActiveToolbarItems() {
  let result = '';
  for (const groupKey in toolbar) {
    const group = toolbar[groupKey];
    let groupStr = '';

    for (const itemKey in group) {
      const item = group[itemKey];

      if (item.active) {
        groupStr += item.key + ' ';
      }
    }

    if (groupStr) groupStr += '| ';
    if (groupStr) result += groupStr;
  }

  result = result.trim();
  if (result.endsWith('|')) {
    result = result.slice(0, -1);
  }

  return result;
}

export function getActiveOpenSourcePlugins(): string[] {
  const result: string[] = [];

  for (const pluginKey in openSoucePlugins) {
    if (openSoucePlugins[pluginKey].active) {
      result.push(openSoucePlugins[pluginKey].key);
    }
  }

  return result;
}
