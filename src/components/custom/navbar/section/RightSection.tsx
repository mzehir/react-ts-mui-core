import React, { useState, MouseEvent } from 'react';
import BoxComp from '../../../base/box/Box';
import IconButtonComp from '../../../base/iconButton/IconButton';
import DrawerComp from '../../../base/drawer/Drawer';
import SettingsSection from './settings/Settings';
import UserSettingsSection from './userSettings/UserSettings';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';

const RightSection: React.FC = () => {
  const [settingsDrawerState, setSettingsDrawerState] = useState<boolean>(false);

  const [userSettingsAnchorMenu, setUserSettingsAnchorMenu] = useState<null | HTMLElement>(null);
  const toggleMenu = (event: MouseEvent<HTMLElement>) => {
    setUserSettingsAnchorMenu(event.currentTarget);
  };
  const closeMenu = () => {
    setUserSettingsAnchorMenu(null);
  };

  return (
    <BoxComp display={'flex'} flexDirection={'row'} gap={'5px'}>
      <IconButtonComp onClick={() => setSettingsDrawerState(true)}>
        <SettingsIcon />
      </IconButtonComp>

      <IconButtonComp
        aria-owns={userSettingsAnchorMenu ? 'menu-appbar' : undefined}
        aria-haspopup="true"
        onClick={toggleMenu}
      >
        <PersonIcon />
      </IconButtonComp>

      <DrawerComp anchor="right" open={settingsDrawerState} onClose={() => setSettingsDrawerState(false)}>
        <SettingsSection />
      </DrawerComp>

      {Boolean(userSettingsAnchorMenu) && (
        <UserSettingsSection anchorMenu={userSettingsAnchorMenu} closeMenu={closeMenu} />
      )}
    </BoxComp>
  );
};

export default RightSection;
