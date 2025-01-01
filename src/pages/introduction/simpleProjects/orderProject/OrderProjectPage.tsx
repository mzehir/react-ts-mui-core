import React from 'react';
import Orders from './orders.json';
import { OrderStatuType, PaymentStatuType } from './orderProjectPageHelper';
import { formatCurrency } from '../../../../utils/methods/format';
import { formatPhoneNumber } from '../../../../utils/locale/phoneFormats';
import { Cell } from '../../../../components/custom/table/customTableTypes';
import CustomTable from '../../../../components/custom/table/CustomTable';
import ChipComp from '../../../../components/base/chip/Chip';
import DividerComp from '../../../../components/base/divider/Divider';
import TypographyComp from '../../../../components/base/typography/Typography';

const orders = Orders;

const OrderProjectPage: React.FC = () => {
  const cellsData: Cell[] = [
    {
      key: 'id',
      label: 'introduction.idTable',
      settings: {
        head: {
          cell: {
            minWidth: 's',
          },
        },
      },
    },
    {
      key: 'date',
      label: 'introduction.date',
      settings: {
        head: {
          cell: {
            minWidth: 'm',
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
            minWidth: 'm',
          },
        },
      },
    },
    {
      key: 'brand',
      label: 'introduction.brand',
      settings: {
        head: {
          cell: {
            minWidth: 'm',
          },
        },
      },
    },
    {
      key: 'model',
      label: 'introduction.model',
      settings: {
        head: {
          cell: {
            minWidth: 'm',
          },
        },
      },
    },
    {
      key: 'kdvRate',
      label: 'introduction.kdvRate',
      settings: {
        head: {
          cell: {
            minWidth: 'sv',
          },
        },
        body: {
          cell: {
            prepareCellTextMethod(_rowData, cellText) {
              return `%${cellText}`;
            },
          },
        },
        footer: {
          cell: {
            open: true,
            defaultLabelOpen: true,
            summaryType: 'min',
          },
        },
      },
    },
    {
      key: 'otvRate',
      label: 'introduction.otvRate',
      settings: {
        head: {
          cell: {
            minWidth: 'sv',
          },
        },
        body: {
          cell: {
            prepareCellTextMethod(_rowData, cellText) {
              return `%${cellText}`;
            },
          },
        },
        footer: {
          cell: {
            open: true,
            defaultLabelOpen: true,
            summaryType: 'max',
          },
        },
      },
    },
    {
      key: 'basePrice',
      label: 'introduction.basePrice',
      settings: {
        head: {
          cell: {
            minWidth: 'm',
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
        footer: {
          cell: {
            open: true,
            defaultLabelOpen: true,
            summaryType: 'avg',
            formatType: 'currency',
          },
        },
      },
    },
    {
      key: 'finalPrice',
      label: 'introduction.finalPrice',
      settings: {
        head: {
          cell: {
            minWidth: 'm',
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
        footer: {
          cell: {
            open: true,
            defaultLabelOpen: true,
            summaryType: 'avg',
            formatType: 'currency',
          },
        },
      },
    },
    {
      key: 'customer',
      label: 'introduction.customer',
      settings: {
        head: {
          cell: {
            minWidth: 'm',
          },
        },
      },
    },
    {
      key: 'phone',
      label: 'introduction.phone',
      settings: {
        head: {
          cell: {
            minWidth: 'm',
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
      key: 'quantity',
      label: 'introduction.quantity',
      settings: {
        head: {
          cell: {
            align: 'right',
            minWidth: 'm',
          },
        },
        footer: {
          cell: {
            open: true,
            defaultLabelOpen: true,
            summaryType: 'count',
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
            minWidth: 'm',
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
        footer: {
          cell: {
            open: true,
            defaultLabelOpen: true,
            summaryType: 'sum',
            formatType: 'currency',
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
            minWidth: 'm',
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
        footer: {
          cell: {
            open: true,
            defaultLabelOpen: true,
            summaryType: 'sum',
            formatType: 'currency',
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
            minWidth: 'm',
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
            minWidth: 'm',
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
                  color={
                    _cellText === 'received'
                      ? 'error'
                      : _cellText === 'preparing'
                        ? 'warning'
                        : _cellText === 'readyForDelivery'
                          ? 'success'
                          : 'primary'
                  }
                />
              );
            },
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
