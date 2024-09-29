import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import CustomController from '../../components/reactHookForm/controller/CustomController';
import { useGetProductByIdQuery, useUpdateProductByIdMutation } from '../../redux/slices/services/defaultApiSlices';
import {
  BootstrapDialog,
  BootstrapDialogActions,
  BootstrapDialogContent,
  BootstrapDialogTitle,
} from '../../components/custom/dialog/BootstrapDialog';
import BoxComp from '../../components/base/box/Box';
import SaveButton from '../../components/custom/buttons/SaveButton';
import CancelButton from '../../components/custom/buttons/CancelButton';

interface UpdateProductProps {
  productId: number;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  submitAfterCallback: () => void;
}

interface FormValues {
  name: string;
  description: string;
}

const schema = yup.object().shape({
  name: yup.string().required('Bu alan zorunludur!'),
  description: yup.string().required('Bu alan zorunludur!'),
});

const defaultValues: FormValues = {
  name: '',
  description: '',
};

const UpdateProduct: React.FC<UpdateProductProps> = ({ productId, open, setOpen, submitAfterCallback }) => {
  const { data } = useGetProductByIdQuery(productId, {
    refetchOnMountOrArgChange: true,
  });
  const [updateProductById] = useUpdateProductByIdMutation();

  const { handleSubmit, control, reset, formState } = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  React.useEffect(() => {
    if (data) {
      reset({
        name: data.name,
        description: data.description,
      });
    }
  }, [data, reset]);

  const formHandleSubmit: SubmitHandler<FormValues> = async (data) => {
    await updateProductById({
      id: productId,
      data: data,
    }).unwrap();
    reset();
    submitAfterCallback();
  };

  return (
    <BootstrapDialog maxWidth="sm" fullWidth open={open} onClose={() => setOpen(false)}>
      <form onSubmit={handleSubmit(formHandleSubmit)}>
        <BootstrapDialogTitle onClose={() => setOpen(false)}>Update Product</BootstrapDialogTitle>
        <BootstrapDialogContent>
          <BoxComp display={'flex'} flexDirection={'column'} gap={'20px'}>
            <CustomController<FormValues>
              name="name"
              control={control}
              componentFields={{
                componentType: 'textField',
                label: 'Ürün Adı',
                placeholder: 'Ürün adını gir',
                helperText: formState.errors.name?.message,
                error: !!formState.errors.name,
              }}
            />
            <CustomController<FormValues>
              name="description"
              control={control}
              componentFields={{
                componentType: 'textField',
                label: 'Ürün Açıklaması',
                placeholder: 'Ürün açıklamasını gir',
                helperText: formState.errors.description?.message,
                error: !!formState.errors.description,
              }}
            />
          </BoxComp>
        </BootstrapDialogContent>
        <BootstrapDialogActions>
          <CancelButton onClick={() => reset()} />
          <SaveButton />
        </BootstrapDialogActions>
      </form>
    </BootstrapDialog>
  );
};

export default UpdateProduct;
