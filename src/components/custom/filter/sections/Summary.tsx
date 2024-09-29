import React, { useState, useEffect } from 'react';
import useLanguageContext from '../../../../hooks/useLanguageContext';
import styled from '@emotion/styled';
import { SummarySectionProps } from '../helper/sectionSummaryHelper';
import AccordionSummaryComp from '../../../base/accordionSummary/AccordionSummary';
import BoxComp from '../../../base/box/Box';
import ButtonComp from '../../../base/button/Button';
import TypographyComp from '../../../base/typography/Typography';
import ChipComp from '../../../base/chip/Chip';
import FilterListIcon from '@mui/icons-material/FilterList';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { dayjsDateToString } from '../../../../utils/locale/dateFormats';
import { Dayjs } from 'dayjs';

const CustomAccordionSummaryComp = styled(AccordionSummaryComp)`
  background-color: ${({ theme }) =>
    theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)'};
  flex-direction: row-reverse;

  & .MuiAccordionSummary-expandIconWrapper.Mui-expanded {
    transform: rotate(90deg);
  }

  & .MuiAccordionSummary-content {
    margin-left: ${({ theme }) => theme.spacing(2)};

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const ChipWrapperBox = styled(BoxComp)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;

const ButtonWrapperBox = styled(BoxComp)`
  display: flex;
  flex-direction: row;
  justify-content: end;
  flex-wrap: wrap;
  gap: 10px;
`;

const SummarySection: React.FC<SummarySectionProps> = ({ filterItems, values, handleValueChange, onFilter }) => {
  const { translate } = useLanguageContext();
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const localTranslate = (isTranslate: boolean, stringData: string) => {
    if (isTranslate) {
      return translate(stringData);
    } else {
      return stringData;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <CustomAccordionSummaryComp expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}>
      <ChipWrapperBox>
        {Object.keys(values).length === 0 ? (
          <TypographyComp variant="h5">common.noFilterSelected</TypographyComp>
        ) : (
          <React.Fragment>
            {filterItems.map((item, index) => (
              <React.Fragment key={index.toString()}>
                {item.componentType === 'textField' && values[item.name] && (
                  <ChipComp
                    label={`${localTranslate(!!item.summaryProps.isSummaryLabelTranslation, item.summaryProps.summaryLabel)}: ${values[item.name].value}`}
                    isTranslation={false}
                    onDelete={() => handleValueChange({ key: item.name, newValue: null, type: 'delete' })}
                    color="warning"
                    sx={{ fontWeight: 500 }}
                  />
                )}

                {item.componentType === 'numericTextField' && values[item.name] && (
                  <ChipComp
                    label={`${localTranslate(!!item.summaryProps.isSummaryLabelTranslation, item.summaryProps.summaryLabel)}: ${values[item.name].value}`}
                    isTranslation={false}
                    onDelete={() => handleValueChange({ key: item.name, newValue: null, type: 'delete' })}
                    color="warning"
                    sx={{ fontWeight: 500 }}
                  />
                )}

                {item.componentType === 'datePicker' && values[item.name] && (
                  <ChipComp
                    label={`${localTranslate(!!item.summaryProps.isSummaryLabelTranslation, item.summaryProps.summaryLabel)}: ${dayjsDateToString(values[item.name].value as Dayjs)}`}
                    isTranslation={false}
                    onDelete={() => handleValueChange({ key: item.name, newValue: null, type: 'delete' })}
                    color="warning"
                    sx={{ fontWeight: 500 }}
                  />
                )}

                {item.componentType === 'checkbox' && values[item.name] && (
                  <ChipComp
                    label={`${localTranslate(!!item.summaryProps.isSummaryLabelTranslation, item.summaryProps.summaryLabel)}: ${values[item.name].value ? `${localTranslate(true, 'common.open')}` : `${localTranslate(true, 'common.close')}`}`}
                    isTranslation={false}
                    onDelete={() => handleValueChange({ key: item.name, newValue: null, type: 'delete' })}
                    color="warning"
                    sx={{ fontWeight: 500 }}
                  />
                )}

                {item.componentType === 'radio' && values[item.name] && (
                  <ChipComp
                    label={`${localTranslate(!!item.summaryProps.isSummaryLabelTranslation, item.summaryProps.summaryLabel)}: ${localTranslate(item.componentProps.isItemTranslation ?? false, item.componentProps.items.filter((selectItem) => selectItem.value == values[item.name].value)[0].label)}`}
                    isTranslation={false}
                    onDelete={() => handleValueChange({ key: item.name, newValue: null, type: 'delete' })}
                    color="warning"
                    sx={{ fontWeight: 500 }}
                  />
                )}

                {item.componentType === 'select' && values[item.name] && (
                  <ChipComp
                    label={`${localTranslate(!!item.summaryProps.isSummaryLabelTranslation, item.summaryProps.summaryLabel)}: ${localTranslate(item.componentProps.isItemTranslation ?? false, item.componentProps.items.filter((selectItem) => selectItem.value == values[item.name].value)[0].label)}`}
                    isTranslation={false}
                    onDelete={() => handleValueChange({ key: item.name, newValue: null, type: 'delete' })}
                    color="warning"
                    sx={{ fontWeight: 500 }}
                  />
                )}
              </React.Fragment>
            ))}
          </React.Fragment>
        )}
      </ChipWrapperBox>

      <ButtonWrapperBox>
        {windowWidth < 750 ? (
          <ClearIcon
            color="error"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleValueChange({ key: '', newValue: null, type: 'allDelete' });
            }}
          />
        ) : (
          <ButtonComp
            variant="contained"
            color="error"
            endIcon={<ClearIcon />}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleValueChange({ key: '', newValue: null, type: 'allDelete' });
            }}
          >
            common.clearTheFilters
          </ButtonComp>
        )}

        {windowWidth < 750 ? (
          <FilterListIcon
            color="success"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onFilter();
            }}
          />
        ) : (
          <ButtonComp
            variant="contained"
            color="success"
            endIcon={<FilterListIcon />}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onFilter();
            }}
          >
            common.filter
          </ButtonComp>
        )}
      </ButtonWrapperBox>
    </CustomAccordionSummaryComp>
  );
};

export default SummarySection;
