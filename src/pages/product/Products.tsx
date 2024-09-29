import React from 'react';
import { useGetProductsQuery } from '../../redux/slices/services/defaultApiSlices';
import CustomTable from '../../components/custom/table/CustomTable';
import { TableCell } from '../../components/custom/table/customTableHelper';
import { GetProductsResponseDto } from '../../redux/slices/services/defaultApiDto';
import CreateProduct from './CreateProduct';
import UpdateProduct from './UpdateProduct';

const Products: React.FC = () => {
  const { data, refetch } = useGetProductsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  // const data: GetProductsResponseDto[] = [
  //   {
  //     id: 1000000001,
  //     description: 'Fındık lorem ipsum',
  //     name: 'Fındık',
  //   },
  //   {
  //     id: 1000000002,
  //     description: 'Fıstık lorem ipsum',
  //     name: 'Fıstık',
  //   },
  // ];

  const cellsData: TableCell[] = [
    {
      key: 'id',
      label: 'id',
      settings: {
        head: {
          tableCell: {
            minWidth: 200,
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
            minWidth: 200,
          },
        },
      },
    },
    {
      key: 'description',
      label: 'description',
      settings: {
        head: {
          tableCell: {
            minWidth: 200,
          },
        },
      },
    },
  ];

  const [createProductDialogOpen, setCreateProductDialogOpen] = React.useState(false);
  const [updateProductDialogOpen, setUpdateProductDialogOpen] = React.useState(false);
  const [updateProductId, setUpdateProductId] = React.useState<number | null>();

  return (
    <div>
      <h2>Products</h2>

      <CustomTable
        cells={cellsData}
        rows={data ?? []}
        onAddClick={(event: React.MouseEvent<HTMLButtonElement>) => {
          console.log(event);
          setCreateProductDialogOpen(true);
        }}
        onEditClick={(event: React.MouseEvent<HTMLButtonElement>, row: GetProductsResponseDto) => {
          console.log(event);
          setUpdateProductId(row.id);
          setUpdateProductDialogOpen(true);
        }}
        onViewClick={(event: React.MouseEvent<HTMLButtonElement>, row: GetProductsResponseDto) => {
          console.log(event);
          console.log(row);
        }}
        onDeleteClick={(event: React.MouseEvent<HTMLButtonElement>, row: GetProductsResponseDto) => {
          console.log(event);
          console.log(row);
        }}
      />

      {createProductDialogOpen && (
        <CreateProduct
          open={createProductDialogOpen}
          setOpen={setCreateProductDialogOpen}
          submitAfterCallback={() => {
            setCreateProductDialogOpen(false);
            refetch();
          }}
        />
      )}

      {updateProductDialogOpen && updateProductId && (
        <UpdateProduct
          productId={updateProductId}
          open={updateProductDialogOpen}
          setOpen={setUpdateProductDialogOpen}
          submitAfterCallback={() => {
            setUpdateProductDialogOpen(false);
            setUpdateProductId(null);
            refetch();
          }}
        />
      )}
    </div>
  );
};

export default Products;
