import React from 'react';
import styled from '@emotion/styled';
import ButtonComp from '../../../../../../components/base/button/Button';
import DrawerComp from '../../../../../../components/base/drawer/Drawer';
import BoxComp from '../../../../../../components/base/box/Box';
import DividerComp from '../../../../../../components/base/divider/Divider';
import ChipComp from '../../../../../../components/base/chip/Chip';
import FormControlLabelComp from '../../../../../../components/base/formControlLabel/FormControlLabel';
import SwitchComp from '../../../../../../components/base/switch/Switch';
import AlertComp from '../../../../../../components/base/alert/Alert';
import TextFieldComp from '../../../../../../components/base/textField/TextField';
import SelectComp from '../../../../../../components/base/select/Select';
import MenuItemComp from '../../../../../../components/base/menuItem/MenuItem';

const DrawerRoot = styled(BoxComp)`
  width: 270px;
  overflow-x: hidden;
  margin-top: 10px;
`;

interface GeneralSetting {
  generalSettingTitle?: string;
  generalSettingName: string;
  description: string;
  enabled?: boolean;
  value?: number | string;
  type: 'boolean' | 'number' | 'select';
  options?: { value: string; label: string }[];
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

  const handleNumberValueChange = (name: string, value: number) => {
    const newState = {
      ...settings,
      [name]: {
        ...settings[name],
        value,
      },
    };
    onSettingsChange?.(newState);
  };

  const handleSelectValueChange = (name: string, value: string) => {
    const newState = {
      ...settings,
      [name]: {
        ...settings[name],
        value,
      },
    };
    onSettingsChange?.(newState);
  };

  return (
    <>
      <ButtonComp variant="contained" color="success" onClick={() => setDrawerOpen(true)}>
        introduction.showApplicableGridSettings
      </ButtonComp>

      <DrawerComp anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <DrawerRoot>
          {Object.entries(settings).map(([key, setting]) => (
            <BoxComp key={key} display={'flex'} flexDirection={'column'} gap={'5px'} marginBottom={'25px'}>
              {setting.generalSettingTitle && (
                <BoxComp paddingLeft={'5px'} paddingRight={'5px'} marginBottom={'15px'}>
                  <AlertComp variant="standard" color="info" icon={false}>
                    {setting.generalSettingTitle}
                  </AlertComp>
                </BoxComp>
              )}

              <DividerComp>
                <ChipComp color="warning" label={setting.generalSettingName} />
              </DividerComp>

              <BoxComp display={'flex'} flexDirection={'column'} gap={'2px'} paddingLeft={'5px'} paddingRight={'5px'}>
                <AlertComp variant="outlined" color="warning" icon={false} severity="info">
                  {setting.description}
                </AlertComp>

                <BoxComp display={'flex'} justifyContent={'center'}>
                  {setting.type === 'boolean' ? (
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
                  ) : setting.type === 'number' ? (
                    <TextFieldComp
                      sx={{ marginTop: '5px' }}
                      fullWidth={true}
                      type="number"
                      value={setting.value || 0}
                      onChange={(e) => handleNumberValueChange(setting.generalSettingName, Number(e.target.value))}
                      size="small"
                    />
                  ) : (
                    <SelectComp
                      sx={{ marginTop: '5px' }}
                      fullWidth={true}
                      size="small"
                      items={setting.options ?? []}
                      value={setting.value || ''}
                      onChange={(e) => handleSelectValueChange(setting.generalSettingName, e.target.value as string)}
                    >
                      {setting.options?.map((option) => (
                        <MenuItemComp key={option.value} value={option.value}>
                          {option.label}
                        </MenuItemComp>
                      ))}
                    </SelectComp>
                  )}
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
