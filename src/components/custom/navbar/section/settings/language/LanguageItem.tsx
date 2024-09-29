import React from 'react';
import useLanguageContext from '../../../../../../hooks/useLanguageContext';
import GridComp from '../../../../../base/grid/Grid';
import TypographyComp from '../../../../../base/typography/Typography';
import BoxComp from '../../../../../base/box/Box';
import styled from '@emotion/styled';
import { Language } from '../../../../../../utils/enums/languages';

interface LanguageItemProps {
  title: string;
  value: Language;
  children: React.ReactNode;
}

const Button = styled(BoxComp, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 80px;
  cursor: pointer;
  font-size: 0.825rem;
  border-radius: 0.3rem;
  border: 1px solid
    ${(props) => (!props.active ? props.theme.palette.action.selected : props.theme.palette.action.active)};
`;

const LanguageItem: React.FC<LanguageItemProps> = ({ title, value, children }) => {
  const { language, changeLanguage } = useLanguageContext();

  return (
    <GridComp item xs={6}>
      <Button
        active={value === language}
        onClick={() => {
          changeLanguage(value);
        }}
      >
        {children}
      </Button>

      <TypographyComp textAlign={'center'} variant={'subtitle2'} gutterBottom>
        {title}
      </TypographyComp>
    </GridComp>
  );
};

export default LanguageItem;
