import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import CustomController from '../../../../../components/reactHookForm/controller/CustomController';
import {
  BootstrapDialog,
  BootstrapDialogActions,
  BootstrapDialogContent,
  BootstrapDialogTitle,
} from '../../../../../components/custom/dialog/BootstrapDialog';
import BoxComp from '../../../../../components/base/box/Box';
import { rowType } from '../CustomTablePage';
import ButtonComp from '../../../../../components/base/button/Button';

interface ViewRowProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: rowType;
}

const ViewRow: React.FC<ViewRowProps> = ({ open, setOpen, data }) => {
  const defaultValues: rowType = {
    id: data.id,
    registrationDate: data.registrationDate,
    student: data.student,
    gradePointAverage: data.gradePointAverage,
    parent: data.parent,
    parentPhoneNumber: data.parentPhoneNumber,
    homeAddress: data.homeAddress,
  };

  const { handleSubmit, control } = useForm<rowType>({
    defaultValues,
  });

  const formHandleSubmit: SubmitHandler<rowType> = async (data) => {
    console.log(data);
  };

  return (
    <BootstrapDialog maxWidth="sm" fullWidth open={open} onClose={() => setOpen(false)}>
      <form onSubmit={handleSubmit(formHandleSubmit)}>
        <BootstrapDialogTitle onClose={() => setOpen(false)} isTranslation={false}>
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
                disabled: true,
              }}
            />

            <CustomController<rowType>
              name="student"
              control={control}
              componentFields={{
                componentType: 'textField',
                label: 'introduction.student',
                disabled: true,
              }}
            />

            <CustomController<rowType>
              name="gradePointAverage"
              control={control}
              componentFields={{
                componentType: 'numericTextField',
                label: 'introduction.gradePointAverage',
                isPrefix: false,
                disabled: true,
              }}
            />

            <CustomController<rowType>
              name="parent"
              control={control}
              componentFields={{
                componentType: 'textField',
                label: 'introduction.parent',
                disabled: true,
              }}
            />

            <CustomController<rowType>
              name="parentPhoneNumber"
              control={control}
              componentFields={{
                componentType: 'phoneTextField',
                label: 'introduction.parentPhoneNumber',
                disabled: true,
              }}
            />

            <CustomController<rowType>
              name="homeAddress"
              control={control}
              componentFields={{
                componentType: 'textField',
                label: 'introduction.homeAddress',
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

export default ViewRow;
