import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import CustomController from '../../components/reactHookForm/controller/CustomController';
import { useCreateProductMutation } from '../../redux/slices/services/defaultApiSlices';
import {
  BootstrapDialog,
  BootstrapDialogActions,
  BootstrapDialogContent,
  BootstrapDialogTitle,
} from '../../components/custom/dialog/BootstrapDialog';
import BoxComp from '../../components/base/box/Box';
import SaveButton from '../../components/custom/buttons/SaveButton';
import CancelButton from '../../components/custom/buttons/CancelButton';

interface CreateProductProps {
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

const CreateProduct: React.FC<CreateProductProps> = ({ open, setOpen, submitAfterCallback }) => {
  const [createProduct] = useCreateProductMutation();

  const { handleSubmit, control, reset, formState } = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const formHandleSubmit: SubmitHandler<FormValues> = async (data) => {
    await createProduct(data).unwrap();
    reset();
    submitAfterCallback();
  };

  return (
    <BootstrapDialog maxWidth="sm" fullWidth open={open} onClose={() => setOpen(false)}>
      <form onSubmit={handleSubmit(formHandleSubmit)}>
        <BootstrapDialogTitle onClose={() => setOpen(false)}>Create Product</BootstrapDialogTitle>
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

export default CreateProduct;
