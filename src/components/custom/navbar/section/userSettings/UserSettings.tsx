import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { clearAuthFields } from '../../../../../redux/slices/authSlice';
import IconButtonComp from '../../../../base/iconButton/IconButton';
import MenuComp from '../../../../base/menu/Menu';
import MenuItemComp from '../../../../base/menuItem/MenuItem';
import LogoutIcon from '@mui/icons-material/Logout';

interface UserSettingsSectionProps {
  anchorMenu: HTMLElement | null;
  closeMenu: () => void;
}

const CustomIconButton = styled(IconButtonComp)`
  margin-right: 15px;
  padding: 0;
  background-color: transparent;
  &:hover {
    background-color: transparent;
  }
`;

const UserSettingsSection: React.FC<UserSettingsSectionProps> = ({ anchorMenu, closeMenu }) => {
  const dispatch = useDispatch();
  const [menuItems] = useState([
    {
      text: 'component.signOut',
      onClick: async () => {
        dispatch(clearAuthFields());
      },
      icon: LogoutIcon,
    },
  ]);

  return (
    <MenuComp anchorEl={anchorMenu} open={Boolean(anchorMenu)} onClose={closeMenu}>
      {menuItems.map((item, index) => (
        <MenuItemComp key={index} isTranslation={true} onClick={item.onClick}>
          <CustomIconButton>
            <item.icon fontSize="small" />
          </CustomIconButton>

          {item.text}
        </MenuItemComp>
      ))}
    </MenuComp>
  );
};

export default UserSettingsSection;
