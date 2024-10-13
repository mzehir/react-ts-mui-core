import React from 'react';
import BoxComp from '../../../../components/base/box/Box';
import TypographyComp from '../../../../components/base/typography/Typography';
import DividerComp from '../../../../components/base/divider/Divider';
import HeaderSection from './sections/Header';
import ModulesSection from './sections/Modules';
import DirectoryTreeSection from './sections/DirectoryTree';
import './introDashboard.css';

const IntroDashboard: React.FC = () => {
  return (
    <BoxComp>
      <HeaderSection />
      <br />
      <br />
      <BoxComp display={'flex'} flexDirection={'row'} alignItems={'center'} gap={'5px'}>
        <TypographyComp variant="h3" gutterBottom display="inline">
          introduction.projectKeyTechnologies
        </TypographyComp>
        <DividerComp sx={{ flexGrow: 1 }} />
      </BoxComp>
      <ModulesSection />
      <br />
      <br />
      <BoxComp display={'flex'} flexDirection={'row'} alignItems={'center'} gap={'5px'}>
        <TypographyComp variant="h3" gutterBottom display="inline">
          introduction.folderFileHierarchy
        </TypographyComp>
        <DividerComp sx={{ flexGrow: 1 }} />
      </BoxComp>
      <DirectoryTreeSection />
    </BoxComp>
  );
};

export default IntroDashboard;
