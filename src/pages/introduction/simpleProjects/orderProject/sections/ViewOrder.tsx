import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { OrderType } from '../orderProjectPageHelper';
import CustomController from '../../../../../components/reactHookForm/controller/CustomController';
import {
  BootstrapDialog,
  BootstrapDialogActions,
  BootstrapDialogContent,
  BootstrapDialogTitle,
} from '../../../../../components/custom/dialog/BootstrapDialog';
import BoxComp from '../../../../../components/base/box/Box';
import ButtonComp from '../../../../../components/base/button/Button';
import { Item as SelectItem } from '../../../../../components/base/select/selectHelper';

interface ViewOrderProps {
  data: OrderType;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ViewOrder: React.FC<ViewOrderProps> = ({ data, open, setOpen }) => {
  const defaultValues: OrderType = {
    orderId: data.orderId,
    orderNo: data.orderNo,
    customerName: data.customerName,
    customerSurname: data.customerSurname,
    customerPhone: data.customerPhone,
    orderDate: data.orderDate,
    deliveryDate: data.deliveryDate,
    amountDelivered: data.amountDelivered,
    unitAmount: data.unitAmount,
    operations: data.operations,
    paidAmount: data.paidAmount,
    remainingAmount: data.remainingAmount,
    totalAmount: data.totalAmount,
    paymentStatus: data.paymentStatus,
    orderStatus: data.orderStatus,
    notes: data.notes,
  };

  const { handleSubmit, control, formState } = useForm<OrderType>({
    defaultValues,
  });

  const formHandleSubmit: SubmitHandler<OrderType> = async (data) => console.log(data);

  const [operationTypesItems] = React.useState<SelectItem[]>([
    { value: 'cracking', label: 'introduction.cracking' },
    { value: 'roasting', label: 'introduction.roasting' },
    { value: 'vacuuming', label: 'introduction.vacuuming' },
    { value: 'butter', label: 'introduction.butter' },
  ]);

  const [paymentStatusItems] = React.useState<SelectItem[]>([
    { value: 'notPaid', label: 'introduction.notPaid' },
    { value: 'partiallyPaid', label: 'introduction.partiallyPaid' },
    { value: 'paid', label: 'introduction.paid' },
  ]);

  const [orderStatusItems] = React.useState<SelectItem[]>([
    { value: 'received', label: 'introduction.received' },
    { value: 'readyForDelivery', label: 'introduction.readyForDelivery' },
    { value: 'delivered', label: 'introduction.delivered' },
  ]);

  return (
    <BootstrapDialog maxWidth="sm" fullWidth open={open} onClose={() => setOpen(false)}>
      <form onSubmit={handleSubmit(formHandleSubmit)}>
        <BootstrapDialogTitle onClose={() => setOpen(false)}>introduction.orderViewing</BootstrapDialogTitle>

        <BootstrapDialogContent>
          <BoxComp display={'flex'} flexDirection={'column'} gap={'20px'}>
            <CustomController<OrderType>
              name="orderId"
              control={control}
              componentFields={{
                componentType: 'textField',
                label: 'introduction.orderId',
                helperText: formState.errors.orderId?.message,
                error: !!formState.errors.orderId,
                disabled: true,
              }}
            />

            <CustomController<OrderType>
              name="orderNo"
              control={control}
              componentFields={{
                componentType: 'textField',
                label: 'introduction.orderNo',
                helperText: formState.errors.orderNo?.message,
                error: !!formState.errors.orderNo,
                disabled: true,
              }}
            />

            <CustomController<OrderType>
              name="customerName"
              control={control}
              componentFields={{
                componentType: 'textField',
                label: 'introduction.customerName',
                helperText: formState.errors.customerName?.message,
                error: !!formState.errors.customerName,
                disabled: true,
              }}
            />

            <CustomController<OrderType>
              name="customerSurname"
              control={control}
              componentFields={{
                componentType: 'textField',
                label: 'introduction.customerSurname',
                helperText: formState.errors.customerSurname?.message,
                error: !!formState.errors.customerSurname,
                disabled: true,
              }}
            />

            <CustomController<OrderType>
              name="customerPhone"
              control={control}
              componentFields={{
                componentType: 'phoneTextField',
                label: 'introduction.customerPhone',
                helperText: formState.errors.customerPhone?.message,
                error: !!formState.errors.customerPhone,
                disabled: true,
              }}
            />

            <CustomController<OrderType>
              name="orderDate"
              control={control}
              componentFields={{
                componentType: 'datePicker',
                label: 'introduction.orderDate',
                helperText: formState.errors.orderDate?.message,
                error: !!formState.errors.orderDate,
                disabled: true,
              }}
            />

            <CustomController<OrderType>
              name="deliveryDate"
              control={control}
              componentFields={{
                componentType: 'datePicker',
                label: 'introduction.deliveryDate',
                helperText: formState.errors.deliveryDate?.message,
                error: !!formState.errors.deliveryDate,
                disabled: true,
              }}
            />

            <CustomController<OrderType>
              name="amountDelivered"
              control={control}
              componentFields={{
                componentType: 'numericTextField',
                label: 'introduction.amountDelivered',
                helperText: formState.errors.amountDelivered?.message,
                error: !!formState.errors.amountDelivered,
                disabled: true,
              }}
            />

            <CustomController<OrderType>
              name="unitAmount"
              control={control}
              componentFields={{
                componentType: 'numericTextField',
                label: 'introduction.unitAmount',
                helperText: formState.errors.unitAmount?.message,
                error: !!formState.errors.unitAmount,
                disabled: true,
              }}
            />

            <CustomController<OrderType>
              name="operations"
              control={control}
              componentFields={{
                componentType: 'select',
                label: 'introduction.operations',
                multiple: true,
                helperText: formState.errors.operations?.message,
                error: !!formState.errors.operations,
                items: operationTypesItems,
                disabled: true,
              }}
            />

            <CustomController<OrderType>
              name="paidAmount"
              control={control}
              componentFields={{
                componentType: 'numericTextField',
                label: 'introduction.paidAmount',
                helperText: formState.errors.paidAmount?.message,
                error: !!formState.errors.paidAmount,
                disabled: true,
              }}
            />

            <CustomController<OrderType>
              name="remainingAmount"
              control={control}
              componentFields={{
                componentType: 'numericTextField',
                label: 'introduction.remainingAmount',
                helperText: formState.errors.remainingAmount?.message,
                error: !!formState.errors.remainingAmount,
                disabled: true,
              }}
            />

            <CustomController<OrderType>
              name="totalAmount"
              control={control}
              componentFields={{
                componentType: 'numericTextField',
                label: 'introduction.totalAmount',
                helperText: formState.errors.totalAmount?.message,
                error: !!formState.errors.totalAmount,
                disabled: true,
              }}
            />

            <CustomController<OrderType>
              name="paymentStatus"
              control={control}
              componentFields={{
                componentType: 'select',
                label: 'introduction.paymentStatus',
                helperText: formState.errors.paymentStatus?.message,
                error: !!formState.errors.paymentStatus,
                items: paymentStatusItems,
                disabled: true,
              }}
            />

            <CustomController<OrderType>
              name="orderStatus"
              control={control}
              componentFields={{
                componentType: 'select',
                label: 'introduction.orderStatus',
                helperText: formState.errors.orderStatus?.message,
                error: !!formState.errors.orderStatus,
                items: orderStatusItems,
                disabled: true,
              }}
            />

            <CustomController<OrderType>
              name="notes"
              control={control}
              componentFields={{
                componentType: 'textField',
                label: 'introduction.notes',
                helperText: formState.errors.notes?.message,
                error: !!formState.errors.notes,
                disabled: true,
              }}
            />
          </BoxComp>
        </BootstrapDialogContent>

        <BootstrapDialogActions>
          <ButtonComp variant="contained" color="warning" onClick={() => setOpen(false)}>
            introduction.close
          </ButtonComp>
        </BootstrapDialogActions>
      </form>
    </BootstrapDialog>
  );
};

export default ViewOrder;
