import React, { useState } from 'react';
import styled from '@emotion/styled';
import BoxComp from '../../../../components/base/box/Box';
import TypographyComp from '../../../../components/base/typography/Typography';
import DividerComp from '../../../../components/base/divider/Divider';
import GridComp from '../../../../components/base/grid/Grid';
import CardComp from '../../../../components/base/card/Card';
import CardHeaderComp from '../../../../components/base/cardHeader/CardHeader';
import CardContentComp from '../../../../components/base/cardContent/CardContent';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkComp from '../../../../components/base/link/Link';

const CustomCard = styled(CardComp)`
  padding: ${(props) => props.theme.spacing(6)};
`;

const IntroContact: React.FC = () => {
  const [contactItems] = useState([
    {
      avatar: WhatsAppIcon,
      title: 'WhatsApp',
      label: '+90 (541) 952 5920',
      onClick: () => {
        const whatsappLink = 'https://wa.me/905419525920';
        window.open(whatsappLink, '_blank');
      },
    },
    {
      avatar: EmailIcon,
      title: 'Email',
      label: 'zehir.m.54@gmail.com',
      // onClick: () => {
      //   const email = 'zehir.m.54@gmail.com';
      //   const mailtoLink = `mailto:${email}`;
      //   window.location.href = mailtoLink;
      // },
    },
    {
      avatar: LinkedInIcon,
      title: 'Linkedin',
      label: 'tr.linkedin.com/in/muminzehir54',
      to: 'tr.linkedin.com/in/muminzehir54',
      onClick: () => {
        const link = 'https://tr.linkedin.com/in/muminzehir54';
        window.open(link, '_blank');
      },
    },
    {
      avatar: GitHubIcon,
      title: 'Github',
      label: 'github.com/mzehir',
      onClick: () => {
        const link = 'https://github.com/mzehir';
        window.open(link, '_blank');
      },
    },
  ]);

  return (
    <BoxComp>
      <BoxComp display={'flex'} flexDirection={'row'} alignItems={'center'} gap={'5px'}>
        <TypographyComp variant="h3" gutterBottom display="inline">
          routes.contact
        </TypographyComp>
        <DividerComp sx={{ flexGrow: 1 }} />
      </BoxComp>

      <br />

      <GridComp container spacing={5}>
        {contactItems.map((item, index) => (
          <GridComp key={index.toString()} item xs={12} sm={6} md={4} xl={3}>
            <CustomCard>
              <CardHeaderComp avatar={<item.avatar fontSize="large" />} title={item.title} />

              <CardContentComp>
                <LinkComp
                  sx={{ cursor: item.onClick ? 'pointer' : 'default' }}
                  variant="h5"
                  underline={item.onClick ? 'hover' : 'none'}
                  onClick={(e) => {
                    e.preventDefault();
                    item.onClick && item.onClick();
                  }}
                >
                  {item.label}
                </LinkComp>
              </CardContentComp>
            </CustomCard>
          </GridComp>
        ))}
      </GridComp>
    </BoxComp>
  );
};

export default IntroContact;
