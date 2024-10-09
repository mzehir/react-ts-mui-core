import React from 'react';
import BoxComp from '../../../../components/base/box/Box';
import HeaderSection from './sections/Header';
import ModulesSection from './sections/Modules';
import './introDashboard.css';

const IntroDashboard: React.FC = () => {
  return (
    <BoxComp>
      <HeaderSection />
      <br />
      <br />
      <ModulesSection />
    </BoxComp>
  );
};

export default IntroDashboard;
