import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import CustomController from '../../../../../components/other/reactHookForm/controller/CustomController';
import {
  BootstrapDialog,
  BootstrapDialogActions,
  BootstrapDialogContent,
  BootstrapDialogTitle,
} from '../../../../../components/custom/dialogs/BootstrapDialog';
import BoxComp from '../../../../../components/base/box/Box';
import CancelButton from '../../../../../components/custom/buttons/CancelButton';
import SaveButton from '../../../../../components/custom/buttons/SaveButton';
import { rowType } from '../CustomTablePage';

interface EditRowProps {
  data: rowType;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  formSubmit: (data: rowType) => void;
}

const EditRow: React.FC<EditRowProps> = ({ data, open, setOpen, formSubmit }) => {
  const defaultValues: rowType = {
    id: data.id,
    registrationDate: data.registrationDate,
    student: data.student,
    gradePointAverage: data.gradePointAverage,
    parent: data.parent,
    parentPhoneNumber: data.parentPhoneNumber,
    homeAddress: data.homeAddress,
  };

  const { handleSubmit, control, reset, formState } = useForm<rowType>({
    defaultValues,
  });

  const formHandleSubmit: SubmitHandler<rowType> = async (data) => {
    formSubmit(data);
    setOpen(false);
  };

  return (
    <BootstrapDialog maxWidth="sm" fullWidth open={open} onClose={() => setOpen(false)}>
      <form onSubmit={handleSubmit(formHandleSubmit)}>
        <BootstrapDialogTitle onClose={() => setOpen(false)}>
          {data.student} - {data.id}
        </BootstrapDialogTitle>

        <BootstrapDialogContent>
          <BoxComp display={'flex'} flexDirection={'column'} gap={'20px'}>
            <CustomController<rowType>
              name="registrationDate"
              control={control}
              componentFields={{
                componentType: 'datePicker',
                label: 'introduction.registrationDate',
                helperText: formState.errors.registrationDate?.message,
                error: !!formState.errors.registrationDate,
                disabled: true,
              }}
            />

            <CustomController<rowType>
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

            <CustomController<rowType>
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

            <CustomController<rowType>
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

            <CustomController<rowType>
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

            <CustomController<rowType>
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

export default EditRow;
