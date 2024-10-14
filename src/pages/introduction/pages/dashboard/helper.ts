import styled from '@emotion/styled';
import { css } from '@emotion/react';
import CardComp from '../../../../components/base/card/Card';
// import backgroundImage from '../../../../assets/app/1111.jpg'; // Resmi import ediyoruz

export const hexToRgba = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// export const DashboardCard = styled(CardComp)`
//   padding: ${(props) => props.theme.spacing(6)};
//   background-image: url(${backgroundImage});
//   background-size: cover; /* Kartı tam kaplasın */
//   background-position: center; /* Ortaya hizala */
//   background-repeat: no-repeat; /* Tekrarlama olmasın */
//   border-radius: ${(props) => props.theme.shape.borderRadius}px;
//   box-shadow: ${(props) => props.theme.shadows[2]};
//   height: 300px; /* Yükseklik ayarla */
//   width: 100%; /* Kart genişliğini ayarla */
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: white; /* İçerik rengi */
// `;

export const DashboardCard = styled(CardComp)`
  padding: ${(props) => props.theme.spacing(6)};

  ${(props) =>
    props.theme.palette.mode !== 'dark' &&
    css`
      background: ${hexToRgba(props.theme.palette.primary.main, 0.125)};
      color: ${props.theme.palette.primary.main};
    `}
`;
