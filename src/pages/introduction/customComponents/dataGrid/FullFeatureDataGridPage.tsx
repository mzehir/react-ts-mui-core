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

  // DataGrid Event Handler State ************************
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
    onCellEditStop: {
      eventHandlerName: 'onCellEditStop',
      parameters: [
        { name: 'params', value: null },
        { name: 'event', value: null },
      ],
      description: 'introduction.dataGridOnCellEditStopDescription',
    },
    onCellKeyDown: {
      eventHandlerName: 'onCellKeyDown',
      parameters: [
        { name: 'params', value: null },
        { name: 'event', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnCellKeyDownDescription',
    },
    onCellModesModelChange: {
      eventHandlerName: 'onCellModesModelChange',
      parameters: [
        { name: 'cellModesModel', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnCellModesModelChangeDescription',
    },
    onClipboardCopy: {
      eventHandlerName: 'onClipboardCopy',
      parameters: [{ name: 'params', value: null }],
      description: 'introduction.dataGridOnClipboardCopyDescription',
    },
    onColumnHeaderClick: {
      eventHandlerName: 'onColumnHeaderClick',
      parameters: [
        { name: 'params', value: null },
        { name: 'event', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnColumnHeaderClickDescription',
    },
    onColumnHeaderContextMenu: {
      eventHandlerName: 'onColumnHeaderContextMenu',
      parameters: [
        { name: 'params', value: null },
        { name: 'event', value: null },
      ],
      description: 'introduction.dataGridOnColumnHeaderContextMenuDescription',
    },
    onColumnHeaderDoubleClick: {
      eventHandlerName: 'onColumnHeaderDoubleClick',
      parameters: [
        { name: 'params', value: null },
        { name: 'event', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnColumnHeaderDoubleClickDescription',
    },
    onColumnHeaderEnter: {
      eventHandlerName: 'onColumnHeaderEnter',
      parameters: [
        { name: 'params', value: null },
        { name: 'event', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnColumnHeaderEnterDescription',
    },
    onColumnHeaderLeave: {
      eventHandlerName: 'onColumnHeaderLeave',
      parameters: [
        { name: 'params', value: null },
        { name: 'event', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnColumnHeaderLeaveDescription',
    },
    onColumnHeaderOut: {
      eventHandlerName: 'onColumnHeaderOut',
      parameters: [
        { name: 'params', value: null },
        { name: 'event', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnColumnHeaderOutDescription',
    },
    onColumnHeaderOver: {
      eventHandlerName: 'onColumnHeaderOver',
      parameters: [
        { name: 'params', value: null },
        { name: 'event', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnColumnHeaderOverDescription',
    },
    onColumnOrderChange: {
      eventHandlerName: 'onColumnOrderChange',
      parameters: [
        { name: 'params', value: null },
        { name: 'event', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnColumnOrderChangeDescription',
    },
    onColumnResize: {
      eventHandlerName: 'onColumnResize',
      parameters: [
        { name: 'params', value: null },
        { name: 'event', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnColumnResizeDescription',
    },
    onColumnVisibilityModelChange: {
      eventHandlerName: 'onColumnVisibilityModelChange',
      parameters: [
        { name: 'model', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnColumnVisibilityModelChangeDescription',
    },
    onColumnWidthChange: {
      eventHandlerName: 'onColumnWidthChange',
      parameters: [
        { name: 'params', value: null },
        { name: 'event', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnColumnWidthChangeDescription',
    },
    onDensityChange: {
      eventHandlerName: 'onDensityChange',
      parameters: [{ name: 'density', value: null }],
      description: 'introduction.dataGridOnDensityChangeDescription',
    },
    onFilterModelChange: {
      eventHandlerName: 'onFilterModelChange',
      parameters: [
        { name: 'model', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnFilterModelChangeDescription',
    },
    onMenuClose: {
      eventHandlerName: 'onMenuClose',
      parameters: [
        { name: 'params', value: null },
        { name: 'event', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnMenuCloseDescription',
    },
    onMenuOpen: {
      eventHandlerName: 'onMenuOpen',
      parameters: [
        { name: 'params', value: null },
        { name: 'event', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnMenuOpenDescription',
    },
    onPaginationMetaChange: {
      eventHandlerName: 'onPaginationMetaChange',
      parameters: [{ name: 'paginationMeta', value: null }],
      description: 'introduction.dataGridOnPaginationMetaChangeDescription',
    },
    onPaginationModelChange: {
      eventHandlerName: 'onPaginationModelChange',
      parameters: [
        { name: 'model', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnPaginationModelChangeDescription',
    },
    onPreferencePanelClose: {
      eventHandlerName: 'onPreferencePanelClose',
      parameters: [
        { name: 'params', value: null },
        { name: 'event', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnPreferencePanelCloseDescription',
    },
    onPreferencePanelOpen: {
      eventHandlerName: 'onPreferencePanelOpen',
      parameters: [
        { name: 'params', value: null },
        { name: 'event', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnPreferencePanelOpenDescription',
    },
    onProcessRowUpdateError: {
      eventHandlerName: 'onProcessRowUpdateError',
      parameters: [{ name: 'error', value: null }],
      description: 'introduction.dataGridOnProcessRowUpdateErrorDescription',
    },
    onResize: {
      eventHandlerName: 'onResize',
      parameters: [
        { name: 'params', value: null },
        { name: 'event', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnResizeDescription',
    },
    onRowClick: {
      eventHandlerName: 'onRowClick',
      parameters: [
        { name: 'params', value: null },
        { name: 'event', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnRowClickDescription',
    },
    onRowCountChange: {
      eventHandlerName: 'onRowCountChange',
      parameters: [{ name: 'count', value: null }],
      description: 'introduction.dataGridOnRowCountChangeDescription',
    },
    onRowDoubleClick: {
      eventHandlerName: 'onRowDoubleClick',
      parameters: [
        { name: 'params', value: null },
        { name: 'event', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnRowDoubleClickDescription',
    },
    onRowEditStart: {
      eventHandlerName: 'onRowEditStart',
      parameters: [
        { name: 'params', value: null },
        { name: 'event', value: null },
      ],
      description: 'introduction.dataGridOnRowEditStartDescription',
    },
    onRowEditStop: {
      eventHandlerName: 'onRowEditStop',
      parameters: [
        { name: 'params', value: null },
        { name: 'event', value: null },
      ],
      description: 'introduction.dataGridOnRowEditStopDescription',
    },
    onRowModesModelChange: {
      eventHandlerName: 'onRowModesModelChange',
      parameters: [
        { name: 'rowModesModel', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnRowModesModelChangeDescription',
    },
    onRowSelectionModelChange: {
      eventHandlerName: 'onRowSelectionModelChange',
      parameters: [
        { name: 'rowSelectionModel', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnRowSelectionModelChangeDescription',
    },
    onSortModelChange: {
      eventHandlerName: 'onSortModelChange',
      parameters: [
        { name: 'model', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnSortModelChangeDescription',
    },
  });
  // DataGrid Event Handler State ************************

  // DataGrid Event Handler Methods ************************
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

  const onCellEditStop: FullFeatureDataGridProps['onCellEditStop'] = (params, event) => {
    const eventHandlerName = 'onCellEditStop';
    const parametersData = [
      { name: 'params', value: params },
      { name: 'event', value: event },
    ];

    setDataGridEventHandlersMethods(eventHandlerName, parametersData);
  };

  const onCellKeyDown: FullFeatureDataGridProps['onCellKeyDown'] = (params, event, details) => {
    const eventHandlerName = 'onCellKeyDown';
    const parametersData = [
      { name: 'params', value: params },
      { name: 'event', value: event },
      { name: 'details', value: details },
    ];

    setDataGridEventHandlersMethods(eventHandlerName, parametersData);
  };

  const onCellModesModelChange: FullFeatureDataGridProps['onCellModesModelChange'] = (cellModesModel, details) => {
    const eventHandlerName = 'onCellModesModelChange';
    const parametersData = [
      { name: 'cellModesModel', value: cellModesModel },
      { name: 'details', value: details },
    ];

    setDataGridEventHandlersMethods(eventHandlerName, parametersData);
  };

  const onClipboardCopy: FullFeatureDataGridProps['onClipboardCopy'] = (params) => {
    const eventHandlerName = 'onClipboardCopy';
    const parametersData = [{ name: 'params', value: params }];

    setDataGridEventHandlersMethods(eventHandlerName, parametersData);
  };

  const onColumnHeaderClick: FullFeatureDataGridProps['onColumnHeaderClick'] = (params, event, details) => {
    const eventHandlerName = 'onColumnHeaderClick';
    const parametersData = [
      { name: 'params', value: params },
      { name: 'event', value: event },
      { name: 'details', value: details },
    ];

    setDataGridEventHandlersMethods(eventHandlerName, parametersData);
  };

  const onColumnHeaderContextMenu: FullFeatureDataGridProps['onColumnHeaderContextMenu'] = (params, event) => {
    const eventHandlerName = 'onColumnHeaderContextMenu';
    const parametersData = [
      { name: 'params', value: params },
      { name: 'event', value: event },
    ];

    setDataGridEventHandlersMethods(eventHandlerName, parametersData);
  };

  const onColumnHeaderDoubleClick: FullFeatureDataGridProps['onColumnHeaderDoubleClick'] = (params, event, details) => {
    const eventHandlerName = 'onColumnHeaderDoubleClick';
    const parametersData = [
      { name: 'params', value: params },
      { name: 'event', value: event },
      { name: 'details', value: details },
    ];

    setDataGridEventHandlersMethods(eventHandlerName, parametersData);
  };

  const onColumnHeaderEnter: FullFeatureDataGridProps['onColumnHeaderEnter'] = (params, event, details) => {
    const eventHandlerName = 'onColumnHeaderEnter';
    const parametersData = [
      { name: 'params', value: params },
      { name: 'event', value: event },
      { name: 'details', value: details },
    ];

    setDataGridEventHandlersMethods(eventHandlerName, parametersData);
  };

  const onColumnHeaderLeave: FullFeatureDataGridProps['onColumnHeaderLeave'] = (params, event, details) => {
    const eventHandlerName = 'onColumnHeaderLeave';
    const parametersData = [
      { name: 'params', value: params },
      { name: 'event', value: event },
      { name: 'details', value: details },
    ];

    setDataGridEventHandlersMethods(eventHandlerName, parametersData);
  };

  const onColumnHeaderOut: FullFeatureDataGridProps['onColumnHeaderOut'] = (params, event, details) => {
    const eventHandlerName = 'onColumnHeaderOut';
    const parametersData = [
      { name: 'params', value: params },
      { name: 'event', value: event },
      { name: 'details', value: details },
    ];

    setDataGridEventHandlersMethods(eventHandlerName, parametersData);
  };

  const onColumnHeaderOver: FullFeatureDataGridProps['onColumnHeaderOver'] = (params, event, details) => {
    const eventHandlerName = 'onColumnHeaderOver';
    const parametersData = [
      { name: 'params', value: params },
      { name: 'event', value: event },
      { name: 'details', value: details },
    ];

    setDataGridEventHandlersMethods(eventHandlerName, parametersData);
  };

  const onColumnOrderChange: FullFeatureDataGridProps['onColumnOrderChange'] = (params, event, details) => {
    const eventHandlerName = 'onColumnOrderChange';
    const parametersData = [
      { name: 'params', value: params },
      { name: 'event', value: event },
      { name: 'details', value: details },
    ];

    setDataGridEventHandlersMethods(eventHandlerName, parametersData);
  };

  const onColumnResize: FullFeatureDataGridProps['onColumnResize'] = (params, event, details) => {
    const eventHandlerName = 'onColumnResize';
    const parametersData = [
      { name: 'params', value: params },
      { name: 'event', value: event },
      { name: 'details', value: details },
    ];

    setDataGridEventHandlersMethods(eventHandlerName, parametersData);
  };

  const onColumnVisibilityModelChange: FullFeatureDataGridProps['onColumnVisibilityModelChange'] = (model, details) => {
    const eventHandlerName = 'onColumnVisibilityModelChange';
    const parametersData = [
      { name: 'model', value: model },
      { name: 'details', value: details },
    ];

    setDataGridEventHandlersMethods(eventHandlerName, parametersData);
  };

  const onColumnWidthChange: FullFeatureDataGridProps['onColumnWidthChange'] = (params, event, details) => {
    const eventHandlerName = 'onColumnWidthChange';
    const parametersData = [
      { name: 'params', value: params },
      { name: 'event', value: event },
      { name: 'details', value: details },
    ];

    setDataGridEventHandlersMethods(eventHandlerName, parametersData);
  };

  const onDensityChange: FullFeatureDataGridProps['onDensityChange'] = (density) => {
    const eventHandlerName = 'onDensityChange';
    const parametersData = [{ name: 'density', value: density }];

    setDataGridEventHandlersMethods(eventHandlerName, parametersData);
  };

  const onFilterModelChange: FullFeatureDataGridProps['onFilterModelChange'] = (model, details) => {
    const eventHandlerName = 'onFilterModelChange';
    const parametersData = [
      { name: 'model', value: model },
      { name: 'details', value: details },
    ];

    setDataGridEventHandlersMethods(eventHandlerName, parametersData);
  };

  const onMenuClose: FullFeatureDataGridProps['onMenuClose'] = (params, event, details) => {
    const eventHandlerName = 'onMenuClose';
    const parametersData = [
      { name: 'params', value: params },
      { name: 'event', value: event },
      { name: 'details', value: details },
    ];

    setDataGridEventHandlersMethods(eventHandlerName, parametersData);
  };

  const onMenuOpen: FullFeatureDataGridProps['onMenuOpen'] = (params, event, details) => {
    const eventHandlerName = 'onMenuOpen';
    const parametersData = [
      { name: 'params', value: params },
      { name: 'event', value: event },
      { name: 'details', value: details },
    ];

    setDataGridEventHandlersMethods(eventHandlerName, parametersData);
  };

  const onPaginationMetaChange: FullFeatureDataGridProps['onPaginationMetaChange'] = (paginationMeta) => {
    const eventHandlerName = 'onPaginationMetaChange';
    const parametersData = [{ name: 'paginationMeta', value: paginationMeta }];

    setDataGridEventHandlersMethods(eventHandlerName, parametersData);
  };

  const onPaginationModelChange: FullFeatureDataGridProps['onPaginationModelChange'] = (model, details) => {
    const eventHandlerName = 'onPaginationModelChange';
    const parametersData = [
      { name: 'model', value: model },
      { name: 'details', value: details },
    ];

    setDataGridEventHandlersMethods(eventHandlerName, parametersData);
  };

  const onPreferencePanelClose: FullFeatureDataGridProps['onPreferencePanelClose'] = (params, event, details) => {
    const eventHandlerName = 'onPreferencePanelClose';
    const parametersData = [
      { name: 'params', value: params },
      { name: 'event', value: event },
      { name: 'details', value: details },
    ];

    setDataGridEventHandlersMethods(eventHandlerName, parametersData);
  };

  const onPreferencePanelOpen: FullFeatureDataGridProps['onPreferencePanelOpen'] = (params, event, details) => {
    const eventHandlerName = 'onPreferencePanelOpen';
    const parametersData = [
      { name: 'params', value: params },
      { name: 'event', value: event },
      { name: 'details', value: details },
    ];

    setDataGridEventHandlersMethods(eventHandlerName, parametersData);
  };

  const onProcessRowUpdateError: FullFeatureDataGridProps['onProcessRowUpdateError'] = (error) => {
    const eventHandlerName = 'onProcessRowUpdateError';
    const parametersData = [{ name: 'error', value: error }];

    setDataGridEventHandlersMethods(eventHandlerName, parametersData);
  };

  const onResize: FullFeatureDataGridProps['onResize'] = (params, event, details) => {
    const eventHandlerName = 'onResize';
    const parametersData = [
      { name: 'params', value: params },
      { name: 'event', value: event },
      { name: 'details', value: details },
    ];

    setDataGridEventHandlersMethods(eventHandlerName, parametersData);
  };

  const onRowClick: FullFeatureDataGridProps['onRowClick'] = (params, event, details) => {
    const eventHandlerName = 'onRowClick';
    const parametersData = [
      { name: 'params', value: params },
      { name: 'event', value: event },
      { name: 'details', value: details },
    ];

    setDataGridEventHandlersMethods(eventHandlerName, parametersData);
  };

  const onRowCountChange: FullFeatureDataGridProps['onRowCountChange'] = (count) => {
    const eventHandlerName = 'onRowCountChange';
    const parametersData = [{ name: 'count', value: count }];

    setDataGridEventHandlersMethods(eventHandlerName, parametersData);
  };

  const onRowDoubleClick: FullFeatureDataGridProps['onRowDoubleClick'] = (params, event, details) => {
    const eventHandlerName = 'onRowDoubleClick';
    const parametersData = [
      { name: 'params', value: params },
      { name: 'event', value: event },
      { name: 'details', value: details },
    ];

    setDataGridEventHandlersMethods(eventHandlerName, parametersData);
  };

  const onRowEditStart: FullFeatureDataGridProps['onRowEditStart'] = (params, event) => {
    const eventHandlerName = 'onRowEditStart';
    const parametersData = [
      { name: 'params', value: params },
      { name: 'event', value: event },
    ];

    setDataGridEventHandlersMethods(eventHandlerName, parametersData);
  };

  const onRowEditStop: FullFeatureDataGridProps['onRowEditStop'] = (params, event) => {
    const eventHandlerName = 'onRowEditStop';
    const parametersData = [
      { name: 'params', value: params },
      { name: 'event', value: event },
    ];

    setDataGridEventHandlersMethods(eventHandlerName, parametersData);
  };

  const onRowModesModelChange: FullFeatureDataGridProps['onRowModesModelChange'] = (rowModesModel, details) => {
    const eventHandlerName = 'onRowModesModelChange';
    const parametersData = [
      { name: 'rowModesModel', value: rowModesModel },
      { name: 'details', value: details },
    ];

    setDataGridEventHandlersMethods(eventHandlerName, parametersData);
  };

  const onRowSelectionModelChange: FullFeatureDataGridProps['onRowSelectionModelChange'] = (
    rowSelectionModel,
    details,
  ) => {
    const eventHandlerName = 'onRowSelectionModelChange';
    const parametersData = [
      { name: 'rowSelectionModel', value: rowSelectionModel },
      { name: 'details', value: details },
    ];

    setDataGridEventHandlersMethods(eventHandlerName, parametersData);
  };

  const onSortModelChange: FullFeatureDataGridProps['onSortModelChange'] = (model, details) => {
    const eventHandlerName = 'onSortModelChange';
    const parametersData = [
      { name: 'model', value: model },
      { name: 'details', value: details },
    ];

    setDataGridEventHandlersMethods(eventHandlerName, parametersData);
  };
  // DataGrid Event Handler Methods ************************
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

      <BoxComp sx={{ height: 250, width: '100%' }}>
        <FullFeatureDataGrid
          rows={employeeRows}
          columns={employeeColumns}
          ref={fullFeatureDataGridRef}
          onCellClick={onCellClick}
          onCellDoubleClick={onCellDoubleClick}
          // onCellEditStart={onCellEditStart}
          // onCellEditStop={onCellEditStop}
          // onCellKeyDown={onCellKeyDown}
          // onCellModesModelChange={onCellModesModelChange}
          // onClipboardCopy={onClipboardCopy}
          // onColumnHeaderClick={onColumnHeaderClick}
          // onColumnHeaderContextMenu={onColumnHeaderContextMenu}
          // onColumnHeaderDoubleClick={onColumnHeaderDoubleClick}
          // onColumnHeaderEnter={onColumnHeaderEnter}
          // onColumnHeaderLeave={onColumnHeaderLeave}
          // onColumnHeaderOut={onColumnHeaderOut}
          // onColumnHeaderOver={onColumnHeaderOver}
          // onColumnOrderChange={onColumnOrderChange}
          // onColumnResize={onColumnResize}
          // onColumnVisibilityModelChange={onColumnVisibilityModelChange}
          // onColumnWidthChange={onColumnWidthChange}
          // onDensityChange={onDensityChange}
          // onFilterModelChange={onFilterModelChange}
          // onMenuClose={onMenuClose}
          // onMenuOpen={onMenuOpen}
          // onPaginationMetaChange={onPaginationMetaChange}
          // onPaginationModelChange={onPaginationModelChange}
          // onPreferencePanelClose={onPreferencePanelClose}
          // onPreferencePanelOpen={onPreferencePanelOpen}
          // onProcessRowUpdateError={onProcessRowUpdateError}
          // onResize={onResize}
          // onRowClick={onRowClick}
          // onRowCountChange={onRowCountChange}
          // onRowDoubleClick={onRowDoubleClick}
          // onRowEditStart={onRowEditStart}
          // onRowEditStop={onRowEditStop}
          // onRowModesModelChange={onRowModesModelChange}
          // onRowSelectionModelChange={onRowSelectionModelChange}
          // onSortModelChange={onSortModelChange}
        />
      </BoxComp>

      <br />
      <br />

      <DataGridEventHandlerSection eventHandlers={dataGridEventHandlers} />
    </>
  );
};

export default FullFeatureDataGridPage;
