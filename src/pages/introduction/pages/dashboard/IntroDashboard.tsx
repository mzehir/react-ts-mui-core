import React from 'react';
import BoxComp from '../../../../components/base/box/Box';
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
      <ModulesSection />
      <br />
      <br />
      <DirectoryTreeSection />
    </BoxComp>
  );
};

export default IntroDashboard;
