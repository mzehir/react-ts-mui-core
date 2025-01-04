import { useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import { RootState } from '../../../../redux/store';
import TypographyComp from '../../../base/typography/Typography';
import AvatarComp from '../../../base/avatar/Avatar';

const FooterWrapper = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  gap: '10px',
  padding: theme.spacing(0, 3),
  backgroundColor: theme.sidebar.footer.background,
}));

const SidebarFooter = () => {
  const { name, surname } = useSelector((state: RootState) => state.auth);

  return (
    <FooterWrapper>
      <AvatarComp alt="User Photo" src={''} />

      <TypographyComp isTranslation={false} variant="body2">
        {name} {surname}
      </TypographyComp>
    </FooterWrapper>
  );
};

export default SidebarFooter;
