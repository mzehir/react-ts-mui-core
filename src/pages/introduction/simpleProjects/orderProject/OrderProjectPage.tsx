import React from 'react';
import Orders from './orders.json';
import { OperationType, OrderStatuType, PaymentStatuType } from './orderProjectPageHelper';
import { formatCurrency } from '../../../../utils/methods/format';
import { formatPhoneNumber } from '../../../../utils/locale/phoneFormats';
import { Cell } from '../../../../components/custom/table/customTableTypes';
import CustomTable from '../../../../components/custom/table/CustomTable';
import ChipComp from '../../../../components/base/chip/Chip';
import DividerComp from '../../../../components/base/divider/Divider';
import TypographyComp from '../../../../components/base/typography/Typography';
import BoxComp from '../../../../components/base/box/Box';

const orders = Orders;

const OrderProjectPage: React.FC = () => {
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

  return (
    <>
      <DividerComp>
        <TypographyComp variant="h2" gutterBottom display="inline">
          routes.orderProject
        </TypographyComp>
      </DividerComp>

      <br />
      <br />

      <CustomTable cells={cellsData} rows={orders ?? []} summaryOpen={true} />
    </>
  );
};

export default OrderProjectPage;
