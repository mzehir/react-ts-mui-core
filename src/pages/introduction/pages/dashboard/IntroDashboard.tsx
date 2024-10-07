import React from 'react';
import BoxComp from '../../../../components/base/box/Box';
import HeaderSection from './sections/Header';
import ModulesSection from './sections/Modules';

const IntroDashboard: React.FC = () => {
  return (
    <BoxComp>
      <HeaderSection />
      <br />
      <ModulesSection />
    </BoxComp>
  );
};

export default IntroDashboard;
