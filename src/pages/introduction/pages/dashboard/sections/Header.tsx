import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { DashboardCard, hexToRgba } from '../helper';
import GridComp from '../../../../../components/base/grid/Grid';
import CardComp from '../../../../../components/base/card/Card';
import CardHeaderComp from '../../../../../components/base/cardHeader/CardHeader';
import CardContentComp from '../../../../../components/base/cardContent/CardContent';
import TypographyComp from '../../../../../components/base/typography/Typography';
import SliderComp from '../../../../../components/custom/reactSlick/Slider';
import CampaignIcon from '@mui/icons-material/Campaign';
import WavingHandIcon from '@mui/icons-material/WavingHand';

export const CustomDashboardCard = styled(CardComp)`
  padding: ${(props) => props.theme.spacing(6)};
  border-radius: 10px;

  ${(props) =>
    props.theme.palette.mode !== 'dark' &&
    css`
      background: ${hexToRgba(props.theme.palette.primary.main, 0.125)};
      color: ${props.theme.palette.primary.main};
    `}
`;

const HeaderSection: React.FC = () => {
  const [sliderItems] = React.useState([
    {
      title: 'introduction.viteTitle',
      avatar: CampaignIcon,
      content: `introduction.viteContent`,
    },
    {
      title: 'introduction.muiTitle',
      avatar: CampaignIcon,
      content: `introduction.muiContent`,
    },
    {
      title: 'introduction.modularStructureTitle',
      avatar: CampaignIcon,
      content: `introduction.modularStructureContent`,
    },
    {
      title: 'introduction.formManagementTitle',
      avatar: CampaignIcon,
      content: `introduction.formManagementContent`,
    },
    {
      title: 'introduction.reduxTitle',
      avatar: CampaignIcon,
      content: `introduction.reduxContent`,
    },
    {
      title: 'introduction.i18nTitle',
      avatar: CampaignIcon,
      content: `introduction.i18nContent`,
    },
    {
      title: 'introduction.tinymceTitle',
      avatar: CampaignIcon,
      content: `introduction.tinymceContent`,
    },
    {
      title: 'introduction.prettierEslintTitle',
      avatar: CampaignIcon,
      content: `introduction.prettierEslintContent`,
    },
    {
      title: 'introduction.guardSystemTitle',
      avatar: CampaignIcon,
      content: `introduction.guardSystemContent`,
    },
  ]);

  return (
    <GridComp container spacing={5}>
      <GridComp item xs={12}>
        <CustomDashboardCard sx={{ height: '100%' }}>
          <CardHeaderComp
            avatar={<WavingHandIcon />}
            title={<TypographyComp variant="button">introduction.devStarterWelcome</TypographyComp>}
            subheader={<TypographyComp variant="button">introduction.devStarterTagline</TypographyComp>}
          />
          <CardContentComp>
            <TypographyComp variant="button">introduction.devStarterDescription</TypographyComp>
          </CardContentComp>
        </CustomDashboardCard>
      </GridComp>

      <GridComp item xs={12}>
        <SliderComp>
          {sliderItems.map((item, index) => (
            <DashboardCard
              key={index.toString()}
              sx={{ height: '100%', background: 'transparent !important', boxShadow: 'none' }}
            >
              <CardHeaderComp
                avatar={<item.avatar />}
                title={<TypographyComp variant="button">{item.title}</TypographyComp>}
              />
              <CardContentComp>
                <TypographyComp variant="button">{item.content}</TypographyComp>
              </CardContentComp>
            </DashboardCard>
          ))}
        </SliderComp>
      </GridComp>
    </GridComp>
  );
};

export default HeaderSection;
