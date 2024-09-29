import React, { useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import BoxComp from '../../../../../base/box/Box';
import AlertComp from '../../../../../base/alert/Alert';
import GridComp from '../../../../../base/grid/Grid';
import { Language } from '../../../../../../utils/enums/languages';
import LanguageItem from './LanguageItem';

interface FlagFields {
  countryCode: string;
  tooltipText: string;
  flagStyle: React.CSSProperties;
}

interface LanguageItemType {
  value: Language;
  text: string;
  flagFields: FlagFields;
}

const LanguageSettings: React.FC = () => {
  const [languageItems] = useState<LanguageItemType[]>([
    {
      value: Language.EN,
      text: 'US',
      flagFields: {
        countryCode: 'US',
        tooltipText: 'EN',
        flagStyle: {
          width: '6em',
          height: '6em',
          borderRadius: '15px',
        },
      },
    },
    {
      value: Language.TR,
      text: 'TR',
      flagFields: {
        countryCode: 'TR',
        tooltipText: 'TR',
        flagStyle: {
          width: '6em',
          height: '6em',
          borderRadius: '15px',
        },
      },
    },
    {
      value: Language.DE,
      text: 'DE',
      flagFields: {
        countryCode: 'DE',
        tooltipText: 'DE',
        flagStyle: {
          width: '6em',
          height: '6em',
          borderRadius: '15px',
        },
      },
    },
  ]);

  return (
    <React.Fragment>
      <BoxComp px={4} my={3}>
        <AlertComp icon={false} severity="info">
          component.chooseLanguage
        </AlertComp>
      </BoxComp>

      <BoxComp px={4} my={3}>
        <GridComp container spacing={3}>
          {languageItems.map((item, index) => (
            <LanguageItem key={index} title={item.text} value={item.value}>
              <ReactCountryFlag
                countryCode={item.flagFields.countryCode}
                style={item.flagFields.flagStyle}
                title={item.flagFields.tooltipText}
                svg
              />
            </LanguageItem>
          ))}
        </GridComp>
      </BoxComp>
    </React.Fragment>
  );
};

export default LanguageSettings;
