import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import { prepareAllRoutes } from '../../../../router/routerConstant';
import BoxComp from '../../../../components/base/box/Box';
import CardComp from '../../../../components/base/card/Card';
import GridComp from '../../../../components/base/grid/Grid';
import TypographyComp from '../../../../components/base/typography/Typography';
import DividerComp from '../../../../components/base/divider/Divider';
import ButtonComp from '../../../../components/base/button/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const CardRoot = styled(CardComp)`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  @media (min-width: 768px) {
    flex-direction: row;
  }

  ${(props) =>
    props.theme.palette.mode === 'dark' &&
    css`
      background-color: #303b48;
    `}

  ${(props) =>
    props.theme.palette.mode === 'light' &&
    css`
      background-color: #dfe8f6;
    `}
`;

const ContentBox = styled(BoxComp)`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  padding: 24px;
`;

const PriceBox = styled(BoxComp)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  min-width: 200px;
  background-color: #0a66c2;
`;

const IntroPricing: React.FC = () => {
  const navigate = useNavigate();
  const allRoutes = prepareAllRoutes();

  const [packages] = useState([
    {
      name: 'introduction.economicPackage',
      description: 'introduction.economicPackageDesc',
      features: ['introduction.economicPackageFeature1', 'introduction.economicPackageFeature2'],
      price: 'introduction.economicPackagePrice',
      priceDescription: 'introduction.economicPackagePriceDescription',
    },
    {
      name: 'introduction.advantagePackage',
      description: 'introduction.advantagePackageDesc',
      features: [
        'introduction.advantagePackageFeature1',
        'introduction.advantagePackageFeature2',
        'introduction.advantagePackageFeature3',
        'introduction.advantagePackageFeature4',
      ],
      price: 'introduction.advantagePackagePrice',
      priceDescription: 'introduction.advantagePackagePriceDescription',
    },
  ]);

  return (
    <BoxComp>
      <BoxComp display={'flex'} flexDirection={'row'} alignItems={'center'} gap={'5px'}>
        <TypographyComp variant="h3" gutterBottom display="inline">
          introductionRoutes.pricing
        </TypographyComp>
        <DividerComp sx={{ flexGrow: 1 }} />
      </BoxComp>

      <br />

      <BoxComp display={'flex'} flexDirection={'column'} gap={'15px'}>
        {packages.map((item, index) => (
          <CardRoot key={index.toString()}>
            <ContentBox>
              <TypographyComp variant="h2">{item.name}</TypographyComp>

              <TypographyComp variant="body1">{item.description}</TypographyComp>

              <BoxComp
                display={'flex'}
                flexDirection={'row'}
                alignItems={'center'}
                gap={'15px'}
                marginTop={'10px'}
                marginBottom={'5px'}
              >
                <TypographyComp variant="h4">introduction.packageFeatures</TypographyComp>
                <DividerComp sx={{ flexGrow: 1 }} />
              </BoxComp>

              <GridComp container spacing={5}>
                {item.features.map((featureItem, featureIndex) => (
                  <GridComp key={featureIndex.toString()} item xs={6}>
                    <BoxComp display={'flex'} flexDirection={'row'} alignItems={'center'} gap={'8px'}>
                      <CheckCircleIcon color="success" />
                      <TypographyComp variant="body2">{featureItem}</TypographyComp>
                    </BoxComp>
                  </GridComp>
                ))}
              </GridComp>
            </ContentBox>

            <PriceBox>
              <TypographyComp fontSize={'5.2rem'} fontWeight={'800'}>
                {item.price}
              </TypographyComp>

              <TypographyComp variant="body2" textAlign="center" marginTop={1}>
                {item.priceDescription}
              </TypographyComp>

              <ButtonComp
                fullWidth
                variant="contained"
                color="success"
                sx={{ marginTop: 2 }}
                onClick={() => navigate(allRoutes.CONTACT_PAGE.path)}
              >
                introduction.contactUs
              </ButtonComp>
            </PriceBox>
          </CardRoot>
        ))}
      </BoxComp>
    </BoxComp>
  );
};

export default IntroPricing;
