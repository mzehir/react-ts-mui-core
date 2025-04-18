import React, { useRef } from 'react';
import DataGridEventHandlerSection, { DataGridEventHandlers } from './section/DataGridEventHandlerSection';
import DataGridGeneralSettingsSection, { DataGridGeneralSettings } from './section/DataGridGeneralSettingsSection';
import { employeeColumns, employeeRows } from './fullFeatureDataGridPageTypes';
import TypographyComp from '../../../../../components/base/typography/Typography';
import DividerComp from '../../../../../components/base/divider/Divider';
import BoxComp from '../../../../../components/base/box/Box';
import FullFeatureDataGrid from '../../../../../components/introduction/dataGrid/fullFeatureDataGrid/FullFeatureDataGrid';
import {
  FullFeatureDataGridProps,
  FullFeatureDataGridRef,
} from '../../../../../components/introduction/dataGrid/fullFeatureDataGrid/fullFeatureDataGridTypes';
import ButtonComp from '../../../../../components/base/button/Button';

const FullFeatureDataGridPage: React.FC = () => {
  const fullFeatureDataGridRef = useRef<FullFeatureDataGridRef>(null);

  const handleSomeAction = () => {
    const dataGrid = fullFeatureDataGridRef.current?.getDataGrid();
    if (dataGrid) {
      console.log(dataGrid);
    }
  };

  // DataGrid General Setting State ************************
  const [generalSettings, setGeneralSettings] = React.useState<DataGridGeneralSettings>({
    // Boolean
    autoPageSize: {
      generalSettingTitle: 'introduction.booleanSettingsTitle',
      generalSettingName: 'autoPageSize',
      description: 'introduction.dataGridAutoPageSizeDescription',
      enabled: false,
      type: 'boolean',
    },
    autosizeOnMount: {
      generalSettingName: 'autosizeOnMount',
      description: 'introduction.dataGridAutosizeOnMountDescription',
      enabled: false,
      type: 'boolean',
    },
    checkboxSelection: {
      generalSettingName: 'checkboxSelection',
      description: 'introduction.dataGridCheckboxSelectionDescription',
      enabled: false,
      type: 'boolean',
    },
    disableAutosize: {
      generalSettingName: 'disableAutosize',
      description: 'introduction.dataGridDisableAutosizeDescription',
      enabled: false,
      type: 'boolean',
    },
    disableColumnFilter: {
      generalSettingName: 'disableColumnFilter',
      description: 'introduction.dataGridDisableColumnFilterDescription',
      enabled: false,
      type: 'boolean',
    },
    disableColumnMenu: {
      generalSettingName: 'disableColumnMenu',
      description: 'introduction.dataGridDisableColumnMenuDescription',
      enabled: false,
      type: 'boolean',
    },
    disableColumnResize: {
      generalSettingName: 'disableColumnResize',
      description: 'introduction.dataGridDisableColumnResizeDescription',
      enabled: false,
      type: 'boolean',
    },
    disableColumnSelector: {
      generalSettingName: 'disableColumnSelector',
      description: 'introduction.dataGridDisableColumnSelectorDescription',
      enabled: false,
      type: 'boolean',
    },
    disableColumnSorting: {
      generalSettingName: 'disableColumnSorting',
      description: 'introduction.dataGridDisableColumnSortingDescription',
      enabled: false,
      type: 'boolean',
    },
    disableDensitySelector: {
      generalSettingName: 'disableDensitySelector',
      description: 'introduction.dataGridDisableDensitySelectorDescription',
      enabled: false,
      type: 'boolean',
    },
    disableEval: {
      generalSettingName: 'disableEval',
      description: 'introduction.dataGridDisableEvalDescription',
      enabled: false,
      type: 'boolean',
    },
    disableMultipleRowSelection: {
      generalSettingName: 'disableMultipleRowSelection',
      description: 'introduction.dataGridDisableMultipleRowSelectionDescription',
      enabled: false,
      type: 'boolean',
    },
    disableRowSelectionOnClick: {
      generalSettingName: 'disableRowSelectionOnClick',
      description: 'introduction.dataGridDisableRowSelectionOnClickDescription',
      enabled: false,
      type: 'boolean',
    },
    disableVirtualization: {
      generalSettingName: 'disableVirtualization',
      description: 'introduction.dataGridDisableVirtualizationDescription',
      enabled: false,
      type: 'boolean',
    },
    hideFooter: {
      generalSettingName: 'hideFooter',
      description: 'introduction.dataGridHideFooterDescription',
      enabled: false,
      type: 'boolean',
    },
    hideFooterPagination: {
      generalSettingName: 'hideFooterPagination',
      description: 'introduction.dataGridHideFooterPaginationDescription',
      enabled: false,
      type: 'boolean',
    },
    hideFooterSelectedRowCount: {
      generalSettingName: 'hideFooterSelectedRowCount',
      description: 'introduction.dataGridHideFooterSelectedRowCountDescription',
      enabled: false,
      type: 'boolean',
    },
    ignoreDiacritics: {
      generalSettingName: 'ignoreDiacritics',
      description: 'introduction.dataGridIgnoreDiacriticsDescription',
      enabled: false,
      type: 'boolean',
    },
    ignoreValueFormatterDuringExportCvs: {
      generalSettingName: 'ignoreValueFormatterDuringExportCvs',
      description: 'introduction.dataGridIgnoreValueFormatterDuringExportCvsDescription',
      enabled: false,
      type: 'boolean',
    },
    ignoreValueFormatterDuringExportClipboard: {
      generalSettingName: 'ignoreValueFormatterDuringExportClipboard',
      description: 'introduction.dataGridignoreValueFormatterDuringExportClipboardDescription',
      enabled: false,
      type: 'boolean',
    },
    keepNonExistentRowsSelected: {
      generalSettingName: 'keepNonExistentRowsSelected',
      description: 'introduction.dataGridKeepNonExistentRowsSelectedDescription',
      enabled: false,
      type: 'boolean',
    },
    loading: {
      generalSettingName: 'loading',
      description: 'introduction.dataGridLoadingDescription',
      enabled: false,
      type: 'boolean',
    },
    resetPageOnSortFilter: {
      generalSettingName: 'resetPageOnSortFilter',
      description: 'introduction.dataGridResetPageOnSortFilterDescription',
      enabled: false,
      type: 'boolean',
    },
    rowSelection: {
      generalSettingName: 'rowSelection',
      description: 'introduction.dataGridRowSelectionDescription',
      enabled: false,
      type: 'boolean',
    },
    showCellVerticalBorder: {
      generalSettingName: 'showCellVerticalBorder',
      description: 'introduction.dataGridShowCellVerticalBorderDescription',
      enabled: false,
      type: 'boolean',
    },
    showColumnVerticalBorder: {
      generalSettingName: 'showColumnVerticalBorder',
      description: 'introduction.dataGridShowColumnVerticalBorderDescription',
      enabled: false,
      type: 'boolean',
    },
    unstable_rowSpanning: {
      generalSettingName: 'unstable_rowSpanning',
      description: 'introduction.dataGridUnstable_rowSpanningDescription',
      enabled: false,
      type: 'boolean',
    },
    virtualizeColumnsWithAutoRowHeight: {
      generalSettingName: 'virtualizeColumnsWithAutoRowHeight',
      description: 'introduction.dataGridVirtualizeColumnsWithAutoRowHeightDescription',
      enabled: false,
      type: 'boolean',
    },
    // Number
    columnBufferPx: {
      generalSettingTitle: 'introduction.numberSettingsTitle',
      generalSettingName: 'columnBufferPx',
      description: 'introduction.dataGridColumnBufferPxDescription',
      type: 'number',
      value: 150,
    },
    columnGroupHeaderHeight: {
      generalSettingName: 'columnGroupHeaderHeight',
      description: 'introduction.dataGridColumnGroupHeaderHeightDescription',
      type: 'number',
      value: 56,
    },
    columnHeaderHeight: {
      generalSettingName: 'columnHeaderHeight',
      description: 'introduction.dataGridColumnHeaderHeightDescription',
      type: 'number',
      value: 56,
    },
    estimatedRowCount: {
      generalSettingName: 'estimatedRowCount',
      description: 'introduction.dataGridEstimatedRowCountDescription',
      type: 'number',
      value: 0,
    },
    filterDebounceMs: {
      generalSettingName: 'filterDebounceMs',
      description: 'introduction.dataGridFilterDebounceMsDescription',
      type: 'number',
      value: 150,
    },
    resizeThrottleMs: {
      generalSettingName: 'resizeThrottleMs',
      description: 'introduction.dataGridResizeThrottleMsDescription',
      type: 'number',
      value: 60,
    },
    rowBufferPx: {
      generalSettingName: 'rowBufferPx',
      description: 'introduction.dataGridRowBufferPxDescription',
      type: 'number',
      value: 150,
    },
    rowCount: {
      generalSettingName: 'rowCount',
      description: 'introduction.dataGridRowCountDescription',
      type: 'number',
      value: 0,
    },
    rowHeight: {
      generalSettingName: 'rowHeight',
      description: 'introduction.dataGridRowHeightDescription',
      type: 'number',
      value: 52,
    },
    scrollbarSize: {
      generalSettingName: 'scrollbarSize',
      description: 'introduction.dataGridScrollbarSizeDescription',
      type: 'number',
      value: 0,
    },
    // Select
    density: {
      generalSettingTitle: 'introduction.selectSettingsTitle',
      generalSettingName: 'density',
      description: 'introduction.dataGridDensityDescription',
      type: 'select',
      value: 'standard',
      options: [
        { value: 'compact', label: 'Compact' },
        { value: 'comfortable', label: 'Comfortable' },
        { value: 'standard', label: 'Standard' },
      ],
    },
    editMode: {
      generalSettingName: 'editMode',
      description: 'introduction.dataGridEditModeDescription',
      type: 'select',
      value: 'cell',
      options: [
        { value: 'cell', label: 'Cell' },
        { value: 'row', label: 'Row' },
      ],
    },
    filterMode: {
      generalSettingName: 'filterMode',
      description: 'introduction.dataGridFilterModeDescription',
      type: 'select',
      value: 'client',
      options: [
        { value: 'client', label: 'Client' },
        { value: 'server', label: 'Server' },
      ],
    },
    paginationMode: {
      generalSettingName: 'paginationMode',
      description: 'introduction.dataGridPaginationModeDescription',
      type: 'select',
      value: 'client',
      options: [
        { value: 'client', label: 'Client' },
        { value: 'server', label: 'Server' },
      ],
    },
    rowSpacingType: {
      generalSettingName: 'rowSpacingType',
      description: 'introduction.dataGridRowSpacingTypeDescription',
      type: 'select',
      value: 'margin',
      options: [
        { value: 'margin', label: 'Margin' },
        { value: 'border', label: 'Border' },
      ],
    },
    sortingMode: {
      generalSettingName: 'sortingMode',
      description: 'introduction.dataGridSortingModeDescription',
      type: 'select',
      value: 'client',
      options: [
        { value: 'client', label: 'Client' },
        { value: 'server', label: 'Server' },
      ],
    },
  });

  const handleSettingsChange = (settings: DataGridGeneralSettings) => {
    setGeneralSettings(settings);
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
      enabled: true,
    },
    onCellDoubleClick: {
      eventHandlerName: 'onCellDoubleClick',
      parameters: [
        { name: 'params', value: null },
        { name: 'event', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnCellDoubleClickDescription',
      enabled: false,
    },
    onCellEditStart: {
      eventHandlerName: 'onCellEditStart',
      parameters: [
        { name: 'params', value: null },
        { name: 'event', value: null },
      ],
      description: 'introduction.dataGridOnCellEditStartDescription',
      enabled: false,
    },
    onCellEditStop: {
      eventHandlerName: 'onCellEditStop',
      parameters: [
        { name: 'params', value: null },
        { name: 'event', value: null },
      ],
      description: 'introduction.dataGridOnCellEditStopDescription',
      enabled: false,
    },
    onCellKeyDown: {
      eventHandlerName: 'onCellKeyDown',
      parameters: [
        { name: 'params', value: null },
        { name: 'event', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnCellKeyDownDescription',
      enabled: false,
    },
    onCellModesModelChange: {
      eventHandlerName: 'onCellModesModelChange',
      parameters: [
        { name: 'cellModesModel', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnCellModesModelChangeDescription',
      enabled: false,
    },
    onClipboardCopy: {
      eventHandlerName: 'onClipboardCopy',
      parameters: [{ name: 'params', value: null }],
      description: 'introduction.dataGridOnClipboardCopyDescription',
      enabled: false,
    },
    onColumnHeaderClick: {
      eventHandlerName: 'onColumnHeaderClick',
      parameters: [
        { name: 'params', value: null },
        { name: 'event', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnColumnHeaderClickDescription',
      enabled: false,
    },
    onColumnHeaderContextMenu: {
      eventHandlerName: 'onColumnHeaderContextMenu',
      parameters: [
        { name: 'params', value: null },
        { name: 'event', value: null },
      ],
      description: 'introduction.dataGridOnColumnHeaderContextMenuDescription',
      enabled: false,
    },
    onColumnHeaderDoubleClick: {
      eventHandlerName: 'onColumnHeaderDoubleClick',
      parameters: [
        { name: 'params', value: null },
        { name: 'event', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnColumnHeaderDoubleClickDescription',
      enabled: false,
    },
    onColumnHeaderEnter: {
      eventHandlerName: 'onColumnHeaderEnter',
      parameters: [
        { name: 'params', value: null },
        { name: 'event', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnColumnHeaderEnterDescription',
      enabled: false,
    },
    onColumnHeaderLeave: {
      eventHandlerName: 'onColumnHeaderLeave',
      parameters: [
        { name: 'params', value: null },
        { name: 'event', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnColumnHeaderLeaveDescription',
      enabled: false,
    },
    onColumnHeaderOut: {
      eventHandlerName: 'onColumnHeaderOut',
      parameters: [
        { name: 'params', value: null },
        { name: 'event', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnColumnHeaderOutDescription',
      enabled: false,
    },
    onColumnHeaderOver: {
      eventHandlerName: 'onColumnHeaderOver',
      parameters: [
        { name: 'params', value: null },
        { name: 'event', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnColumnHeaderOverDescription',
      enabled: false,
    },
    onColumnOrderChange: {
      eventHandlerName: 'onColumnOrderChange',
      parameters: [
        { name: 'params', value: null },
        { name: 'event', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnColumnOrderChangeDescription',
      enabled: false,
    },
    onColumnResize: {
      eventHandlerName: 'onColumnResize',
      parameters: [
        { name: 'params', value: null },
        { name: 'event', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnColumnResizeDescription',
      enabled: false,
    },
    onColumnVisibilityModelChange: {
      eventHandlerName: 'onColumnVisibilityModelChange',
      parameters: [
        { name: 'model', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnColumnVisibilityModelChangeDescription',
      enabled: false,
    },
    onColumnWidthChange: {
      eventHandlerName: 'onColumnWidthChange',
      parameters: [
        { name: 'params', value: null },
        { name: 'event', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnColumnWidthChangeDescription',
      enabled: false,
    },
    onDensityChange: {
      eventHandlerName: 'onDensityChange',
      parameters: [{ name: 'density', value: null }],
      description: 'introduction.dataGridOnDensityChangeDescription',
      enabled: false,
    },
    onFilterModelChange: {
      eventHandlerName: 'onFilterModelChange',
      parameters: [
        { name: 'model', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnFilterModelChangeDescription',
      enabled: false,
    },
    onMenuClose: {
      eventHandlerName: 'onMenuClose',
      parameters: [
        { name: 'params', value: null },
        { name: 'event', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnMenuCloseDescription',
      enabled: false,
    },
    onMenuOpen: {
      eventHandlerName: 'onMenuOpen',
      parameters: [
        { name: 'params', value: null },
        { name: 'event', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnMenuOpenDescription',
      enabled: false,
    },
    onPaginationMetaChange: {
      eventHandlerName: 'onPaginationMetaChange',
      parameters: [{ name: 'paginationMeta', value: null }],
      description: 'introduction.dataGridOnPaginationMetaChangeDescription',
      enabled: false,
    },
    onPaginationModelChange: {
      eventHandlerName: 'onPaginationModelChange',
      parameters: [
        { name: 'model', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnPaginationModelChangeDescription',
      enabled: false,
    },
    onPreferencePanelClose: {
      eventHandlerName: 'onPreferencePanelClose',
      parameters: [
        { name: 'params', value: null },
        { name: 'event', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnPreferencePanelCloseDescription',
      enabled: false,
    },
    onPreferencePanelOpen: {
      eventHandlerName: 'onPreferencePanelOpen',
      parameters: [
        { name: 'params', value: null },
        { name: 'event', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnPreferencePanelOpenDescription',
      enabled: false,
    },
    onProcessRowUpdateError: {
      eventHandlerName: 'onProcessRowUpdateError',
      parameters: [{ name: 'error', value: null }],
      description: 'introduction.dataGridOnProcessRowUpdateErrorDescription',
      enabled: false,
    },
    onResize: {
      eventHandlerName: 'onResize',
      parameters: [
        { name: 'params', value: null },
        { name: 'event', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnResizeDescription',
      enabled: false,
    },
    onRowClick: {
      eventHandlerName: 'onRowClick',
      parameters: [
        { name: 'params', value: null },
        { name: 'event', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnRowClickDescription',
      enabled: false,
    },
    onRowCountChange: {
      eventHandlerName: 'onRowCountChange',
      parameters: [{ name: 'count', value: null }],
      description: 'introduction.dataGridOnRowCountChangeDescription',
      enabled: false,
    },
    onRowDoubleClick: {
      eventHandlerName: 'onRowDoubleClick',
      parameters: [
        { name: 'params', value: null },
        { name: 'event', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnRowDoubleClickDescription',
      enabled: false,
    },
    onRowEditStart: {
      eventHandlerName: 'onRowEditStart',
      parameters: [
        { name: 'params', value: null },
        { name: 'event', value: null },
      ],
      description: 'introduction.dataGridOnRowEditStartDescription',
      enabled: false,
    },
    onRowEditStop: {
      eventHandlerName: 'onRowEditStop',
      parameters: [
        { name: 'params', value: null },
        { name: 'event', value: null },
      ],
      description: 'introduction.dataGridOnRowEditStopDescription',
      enabled: false,
    },
    onRowModesModelChange: {
      eventHandlerName: 'onRowModesModelChange',
      parameters: [
        { name: 'rowModesModel', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnRowModesModelChangeDescription',
      enabled: false,
    },
    onRowSelectionModelChange: {
      eventHandlerName: 'onRowSelectionModelChange',
      parameters: [
        { name: 'rowSelectionModel', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnRowSelectionModelChangeDescription',
      enabled: false,
    },
    onSortModelChange: {
      eventHandlerName: 'onSortModelChange',
      parameters: [
        { name: 'model', value: null },
        { name: 'details', value: null },
      ],
      description: 'introduction.dataGridOnSortModelChangeDescription',
      enabled: false,
    },
  });

  const handleEventHandlerToggle = (eventName: string, enabled: boolean) => {
    setDataGridEventHandlers((prev) => ({
      ...prev,
      [eventName]: {
        ...prev[eventName],
        enabled,
      },
    }));
  };

  // DataGrid Event Handler Methods ************************
  const setDataGridEventHandlersMethods = (
    eventHandlerName: string,
    parametersData: DataGridEventHandlers[string]['parameters'],
  ) => {
    if (dataGridEventHandlers[eventHandlerName]?.enabled) {
      setDataGridEventHandlers((prevValue) => ({
        ...prevValue,
        [eventHandlerName]: {
          ...prevValue[eventHandlerName],
          parameters: parametersData,
        },
      }));
    }
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

  return (
    <>
      <DividerComp>
        <TypographyComp variant="h2" gutterBottom display="inline">
          introduction.fullFeatureDataGridComponent
        </TypographyComp>
      </DividerComp>

      <br />
      <br />

      <BoxComp display={'flex'} flexDirection={'row'} justifyContent={'end'} gap={'5px'}>
        <ButtonComp
          variant="contained"
          color="info"
          onClick={() => {
            handleSomeAction();
          }}
        >
          introduction.showGridRefConsole
        </ButtonComp>
        <DataGridGeneralSettingsSection onSettingsChange={handleSettingsChange} settings={generalSettings} />
      </BoxComp>

      <BoxComp sx={{ height: 250, width: '100%' }}>
        <FullFeatureDataGrid
          ref={fullFeatureDataGridRef}
          rows={employeeRows}
          columns={employeeColumns}
          // General Setting Boolean
          autoPageSize={generalSettings.autoPageSize.enabled}
          autosizeOnMount={generalSettings.autosizeOnMount.enabled}
          checkboxSelection={generalSettings.checkboxSelection.enabled}
          disableAutosize={generalSettings.disableAutosize.enabled}
          disableColumnFilter={generalSettings.disableColumnFilter.enabled}
          disableColumnMenu={generalSettings.disableColumnMenu.enabled}
          disableColumnResize={generalSettings.disableColumnResize.enabled}
          disableColumnSelector={generalSettings.disableColumnSelector.enabled}
          disableColumnSorting={generalSettings.disableColumnSorting.enabled}
          disableDensitySelector={generalSettings.disableDensitySelector.enabled}
          disableEval={generalSettings.disableEval.enabled}
          disableMultipleRowSelection={generalSettings.disableMultipleRowSelection.enabled}
          disableRowSelectionOnClick={generalSettings.disableRowSelectionOnClick.enabled}
          disableVirtualization={generalSettings.disableVirtualization.enabled}
          hideFooter={generalSettings.hideFooter.enabled}
          hideFooterPagination={generalSettings.hideFooterPagination.enabled}
          hideFooterSelectedRowCount={generalSettings.hideFooterSelectedRowCount.enabled}
          ignoreDiacritics={generalSettings.ignoreDiacritics.enabled}
          ignoreValueFormatterDuringExport={{
            csvExport: generalSettings.ignoreValueFormatterDuringExportCvs.enabled,
            clipboardExport: generalSettings.ignoreValueFormatterDuringExportClipboard.enabled,
          }}
          keepNonExistentRowsSelected={generalSettings.keepNonExistentRowsSelected.enabled}
          loading={generalSettings.loading.enabled}
          resetPageOnSortFilter={generalSettings.resetPageOnSortFilter.enabled}
          rowSelection={generalSettings.rowSelection.enabled}
          showCellVerticalBorder={generalSettings.showCellVerticalBorder.enabled}
          showColumnVerticalBorder={generalSettings.showColumnVerticalBorder.enabled}
          unstable_rowSpanning={generalSettings.unstable_rowSpanning.enabled}
          virtualizeColumnsWithAutoRowHeight={generalSettings.virtualizeColumnsWithAutoRowHeight.enabled}
          // General Setting Number
          columnBufferPx={Number(generalSettings.columnBufferPx.value)}
          columnGroupHeaderHeight={Number(generalSettings.columnGroupHeaderHeight.value)}
          columnHeaderHeight={Number(generalSettings.columnHeaderHeight.value)}
          estimatedRowCount={Number(generalSettings.estimatedRowCount.value)}
          filterDebounceMs={Number(generalSettings.filterDebounceMs.value)}
          resizeThrottleMs={Number(generalSettings.resizeThrottleMs.value)}
          rowBufferPx={Number(generalSettings.rowBufferPx.value)}
          rowCount={Number(generalSettings.rowCount.value)}
          rowHeight={Number(generalSettings.rowHeight.value)}
          scrollbarSize={Number(generalSettings.scrollbarSize.value)}
          // General Setting Select
          density={generalSettings.density.value as 'compact' | 'standard' | 'comfortable'}
          editMode={generalSettings.editMode.value as 'cell' | 'row'}
          filterMode={generalSettings.filterMode.value as 'client' | 'server'}
          paginationMode={generalSettings.paginationMode.value as 'client' | 'server'}
          rowSpacingType={generalSettings.rowSpacingType.value as 'margin' | 'border'}
          sortingMode={generalSettings.sortingMode.value as 'client' | 'server'}
          // General Setting Events
          onCellClick={onCellClick}
          onCellDoubleClick={onCellDoubleClick}
          onCellEditStart={onCellEditStart}
          onCellEditStop={onCellEditStop}
          onCellKeyDown={onCellKeyDown}
          onCellModesModelChange={onCellModesModelChange}
          onClipboardCopy={onClipboardCopy}
          onColumnHeaderClick={onColumnHeaderClick}
          onColumnHeaderContextMenu={onColumnHeaderContextMenu}
          onColumnHeaderDoubleClick={onColumnHeaderDoubleClick}
          onColumnHeaderEnter={onColumnHeaderEnter}
          onColumnHeaderLeave={onColumnHeaderLeave}
          onColumnHeaderOut={onColumnHeaderOut}
          onColumnHeaderOver={onColumnHeaderOver}
          onColumnOrderChange={onColumnOrderChange}
          onColumnResize={onColumnResize}
          onColumnVisibilityModelChange={onColumnVisibilityModelChange}
          onColumnWidthChange={onColumnWidthChange}
          onDensityChange={onDensityChange}
          onFilterModelChange={onFilterModelChange}
          onMenuClose={onMenuClose}
          onMenuOpen={onMenuOpen}
          onPaginationMetaChange={onPaginationMetaChange}
          onPaginationModelChange={onPaginationModelChange}
          onPreferencePanelClose={onPreferencePanelClose}
          onPreferencePanelOpen={onPreferencePanelOpen}
          onProcessRowUpdateError={onProcessRowUpdateError}
          onResize={onResize}
          onRowClick={onRowClick}
          onRowCountChange={onRowCountChange}
          onRowDoubleClick={onRowDoubleClick}
          onRowEditStart={onRowEditStart}
          onRowEditStop={onRowEditStop}
          onRowModesModelChange={onRowModesModelChange}
          onRowSelectionModelChange={onRowSelectionModelChange}
          onSortModelChange={onSortModelChange}
        />
      </BoxComp>

      <br />
      <br />

      <DataGridEventHandlerSection
        eventHandlers={dataGridEventHandlers}
        onEventHandlerToggle={handleEventHandlerToggle}
      />
    </>
  );
};

export default FullFeatureDataGridPage;
