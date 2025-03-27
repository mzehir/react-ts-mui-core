import React, { useRef } from 'react';
import TypographyComp from '../../../../components/base/typography/Typography';
import DividerComp from '../../../../components/base/divider/Divider';
import BoxComp from '../../../../components/base/box/Box';
import FullFeatureDataGrid from '../../../../components/introduction/dataGrid/fullFeatureDataGrid/FullFeatureDataGrid';
import {
  FullFeatureDataGridProps,
  FullFeatureDataGridRef,
} from '../../../../components/introduction/dataGrid/fullFeatureDataGrid/fullFeatureDataGridTypes';
import { employeeColumns, employeeRows } from './fullFeatureDataGridPageTypes';
import DataGridEventHandlerSection, { DataGridEventHandlers } from './section/DataGridEventHandlerSection';

const FullFeatureDataGridPage: React.FC = () => {
  const fullFeatureDataGridRef = useRef<FullFeatureDataGridRef>(null);

  const handleSomeAction = () => {
    const dataGrid = fullFeatureDataGridRef.current?.getDataGrid();
    if (dataGrid) {
      console.log(dataGrid);
    }
  };

  const [dataGridEventHandlers, setDataGridEventHandlers] = React.useState<DataGridEventHandlers>({
    onCellClick: {
      eventHandlerName: 'onCellClick',
      parameters: [
        { name: 'params', value: null },
        { name: 'event', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnCellClickDescription',
    },
    onCellDoubleClick: {
      eventHandlerName: 'onCellDoubleClick',
      parameters: [
        { name: 'params', value: null },
        { name: 'event', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnCellDoubleClickDescription',
    },
    onCellEditStart: {
      eventHandlerName: 'onCellEditStart',
      parameters: [
        { name: 'params', value: null },
        { name: 'event', value: null },
      ],
      description: 'introduction.dataGridOnCellEditStartDescription',
    },
  });

  const setDataGridEventHandlersMethods = (
    eventHandlerName: string,
    parametersData: DataGridEventHandlers[string]['parameters'],
  ) => {
    setDataGridEventHandlers((prevValue) => ({
      ...prevValue,
      [eventHandlerName]: {
        ...prevValue[eventHandlerName],
        parameters: parametersData,
      },
    }));
  };

  const onCellClick: FullFeatureDataGridProps['onCellClick'] = (params, event, details) => {
    const eventHandlerName = 'onCellClick';
    const parametersData = [
      { name: 'params', value: params },
      { name: 'event', value: event },
      { name: 'details', value: details },
    ];

    setDataGridEventHandlersMethods(eventHandlerName, parametersData);
  };

  const onCellDoubleClick: FullFeatureDataGridProps['onCellDoubleClick'] = (params, event, details) => {
    const eventHandlerName = 'onCellDoubleClick';
    const parametersData = [
      { name: 'params', value: params },
      { name: 'event', value: event },
      { name: 'details', value: details },
    ];

    setDataGridEventHandlersMethods(eventHandlerName, parametersData);
  };

  const onCellEditStart: FullFeatureDataGridProps['onCellEditStart'] = (params, event) => {
    const eventHandlerName = 'onCellEditStart';
    const parametersData = [
      { name: 'params', value: params },
      { name: 'event', value: event },
    ];

    setDataGridEventHandlersMethods(eventHandlerName, parametersData);
  };

  return (
    <>
      <DividerComp>
        <TypographyComp variant="h2" gutterBottom display="inline">
          introduction.fullFeatureDataGridComponent
        </TypographyComp>
      </DividerComp>

      <br />
      <br />

      <button
        onClick={() => {
          handleSomeAction();
        }}
      >
        Göster
      </button>

      <BoxComp sx={{ height: 400, width: '100%' }}>
        <FullFeatureDataGrid
          rows={employeeRows}
          columns={employeeColumns}
          ref={fullFeatureDataGridRef}
          onCellClick={onCellClick}
          onCellDoubleClick={onCellDoubleClick}
          onCellEditStart={onCellEditStart}
        />
      </BoxComp>

      <br />
      <br />

      <DataGridEventHandlerSection eventHandlers={dataGridEventHandlers} />
    </>
  );
};

export default FullFeatureDataGridPage;
