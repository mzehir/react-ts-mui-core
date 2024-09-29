import React from 'react';
import { useGetWorkersQuery } from '../../redux/slices/services/defaultApiSlices';
import CustomTable from '../../components/custom/table/CustomTable';
import { TableCell } from '../../components/custom/table/customTableHelper';

const Workers: React.FC = () => {
  const { data } = useGetWorkersQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const cellsData: TableCell[] = [
    {
      key: 'id',
      label: 'id',
      settings: {
        head: {
          tableCell: {
            width: 200,
          },
        },
      },
    },
    {
      key: 'phone',
      label: 'phone',
      settings: {
        head: {
          tableCell: {
            width: 200,
          },
        },
      },
    },
    {
      key: 'name',
      label: 'name',
      settings: {
        head: {
          tableCell: {
            width: 200,
          },
        },
      },
    },
    {
      key: 'surname',
      label: 'surname',
      settings: {
        head: {
          tableCell: {
            width: 200,
          },
        },
      },
    },
    {
      key: 'state',
      label: 'state',
      settings: {
        head: {
          tableCell: {
            width: 200,
          },
        },
      },
    },
    {
      key: 'userType',
      label: 'userType',
      settings: {
        head: {
          tableCell: {
            width: 200,
          },
        },
      },
    },
    {
      key: 'lastLoginDate',
      label: 'lastLoginDate',
      settings: {
        head: {
          tableCell: {
            width: 200,
          },
        },
      },
    },
  ];

  return (
    <div>
      <h2>Workes</h2>
      <CustomTable cells={cellsData} rows={data ?? []} />
    </div>
  );
};

export default Workers;
