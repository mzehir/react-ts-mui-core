import React from 'react';
import styled from '@emotion/styled';
import BoxComp from '../../../../base/box/Box';
import DividerComp from '../../../../base/divider/Divider';
import ChipComp from '../../../../base/chip/Chip';
import ThemeSettings from './theme/ThemeSettings';
import LanguageSettings from './language/LanguageSettings';

const WrapperElement = styled(BoxComp)`
  width: 258px;
  overflow-x: hidden;
  margin-top: 10px;
`;

const SettingsSection: React.FC = () => {
  return (
    <WrapperElement>
      <DividerComp>
        <ChipComp label="component.theme" />
      </DividerComp>
      <ThemeSettings />

      <DividerComp>
        <ChipComp label="component.language" />
      </DividerComp>
      <LanguageSettings />
    </WrapperElement>
  );
};

export default SettingsSection;
