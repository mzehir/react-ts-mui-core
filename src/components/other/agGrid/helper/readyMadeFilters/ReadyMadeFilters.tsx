import React from 'react';
import styled from '@emotion/styled';
import AccordionComp from '../../../../base/accordion/Accordion';
import SummarySection from './section/Summary';
import DetailSection from './section/Detail';
import { ColumnFilterType } from '../column/columnFilter/columnFilterType';
import type { GridApi } from 'ag-grid-community';

export type GridRefType = React.RefObject<{
  api: GridApi;
  // other params
}>;

interface ReadyMadeFiltersProps {
  readyMadeFilters: ColumnFilterType[];
  gridRef: GridRefType;
}

const CustomAccordionComp = styled((props: React.ComponentProps<typeof AccordionComp>) => (
  <AccordionComp disableGutters elevation={0} square {...props} />
))`
  border: 1px solid ${({ theme }) => theme.palette.divider};

  &::before {
    display: none;
  }
`;

const ReadyMadeFilters: React.FC<ReadyMadeFiltersProps> = ({ readyMadeFilters, gridRef }) => {
  const [contentReady] = React.useState(true);

  const onClicItem = (clickedItem: ColumnFilterType) => {
    if (clickedItem.componentType === 'textColumnFilter') {
      const name = clickedItem.name; // examp => 'surname'
      const defaultOption = clickedItem.componentProps.defaultOption; // examp => 'equals'
      const defaultValue = clickedItem.componentProps.initialFilterFields?.filter;

      gridRef.current?.api.setFilterModel({
        [name]: {
          type: defaultOption,
          filter: defaultValue,
          filterType: 'text',
        },
      });
    }

    if (clickedItem.componentType === 'numberColumnFilter') {
      const name = clickedItem.name;
      const defaultOption = clickedItem.componentProps.defaultOption;
      const defaultValueStart = clickedItem.componentProps.initialFilterFields?.filter;
      const defaultValueEnd = clickedItem.componentProps.initialFilterFields?.filterTo;

      gridRef.current?.api.setFilterModel({
        [name]: {
          type: defaultOption,
          filter: defaultValueStart,
          ...(defaultOption === 'inRange' ? { filterTo: defaultValueEnd } : {}),
          filterType: 'number',
        },
      });
    }

    if (clickedItem.componentType === 'dateColumnFilter') {
      const name = clickedItem.name;
      const defaultOption = clickedItem.componentProps.defaultOption;
      const defaultValueStart = clickedItem.componentProps.initialFilterFields?.dateFrom;
      const defaultValueEnd = clickedItem.componentProps.initialFilterFields?.dateTo;

      gridRef.current?.api.setFilterModel({
        [name]: {
          type: defaultOption,
          dateFrom: defaultValueStart,
          ...(defaultOption === 'inRange' ? { dateTo: defaultValueEnd } : {}),
          filterType: 'date',
        },
      });
    }

    if (clickedItem.componentType === 'radioCustomFilter') {
      const name = clickedItem.name;
      const defaultOption = clickedItem.componentProps.defaultOption;
      const defaultValueStart = clickedItem.componentProps.initialFilterFields?.filter;

      gridRef.current?.api.setFilterModel({
        [name]: {
          type: defaultOption,
          filter: defaultValueStart,
          filterType: 'radio',
        },
      });
    }
  };

  const onClear = () => {
    gridRef.current?.api.setFilterModel(null);
  };

  return (
    contentReady && (
      <CustomAccordionComp>
        <SummarySection onClear={onClear} />
        <DetailSection gridRef={gridRef} items={readyMadeFilters} onClicItem={onClicItem} />
      </CustomAccordionComp>
    )
  );
};

export default ReadyMadeFilters;
