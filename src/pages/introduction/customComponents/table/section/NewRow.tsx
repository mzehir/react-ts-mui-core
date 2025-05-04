import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import CustomController from '../../../../../components/other/reactHookForm/controller/CustomController';
import { getTodayDateAsString } from '../../../../../utils/locale/dateFormats';
import {
  BootstrapDialog,
  BootstrapDialogActions,
  BootstrapDialogContent,
  BootstrapDialogTitle,
} from '../../../../../components/custom/dialogs/BootstrapDialog';
import BoxComp from '../../../../../components/base/box/Box';
import CancelButton from '../../../../../components/custom/buttons/CancelButton';
import SaveButton from '../../../../../components/custom/buttons/SaveButton';

export interface FormValues {
  registrationDate: string;
  student: string;
  gradePointAverage: number | null;
  parent: string;
  parentPhoneNumber: string;
  homeAddress: string;
}

const defaultValues: FormValues = {
  registrationDate: getTodayDateAsString(),
  student: '',
  gradePointAverage: null,
  parent: '',
  parentPhoneNumber: '',
  homeAddress: '',
};

interface NewRowProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  formSubmit: (data: FormValues) => void;
}

const NewRow: React.FC<NewRowProps> = ({ open, setOpen, formSubmit }) => {
  const { handleSubmit, control, reset, formState } = useForm<FormValues>({
    defaultValues,
  });

  const formHandleSubmit: SubmitHandler<FormValues> = async (data) => {
    formSubmit(data);
    setOpen(false);
  };

  return (
    <BootstrapDialog maxWidth="sm" fullWidth open={open} onClose={() => setOpen(false)}>
      <form onSubmit={handleSubmit(formHandleSubmit)}>
        <BootstrapDialogTitle onClose={() => setOpen(false)}>introduction.newStudent</BootstrapDialogTitle>

        <BootstrapDialogContent>
          <BoxComp display={'flex'} flexDirection={'column'} gap={'20px'}>
            <CustomController<FormValues>
              name="registrationDate"
              control={control}
              componentFields={{
                componentType: 'datePicker',
                label: 'introduction.registrationDate',
                helperText: formState.errors.registrationDate?.message,
                error: !!formState.errors.registrationDate,
              }}
            />

            <CustomController<FormValues>
              name="student"
              control={control}
              componentFields={{
                componentType: 'textField',
                label: 'introduction.student',
                placeholder: 'introduction.student',
                helperText: formState.errors.student?.message,
                error: !!formState.errors.student,
              }}
            />

            <CustomController<FormValues>
              name="gradePointAverage"
              control={control}
              componentFields={{
                componentType: 'numericTextField',
                label: 'introduction.gradePointAverage',
                placeholder: 'introduction.gradePointAverage',
                helperText: formState.errors.gradePointAverage?.message,
                isPrefix: false,
                error: !!formState.errors.gradePointAverage,
              }}
            />

            <CustomController<FormValues>
              name="parent"
              control={control}
              componentFields={{
                componentType: 'textField',
                label: 'introduction.parent',
                placeholder: 'introduction.parent',
                helperText: formState.errors.parent?.message,
                error: !!formState.errors.parent,
              }}
            />

            <CustomController<FormValues>
              name="parentPhoneNumber"
              control={control}
              componentFields={{
                componentType: 'phoneTextField',
                label: 'introduction.parentPhoneNumber',
                placeholder: 'introduction.parentPhoneNumberPlaceholder',
                helperText: formState.errors.parentPhoneNumber?.message,
                error: !!formState.errors.parentPhoneNumber,
              }}
            />

            <CustomController<FormValues>
              name="homeAddress"
              control={control}
              componentFields={{
                componentType: 'textField',
                label: 'introduction.homeAddress',
                placeholder: 'introduction.homeAddress',
                helperText: formState.errors.homeAddress?.message,
                error: !!formState.errors.homeAddress,
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

export default NewRow;
