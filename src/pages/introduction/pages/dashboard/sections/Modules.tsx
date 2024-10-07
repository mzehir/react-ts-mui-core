import React from 'react';
import styled from '@emotion/styled';
import { DashboardCard } from '../helper';
import GridComp from '../../../../../components/base/grid/Grid';
import CardHeaderComp from '../../../../../components/base/cardHeader/CardHeader';
import TypographyComp from '../../../../../components/base/typography/Typography';
import SecurityIcon from '@mui/icons-material/Security';
import PaletteIcon from '@mui/icons-material/Palette';
import { ReactComponent as ReactIcon } from '../../../../../assets/other/react-icon.svg';
import { ReactComponent as TypescriptIcon } from '../../../../../assets/other/typescript-icon.svg';
import { ReactComponent as MaterialUiIcon } from '../../../../../assets/other/material-ui-icon.svg';
import { ReactComponent as VitejsIcon } from '../../../../../assets/other/vitejs-icon.svg';
import { ReactComponent as ReduxIcon } from '../../../../../assets/other/redux-icon.svg';
import { ReactComponent as TinymceIcon } from '../../../../../assets/other/tinymce-icon.svg';
import { ReactComponent as EslintIcon } from '../../../../../assets/other/eslint-icon.svg';
import { ReactComponent as PrettierIcon } from '../../../../../assets/other/prettier-icon.svg';
import { ReactComponent as I18nextIcon } from '../../../../../assets/other/i18next-icon.svg';
import { ReactComponent as FormIcon } from '../../../../../assets/other/form-icon.svg';
import { ReactComponent as ReactRouterIcon } from '../../../../../assets/other/react-router-icon.svg';

const iconPrepare = (IconComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>) => {
  return styled(IconComponent)`
    fill: ${(props) => props.theme.sidebar.header.brand.color};
    width: 64px;
    height: 64px;
  `;
};

const CustomVitejsIcon = iconPrepare(VitejsIcon);
const CustomReactIcon = iconPrepare(ReactIcon);
const CustomReactRouterIcon = iconPrepare(ReactRouterIcon);
const CustomTypescriptIcon = iconPrepare(TypescriptIcon);
const CustomReduxIcon = iconPrepare(ReduxIcon);
const CustomMaterialUiIcon = iconPrepare(MaterialUiIcon);
// @ts-expect-error: ...
const CustomPaletteIcon = iconPrepare(PaletteIcon);
const CustomI18nextIcon = iconPrepare(I18nextIcon);
const CustomFormIcon = iconPrepare(FormIcon);
// @ts-expect-error: ...
const CustomSecurityIcon = iconPrepare(SecurityIcon);
const CustomTinymceIcon = iconPrepare(TinymceIcon);
const CustomEslintIcon = iconPrepare(EslintIcon);
const CustomPrettierIcon = iconPrepare(PrettierIcon);

const ModulesSection: React.FC = () => {
  const [moduleItems] = React.useState([
    {
      avatar: CustomVitejsIcon,
      title: 'Vite',
      subheader: 'Version: ^5.2.0',
    },
    {
      avatar: CustomReactIcon,
      title: 'React',
      subheader: 'Version: ^5.2.0',
    },
    {
      avatar: CustomReactRouterIcon,
      title: 'React Router',
      subheader: 'Version: ^5.2.0',
    },
    {
      avatar: CustomTypescriptIcon,
      title: 'TypeScript',
      subheader: 'Version: ^5.2.0',
    },
    {
      avatar: CustomReduxIcon,
      title: 'Redux Toolkit',
      subheader: 'Version: ^5.2.0',
    },
    {
      avatar: CustomMaterialUiIcon,
      title: 'Material UI',
      subheader: 'Version: ^5.2.0',
    },
    {
      avatar: CustomPaletteIcon,
      title: 'Emotion CSS',
      subheader: 'Version: ^5.2.0',
    },
    {
      avatar: CustomI18nextIcon,
      title: 'i18next',
      subheader: 'Version: ^5.2.0',
    },
    {
      avatar: CustomFormIcon,
      title: 'React Hook Form',
      subheader: 'Version: ^5.2.0',
    },
    {
      avatar: CustomSecurityIcon,
      title: 'Yup',
      subheader: 'Version: ^5.2.0',
    },
    {
      avatar: CustomTinymceIcon,
      title: 'TinyMCE',
      subheader: 'Version: ^5.2.0',
    },
    {
      avatar: CustomEslintIcon,
      title: 'ESLint',
      subheader: 'Version: ^5.2.0',
    },
    {
      avatar: CustomPrettierIcon,
      title: 'Prettier',
      subheader: 'Version: ^5.2.0',
    },
  ]);

  return (
    <GridComp container spacing={5}>
      {moduleItems.map((item, index) => (
        <GridComp key={index.toString()} item xs={12} sm={6} md={4}>
          <DashboardCard>
            <CardHeaderComp
              avatar={<item.avatar />}
              title={item.title}
              subheader={<TypographyComp variant="button">{item.subheader}</TypographyComp>}
            />
          </DashboardCard>
        </GridComp>
      ))}
    </GridComp>
  );
};

export default ModulesSection;
