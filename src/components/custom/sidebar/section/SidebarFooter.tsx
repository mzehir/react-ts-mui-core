import { useSelector } from 'react-redux';
import styled from '@emotion/styled';
import { RootState } from '../../../../redux/store';
import BoxComp from '../../../base/box/Box';
import TypographyComp from '../../../base/typography/Typography';
import AvatarComp from '../../../base/avatar/Avatar';

const FooterWrapper = styled(BoxComp)`
  background-color: ${(props) => props.theme?.sidebar.footer.background} !important;
  padding: ${(props) => props.theme?.spacing(3)} ${(props) => props.theme?.spacing(3)};
`;

const SidebarFooter = () => {
  const { name, surname, email, image } = useSelector((state: RootState) => state.auth);

  return (
    <FooterWrapper>
      <BoxComp display={'flex'} flexDirection={'column'} alignItems="center" justifyContent="center" gap={'5px'}>
        <AvatarComp alt="User Photo" src={image ? image : ''} />

        <TypographyComp isTranslation={false} variant="body2">
          {name} {surname}
        </TypographyComp>

        <TypographyComp isTranslation={false} variant="body2">
          {email}
        </TypographyComp>
      </BoxComp>
    </FooterWrapper>
  );
};

export default SidebarFooter;
