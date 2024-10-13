import React from 'react';
import FolderIcon from '@mui/icons-material/Folder';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { directoryTreeItems, TreeItemType } from './directoryTreeHelper';
import TypographyComp from '../../../../../components/base/typography/Typography';
import BoxComp from '../../../../../components/base/box/Box';
import styled from '@emotion/styled';

const CustomFolderIcon = styled(FolderIcon)`
  fill: ${(props) => props.theme.palette.grey[500]};
  width: 32px;
  height: 32px;
`;

const DirectoryTreeSection: React.FC = () => {
  const renderTreeItems = (items: TreeItemType[]) => {
    return items.map((item) => {
      const IconComponent = item.openIcon ?? CustomFolderIcon;
      const isTranslation = item.isTranslation ?? false;

      return (
        <TreeItem
          key={item.itemId}
          itemId={item.itemId}
          label={
            <BoxComp sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {IconComponent && item.type !== 'text' && <IconComponent />}
              <TypographyComp variant="h4" isTranslation={isTranslation}>
                {item.label}
              </TypographyComp>
            </BoxComp>
          }
        >
          {item.children && item.children.length > 0 && renderTreeItems(item.children)}
        </TreeItem>
      );
    });
  };

  return (
    <BoxComp sx={{ minHeight: 352, minWidth: 250 }}>
      <SimpleTreeView>
        <SimpleTreeView>{renderTreeItems(directoryTreeItems)}</SimpleTreeView>
      </SimpleTreeView>
    </BoxComp>
  );
};

export default DirectoryTreeSection;
