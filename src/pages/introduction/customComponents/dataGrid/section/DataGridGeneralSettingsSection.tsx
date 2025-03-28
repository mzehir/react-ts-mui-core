import React from 'react';
import styled from '@emotion/styled';
import ButtonComp from '../../../../../components/base/button/Button';
import DrawerComp from '../../../../../components/base/drawer/Drawer';
import BoxComp from '../../../../../components/base/box/Box';
import DividerComp from '../../../../../components/base/divider/Divider';
import ChipComp from '../../../../../components/base/chip/Chip';
import FormControlLabelComp from '../../../../../components/base/formControlLabel/FormControlLabel';
import SwitchComp from '../../../../../components/base/switch/Switch';
import AlertComp from '../../../../../components/base/alert/Alert';

const DrawerRoot = styled(BoxComp)`
  width: 270px;
  overflow-x: hidden;
  margin-top: 10px;
`;

interface GeneralSetting {
  generalSettingName: string;
  description: string;
  enabled?: boolean;
}

export interface DataGridGeneralSettings {
  [key: string]: GeneralSetting;
}

interface DataGridGeneralSettingsSectionProps {
  onEventHandlerToggle?: (eventName: string, enabled: boolean) => void;
  onSettingsChange?: (settings: DataGridGeneralSettings) => void;
  settings: DataGridGeneralSettings;
}

const DataGridGeneralSettingsSection: React.FC<DataGridGeneralSettingsSectionProps> = ({
  onSettingsChange,
  settings,
}) => {
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);

  const handleGeneralSettingsToggle = (name: string, enabled: boolean) => {
    const newState = {
      ...settings,
      [name]: {
        ...settings[name],
        enabled,
      },
    };
    onSettingsChange?.(newState);
  };

  return (
    <>
      <ButtonComp variant="contained" color="success" onClick={() => setDrawerOpen(true)}>
        Uygulanabilir Data Grid Ayarlarını Göster
      </ButtonComp>

      <DrawerComp anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <DrawerRoot>
          {Object.entries(settings).map(([key, setting]) => (
            <BoxComp key={key} display={'flex'} flexDirection={'column'} gap={'5px'} marginBottom={'25px'}>
              <DividerComp>
                <ChipComp color="warning" label={setting.generalSettingName} />
              </DividerComp>

              <BoxComp display={'flex'} flexDirection={'column'} gap={'1px'} paddingLeft={'5px'} paddingRight={'5px'}>
                <AlertComp variant="outlined" color="warning" icon={false} severity="info">
                  {setting.description}
                </AlertComp>

                <BoxComp display={'flex'} justifyContent={'center'}>
                  <FormControlLabelComp
                    control={
                      <SwitchComp
                        checked={setting.enabled || false}
                        onChange={(e) => {
                          handleGeneralSettingsToggle(setting.generalSettingName, e.target.checked);
                        }}
                      />
                    }
                    label=""
                  />
                </BoxComp>
              </BoxComp>
            </BoxComp>
          ))}
        </DrawerRoot>
      </DrawerComp>
    </>
  );
};

export default DataGridGeneralSettingsSection;
