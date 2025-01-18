import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { getTodayDateAsString } from '../../../../../utils/locale/dateFormats';
import { activeCountryPhoneFormat } from '../../../../../utils/locale/locale';
import {
  nameValidation,
  numericString,
  phoneNumberValidation,
  surnameValidation,
} from '../../../../../utils/validations/generalValidations';
import {
  generateRandomUUID,
  OperationType,
  OperationTypes,
  OrderStatuType,
  OrderStatuTypes,
  OrderType,
  PaymentStatuType,
  PaymentStatuTypes,
} from '../orderProjectPageHelper';
import CustomController from '../../../../../components/reactHookForm/controller/CustomController';
import {
  BootstrapDialog,
  BootstrapDialogActions,
  BootstrapDialogContent,
  BootstrapDialogTitle,
} from '../../../../../components/custom/dialog/BootstrapDialog';
import BoxComp from '../../../../../components/base/box/Box';
import CancelButton from '../../../../../components/custom/buttons/CancelButton';
import SaveButton from '../../../../../components/custom/buttons/SaveButton';
import { Item as SelectItem } from '../../../../../components/base/select/selectHelper';

const defaultValues: OrderType = {
  orderId: generateRandomUUID(),
  orderNo: '999',
  customerName: '',
  customerSurname: '',
  customerPhone: '',
  orderDate: getTodayDateAsString(),
  deliveryDate: '',
  amountDelivered: 0,
  unitAmount: 0,
  operations: ['cracking'],
  paidAmount: 0,
  remainingAmount: 0,
  totalAmount: 0,
  paymentStatus: 'notPaid',
  orderStatus: 'delivered',
  notes: '',
};

interface NewOrderProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  formSubmit: (data: OrderType) => void;
}

const schema = yup.object().shape({
  orderId: yup.string().required('validationWarnings.required'),
  orderNo: yup.string().required('validationWarnings.required'),
  customerName: yup
    .string()
    .required('validationWarnings.required')
    .min(nameValidation.minCharacter, `_validationWarnings.min,{number:${nameValidation.minCharacter}}`)
    .max(nameValidation.maxCharacter, `_validationWarnings.max,{number:${nameValidation.maxCharacter}}`),
  customerSurname: yup
    .string()
    .required('validationWarnings.required')
    .min(surnameValidation.minCharacter, `_validationWarnings.min,{number:${surnameValidation.minCharacter}}`)
    .max(surnameValidation.maxCharacter, `_validationWarnings.max,{number:${surnameValidation.maxCharacter}}`),
  customerPhone: yup
    .string()
    .required('validationWarnings.required')
    .test('nonZeroFirstDigit', 'validationWarnings.nonZeroFirstDigit', (value) => {
      if (phoneNumberValidation.nonZeroFirstDigit && value) {
        return value[0] !== '0';
      } else {
        return true;
      }
    })
    .test('numericString', 'validationWarnings.numericString', (value) => {
      return numericString.test(value);
    })
    .test(
      'numberOfDigits',
      `_validationWarnings.numberOfDigits,{number:${activeCountryPhoneFormat.numberOfDigits}}`,
      (value) => {
        if (value) {
          return value.length === activeCountryPhoneFormat.numberOfDigits;
        } else {
          return true;
        }
      },
    ),
  orderDate: yup.string().required('validationWarnings.required'),
  deliveryDate: yup.string().required('validationWarnings.required'),
  amountDelivered: yup.number().min(1, 'validationWarnings.required').required('validationWarnings.required'),
  unitAmount: yup.number().min(0, 'validationWarnings.required').required('validationWarnings.required'),
  operations: yup
    .array()
    .of(
      yup
        .mixed<OperationType>()
        .oneOf(Object.keys(OperationTypes) as OperationType[], 'validationWarnings.invalid')
        .required('validationWarnings.required'),
    )
    .min(1, 'validationWarnings.required')
    .required('validationWarnings.required'),
  paidAmount: yup.number().min(0, 'validationWarnings.required').required('validationWarnings.required'),
  remainingAmount: yup.number().min(0, 'validationWarnings.required').required('validationWarnings.required'),
  totalAmount: yup.number().min(0, 'validationWarnings.required').required('validationWarnings.required'),
  paymentStatus: yup
    .mixed<PaymentStatuType>()
    .oneOf(Object.keys(PaymentStatuTypes) as PaymentStatuType[], 'validationWarnings.required')
    .required('validationWarnings.required'),
  orderStatus: yup
    .mixed<OrderStatuType>()
    .oneOf(Object.keys(OrderStatuTypes) as OrderStatuType[], 'validationWarnings.required')
    .required('validationWarnings.required'),
  notes: yup.string(),
});

const NewOrder: React.FC<NewOrderProps> = ({ open, setOpen, formSubmit }) => {
  const { handleSubmit, control, reset, formState } = useForm<OrderType>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const formHandleSubmit: SubmitHandler<OrderType> = async (data) => {
    formSubmit(data);
    setOpen(false);
  };

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
        <BootstrapDialogTitle onClose={() => setOpen(false)}>introduction.newOrder</BootstrapDialogTitle>

        <BootstrapDialogContent>
          <BoxComp display={'flex'} flexDirection={'column'} gap={'20px'}>
            <CustomController<OrderType>
              name="customerName"
              control={control}
              componentFields={{
                componentType: 'textField',
                label: 'introduction.customerName',
                helperText: formState.errors.customerName?.message,
                error: !!formState.errors.customerName,
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

export default NewOrder;
