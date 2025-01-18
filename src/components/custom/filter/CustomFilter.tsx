import React from 'react';
import styled from '@emotion/styled';
import { CustomFilterProps, CustomFilterRef, HandleValueChangeParams, ValuesValue } from './helper';
import AccordionComp from '../../base/accordion/Accordion';
import SummarySection from './sections/Summary';
import DetailSection from './sections/Detail';

const CustomAccordionComp = styled((props: React.ComponentProps<typeof AccordionComp>) => (
  <AccordionComp disableGutters elevation={0} square {...props} />
))`
  border: 1px solid ${({ theme }) => theme.palette.divider};

  &:not(:last-child) {
    border-bottom: 0;
  }

  &::before {
    display: none;
  }
`;

const CustomFilter = React.forwardRef<CustomFilterRef, CustomFilterProps>(({ filterItems, onFilter }, ref) => {
  const [values, setValues] = React.useState<{ [key: string]: ValuesValue }>({});
  const [contentReady, setContentReady] = React.useState(false);

  const handleValueChange = ({ key, newValue, type }: HandleValueChangeParams) => {
    setValues((prevValues) => {
      if (type === 'allDelete') {
        return {};
      }

      if (
        type === 'delete' ||
        (typeof newValue === 'string' && newValue === '') ||
        (typeof newValue === 'number' && newValue === 0)
      ) {
        const newValues = { ...prevValues };
        delete newValues[key];
        return newValues;
      }

      return {
        ...prevValues,
        [key]: { value: newValue },
      };
    });
  };

  React.useEffect(() => {
    if (filterItems) {
      const _values: { [key: string]: ValuesValue } = {};

      for (let i = 0; i < filterItems.length; i++) {
        const element = filterItems[i];

        if (
          element.componentProps.defaultValue !== undefined &&
          element.componentProps.defaultValue !== null &&
          element.componentProps.defaultValue !== ''
        ) {
          _values[element.name] = {
            value: element.componentProps.defaultValue,
          };
        }
      }

      setValues(_values);
      setContentReady(true);
    }
  }, [filterItems]);

  React.useImperativeHandle(ref, () => ({
    getCurrentFilterValues: () => {
      return values;
    },
  }));

  return (
    contentReady && (
      <CustomAccordionComp>
        <SummarySection
          filterItems={filterItems}
          values={values}
          handleValueChange={handleValueChange}
          onFilter={() => {
            onFilter(values);
          }}
        />
        <DetailSection filterItems={filterItems} values={values} handleValueChange={handleValueChange} />
      </CustomAccordionComp>
    )
  );
});

CustomFilter.displayName = 'CustomFilter';
export default CustomFilter;
