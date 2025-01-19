import React from 'react';
import Orders from './orders.json';
import { OperationType, OrderStatuType, OrderType, PaymentStatuType } from './orderProjectPageHelper';
import NewOrder from './sections/NewOrder';
import EditOrder from './sections/EditOrder';
import ViewOrder from './sections/ViewOrder';
import { formatCurrency } from '../../../../utils/methods/format';
import { formatPhoneNumber } from '../../../../utils/locale/phoneFormats';
import { isDateInRange, stringToDayjsDate } from '../../../../utils/locale/dateFormats';
import CustomTable from '../../../../components/custom/table/CustomTable';
import { Cell } from '../../../../components/custom/table/customTableTypes';
import CustomFilter from '../../../../components/custom/filter/CustomFilter';
import { CustomFilterRef, FilterItemComponent, isSubsequence } from '../../../../components/custom/filter/helper';
import BoxComp from '../../../../components/base/box/Box';
import TypographyComp from '../../../../components/base/typography/Typography';
import ChipComp from '../../../../components/base/chip/Chip';
import DividerComp from '../../../../components/base/divider/Divider';
import { Item as SelectItem } from '../../../../components/base/select/selectHelper';

// @ts-expect-error //! error
const ordersDb: OrderType[] = Orders;

const OrderProjectPage: React.FC = () => {
  const [contentReady, setContentReady] = React.useState(false);

  const customFilterRef = React.useRef<CustomFilterRef>(null);
  const [filteredRows, setFilteredRows] = React.useState<OrderType[] | [] | undefined>(undefined);

  const [orders, setOrders] = React.useState<OrderType[]>([]);

  const cellsData: Cell[] = [
    {
      key: 'orderId',
      label: 'introduction.orderId',
      settings: {
        head: {
          cell: {
            minWidth: 's',
          },
        },
      },
    },
    {
      key: 'orderNo',
      label: 'introduction.orderNo',
      settings: {
        head: {
          cell: {
            minWidth: 's',
          },
        },
      },
    },
    {
      key: 'customerName',
      label: 'introduction.customerName',
      settings: {
        head: {
          cell: {
            minWidth: 'vvm',
          },
        },
      },
    },
    {
      key: 'customerSurname',
      label: 'introduction.customerSurname',
      settings: {
        head: {
          cell: {
            minWidth: 'vvm',
          },
        },
      },
    },
    {
      key: 'customerPhone',
      label: 'introduction.customerPhone',
      settings: {
        head: {
          cell: {
            minWidth: 'vvm',
          },
        },
        body: {
          cell: {
            prepareCellTextMethod: (_rowData, cellText) => {
              return formatPhoneNumber(cellText as string);
            },
          },
        },
      },
    },
    {
      key: 'orderDate',
      label: 'introduction.orderDate',
      settings: {
        head: {
          cell: {
            minWidth: 'vvm',
          },
        },
      },
    },
    {
      key: 'deliveryDate',
      label: 'introduction.deliveryDate',
      settings: {
        head: {
          cell: {
            minWidth: 'vvm',
          },
        },
      },
    },
    {
      key: 'amountDelivered',
      label: 'introduction.amountDelivered',
      settings: {
        head: {
          cell: {
            minWidth: 'vvm',
            align: 'right',
          },
        },
        body: {
          cell: {
            prepareCellTextMethod(_rowData, cellText) {
              return `${cellText} (kg)`;
            },
          },
        },
      },
    },
    {
      key: 'unitAmount',
      label: 'introduction.unitAmount',
      settings: {
        head: {
          cell: {
            minWidth: 's',
            align: 'right',
          },
        },
        body: {
          cell: {
            prepareCellTextMethod(_rowData, cellText) {
              const _cellText = cellText as number;
              const returnCellText = formatCurrency(_cellText);
              return returnCellText;
            },
          },
        },
      },
    },
    {
      key: 'operations',
      label: 'introduction.operations',
      settings: {
        head: {
          cell: {
            minWidth: 'l',
          },
        },
        body: {
          cell: {
            renderCustomComponent(cellText) {
              const _cellText = cellText as OperationType[];
              return (
                <BoxComp display={'flex'} flexDirection={'row'} flexWrap={'wrap'} gap={'5px'}>
                  {_cellText.map((operation, index) => (
                    <ChipComp key={index.toString()} label={`introduction.${operation}`} color="info" />
                  ))}
                </BoxComp>
              );
            },
          },
        },
      },
    },
    {
      key: 'paidAmount',
      label: 'introduction.paidAmount',
      settings: {
        head: {
          cell: {
            minWidth: 'vvm',
            align: 'right',
          },
        },
        body: {
          cell: {
            prepareCellTextMethod(_rowData, cellText) {
              const _cellText = cellText as number;
              const returnCellText = formatCurrency(_cellText);
              return returnCellText;
            },
          },
        },
      },
    },
    {
      key: 'remainingAmount',
      label: 'introduction.remainingAmount',
      settings: {
        head: {
          cell: {
            minWidth: 'vvm',
            align: 'right',
          },
        },
        body: {
          cell: {
            prepareCellTextMethod(_rowData, cellText) {
              const _cellText = cellText as number;
              const returnCellText = formatCurrency(_cellText);
              return returnCellText;
            },
          },
        },
      },
    },
    {
      key: 'totalAmount',
      label: 'introduction.totalAmount',
      settings: {
        head: {
          cell: {
            minWidth: 'vvm',
            align: 'right',
          },
        },
        body: {
          cell: {
            prepareCellTextMethod(_rowData, cellText) {
              const _cellText = cellText as number;
              const returnCellText = formatCurrency(_cellText);
              return returnCellText;
            },
          },
        },
      },
    },
    {
      key: 'paymentStatus',
      label: 'introduction.paymentStatus',
      settings: {
        head: {
          cell: {
            minWidth: 'svv',
          },
        },
        body: {
          cell: {
            isTranslation: true,
            renderCustomComponent(cellText) {
              const _cellText = cellText as PaymentStatuType;
              return (
                <ChipComp
                  label={`introduction.${_cellText}`}
                  color={_cellText === 'paid' ? 'success' : _cellText === 'partiallyPaid' ? 'warning' : 'error'}
                />
              );
            },
          },
        },
      },
    },
    {
      key: 'orderStatus',
      label: 'introduction.orderStatus',
      settings: {
        head: {
          cell: {
            minWidth: 'svv',
          },
        },
        body: {
          cell: {
            isTranslation: true,
            renderCustomComponent(cellText) {
              const _cellText = cellText as OrderStatuType;
              return (
                <ChipComp
                  label={`introduction.${_cellText}`}
                  color={_cellText === 'delivered' ? 'success' : _cellText === 'readyForDelivery' ? 'warning' : 'error'}
                />
              );
            },
          },
        },
      },
    },
    {
      key: 'notes',
      label: 'introduction.notes',
      settings: {
        head: {
          cell: {
            minWidth: 'lvv',
          },
        },
      },
    },
  ];

  const [orderStatusItems] = React.useState<SelectItem[]>([
    { value: 'received', label: 'introduction.received' },
    { value: 'readyForDelivery', label: 'introduction.readyForDelivery' },
    { value: 'delivered', label: 'introduction.delivered' },
  ]);

  const [paymentStatusItems] = React.useState<SelectItem[]>([
    { value: 'notPaid', label: 'introduction.notPaid' },
    { value: 'partiallyPaid', label: 'introduction.partiallyPaid' },
    { value: 'paid', label: 'introduction.paid' },
  ]);

  const filterItems: FilterItemComponent[] = React.useMemo(
    () => [
      {
        name: 'orderNo',
        componentType: 'textField',
        componentProps: {
          label: 'introduction.orderNo',
          defaultValue: '',
          isLabelTranslation: true,
        },
        summaryProps: {
          summaryLabel: 'introduction.orderNo',
          isSummaryLabelTranslation: true,
        },
      },
      {
        name: 'customerName',
        componentType: 'textField',
        componentProps: {
          label: 'introduction.customerName',
          defaultValue: '',
          isLabelTranslation: true,
        },
        summaryProps: {
          summaryLabel: 'introduction.customerName',
          isSummaryLabelTranslation: true,
        },
      },
      {
        name: 'customerSurname',
        componentType: 'textField',
        componentProps: {
          label: 'introduction.customerSurname',
          defaultValue: '',
          isLabelTranslation: true,
        },
        summaryProps: {
          summaryLabel: 'introduction.customerSurname',
          isSummaryLabelTranslation: true,
        },
      },
      {
        name: 'customerPhone',
        componentType: 'textField',
        componentProps: {
          label: 'introduction.customerPhone',
          defaultValue: '',
          isLabelTranslation: true,
        },
        summaryProps: {
          summaryLabel: 'introduction.customerPhone',
          isSummaryLabelTranslation: true,
        },
      },
      {
        name: 'orderStatus',
        componentType: 'select',
        componentProps: {
          label: 'introduction.orderStatus',
          isLabelTranslation: true,
          items: orderStatusItems,
          isItemTranslation: true,
          defaultValue: '',
        },
        summaryProps: {
          summaryLabel: 'introduction.orderStatus',
          isSummaryLabelTranslation: true,
        },
      },
      {
        name: 'paymentStatus',
        componentType: 'select',
        componentProps: {
          label: 'introduction.paymentStatus',
          isLabelTranslation: true,
          items: paymentStatusItems,
          isItemTranslation: true,
          defaultValue: '',
        },
        summaryProps: {
          summaryLabel: 'introduction.paymentStatus',
          isSummaryLabelTranslation: true,
        },
      },
      {
        name: 'orderDateStart',
        componentType: 'datePicker',
        componentProps: {
          label: 'introduction.orderDateStart',
          defaultValue: null,
          isLabelTranslation: true,
        },
        summaryProps: {
          summaryLabel: 'introduction.orderDateStart',
          isSummaryLabelTranslation: true,
        },
      },
      {
        name: 'orderDateEnd',
        componentType: 'datePicker',
        componentProps: {
          label: 'introduction.orderDateEnd',
          defaultValue: null,
          isLabelTranslation: true,
        },
        summaryProps: {
          summaryLabel: 'introduction.orderDateEnd',
          isSummaryLabelTranslation: true,
        },
      },
      {
        name: 'deliveryDateStart',
        componentType: 'datePicker',
        componentProps: {
          label: 'introduction.deliveryDateStart',
          defaultValue: null,
          isLabelTranslation: true,
        },
        summaryProps: {
          summaryLabel: 'introduction.deliveryDateStart',
          isSummaryLabelTranslation: true,
        },
      },
      {
        name: 'deliveryDateEnd',
        componentType: 'datePicker',
        componentProps: {
          label: 'introduction.deliveryDateEnd',
          defaultValue: null,
          isLabelTranslation: true,
        },
        summaryProps: {
          summaryLabel: 'introduction.deliveryDateEnd',
          isSummaryLabelTranslation: true,
        },
      },
    ],
    [orderStatusItems, paymentStatusItems],
  );

  // @ts-expect-error: //! error
  const onFilter = (filteredValues) => {
    if (!orders) return;

    const filtered = orders.filter((order) => {
      const orderNoMatches = !filteredValues.orderNo?.value || filteredValues.orderNo?.value == order.orderNo;

      const nameMatches =
        !filteredValues.customerName?.value ||
        isSubsequence(filteredValues.customerName.value.toLowerCase(), order.customerName.toLowerCase());

      const surnameMatches =
        !filteredValues.customerSurname?.value ||
        isSubsequence(filteredValues.customerSurname.value.toLowerCase(), order.customerSurname.toLowerCase());

      const phoneMatches =
        !filteredValues.customerPhone?.value || filteredValues.customerPhone?.value == order.customerPhone;

      const orderStatusMatches =
        !filteredValues.orderStatus?.value || filteredValues.orderStatus?.value == order.orderStatus;

      const paymentStatusMatches =
        !filteredValues.paymentStatus?.value || filteredValues.paymentStatus?.value == order.paymentStatus;

      //* Filter Date Prepare
      const orderDateStart = filteredValues.orderDateStart?.value;
      const orderDate = stringToDayjsDate(order.orderDate);
      const orderDateEnd = filteredValues.orderDateEnd?.value;

      const deliveryDateStart = filteredValues.deliveryDateStart?.value;
      const deliveryDate = stringToDayjsDate(order.deliveryDate);
      const deliveryDateEnd = filteredValues.deliveryDateEnd?.value;

      const orderDateMatches = isDateInRange(orderDate, orderDateStart, orderDateEnd);
      const deliveryDateMatches = isDateInRange(deliveryDate, deliveryDateStart, deliveryDateEnd);
      //* Filter Date Prepare

      return (
        orderNoMatches &&
        nameMatches &&
        surnameMatches &&
        phoneMatches &&
        orderStatusMatches &&
        paymentStatusMatches &&
        orderDateMatches &&
        deliveryDateMatches
      );
    });
    setFilteredRows(filtered);
  };

  const [newOrderOpen, setNewOrderOpen] = React.useState(false);
  const [editOrderOpen, setEditOrderOpen] = React.useState(false);
  const [editOrderData, setEditOrderData] = React.useState<OrderType>();
  const [viewOrderOpen, setViewOrderOpen] = React.useState(false);
  const [viewOrderData, setViewOrderData] = React.useState<OrderType>();

  React.useEffect(() => {
    if (!contentReady) {
      setOrders(ordersDb);
      setContentReady(true);
    } else {
      const currentFilteredValues = customFilterRef.current?.getCurrentFilterValues();
      onFilter(currentFilteredValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orders]);

  return (
    <>
      <DividerComp>
        <TypographyComp variant="h2" gutterBottom display="inline">
          routes.orderProject
        </TypographyComp>
      </DividerComp>

      <br />

      <CustomFilter filterItems={filterItems} onFilter={onFilter} ref={customFilterRef} />

      <br />
      <br />

      <CustomTable
        cells={cellsData}
        rows={filteredRows ?? orders ?? []}
        summaryOpen={false}
        onAddClick={(event: React.MouseEvent<HTMLButtonElement>) => {
          event.preventDefault();
          setNewOrderOpen(true);
        }}
        onEditClick={(event: React.MouseEvent<HTMLButtonElement>, row: OrderType) => {
          event.preventDefault();
          setEditOrderData(row);
          setEditOrderOpen(true);
        }}
        onViewClick={(event: React.MouseEvent<HTMLButtonElement>, row: OrderType) => {
          event.preventDefault();
          setViewOrderData(row);
          setViewOrderOpen(true);
        }}
        onDeleteClick={(event: React.MouseEvent<HTMLButtonElement>, row: OrderType) => {
          event.preventDefault();
          const updatedRowData = orders.filter((order) => order.orderId !== row.orderId);
          setOrders(updatedRowData);
        }}
      />

      {newOrderOpen && (
        <NewOrder
          open={newOrderOpen}
          setOpen={setNewOrderOpen}
          formSubmit={(data) => setOrders((prev) => [...prev, data])}
        />
      )}

      {editOrderOpen && editOrderData && (
        <EditOrder
          data={editOrderData}
          open={editOrderOpen}
          setOpen={setEditOrderOpen}
          formSubmit={(data) =>
            setOrders((prevData) =>
              prevData.map((item) => (item.orderId === data.orderId ? { ...item, ...data } : item)),
            )
          }
        />
      )}

      {viewOrderOpen && viewOrderData && (
        <ViewOrder data={viewOrderData} open={viewOrderOpen} setOpen={setViewOrderOpen} />
      )}
    </>
  );
};

export default OrderProjectPage;
