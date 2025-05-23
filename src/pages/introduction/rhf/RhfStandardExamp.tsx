import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import CustomController from '../../../components/other/reactHookForm/controller/CustomController';
import { getTodayDateAsString } from '../../../utils/locale/dateFormats';
import CardComp from '../../../components/base/card/Card';
import CardContentComp from '../../../components/base/cardContent/CardContent';
import GridComp from '../../../components/base/grid/Grid';
import BoxComp from '../../../components/base/box/Box';
import TypographyComp from '../../../components/base/typography/Typography';
import IconButtonComp from '../../../components/base/iconButton/IconButton';
import DividerComp from '../../../components/base/divider/Divider';
import { RHFRadioGroupCompItemProp } from '../../../components/other/reactHookForm/controller/sections/RHFRadioGroupComp';
import { Item as SelectItem } from '../../../components/base/select/selectHelper';
import SaveButton from '../../../components/custom/buttons/SaveButton';
import CancelButton from '../../../components/custom/buttons/CancelButton';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { styled } from '@mui/material/styles';

const CustomIconButton = styled(IconButtonComp)`
  cursor: default;
  background-color: transparent;
  &:hover {
    background-color: transparent;
  }
`;

type studentGender = 'maleStudent' | 'femaleStudent';

interface FormValues {
  studentNameAndSurname: string;
  studentGender: studentGender;
  parentNameAndSurname: string;
  parentPhoneNumber: string;
  monthsToBePaid: string[];
  amountDuesPayable: number;
  paymentType: string;
  paymentBank: string;
  paymentInstruments: string[];
  approval: boolean;
  code: string;
  paymentDate: string;
}

const defaultValues: FormValues = {
  studentNameAndSurname: 'Ahmet Moral',
  studentGender: 'maleStudent',
  parentNameAndSurname: 'Nurten Pembe',
  parentPhoneNumber: '5396751848',
  monthsToBePaid: ['january'],
  amountDuesPayable: 500.99,
  paymentType: '3',
  paymentBank: '0010',
  paymentInstruments: [],
  approval: false,
  code: '123456Aa.',
  paymentDate: getTodayDateAsString(),
};

const schema = yup.object().shape({
  studentNameAndSurname: yup.string().required('validationWarnings.required'),
  studentGender: yup
    .mixed<studentGender>()
    .oneOf(['maleStudent', 'femaleStudent'], 'validationWarnings.required')
    .required('validationWarnings.required'),
  parentNameAndSurname: yup.string().required('validationWarnings.required'),
  parentPhoneNumber: yup.string().required('validationWarnings.required'),
  monthsToBePaid: yup
    .array()
    .of(yup.string().required('validationWarnings.required'))
    .min(1, 'validationWarnings.required')
    .required('validationWarnings.required'),
  amountDuesPayable: yup.number().min(500.99, 'validationWarnings.required').required('validationWarnings.required'),
  paymentType: yup.string().required('validationWarnings.required'),
  paymentBank: yup.string().required('validationWarnings.required'),
  paymentInstruments: yup
    .array()
    .of(yup.string().required('validationWarnings.required'))
    .min(1, 'validationWarnings.required')
    .required('validationWarnings.required'),
  approval: yup.boolean().required('validationWarnings.required'),
  code: yup.string().required('validationWarnings.required'),
  paymentDate: yup.string().required('validationWarnings.required'),
});

const RhfStandardExamp: React.FC = () => {
  const { handleSubmit, control, reset, formState, watch } = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const watchAllFields = watch();

  const formHandleSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data);
  };

  const [studentGenderItems] = React.useState<RHFRadioGroupCompItemProp[]>([
    { label: 'introduction.maleStudent', value: 'maleStudent' },
    { label: 'introduction.femaleStudent', value: 'femaleStudent', disabled: true },
  ]);

  const [paymentTypeItems] = React.useState<SelectItem[]>([
    { value: '1', label: 'introduction.partialInstallmentPayment' },
    { value: '2', label: 'introduction.fullInstallmentPayment' },
    { value: '3', label: 'introduction.payAllInstallments' },
  ]);

  const [monthsToBePaidItems] = React.useState<SelectItem[]>([
    { value: 'january', label: 'introduction.january' },
    { value: 'february', label: 'introduction.february' },
    { value: 'march', label: 'introduction.march' },
    { value: 'april', label: 'introduction.april' },
    { value: 'may', label: 'introduction.may' },
    { value: 'june', label: 'introduction.june' },
    { value: 'july', label: 'introduction.july' },
    { value: 'august', label: 'introduction.august' },
    { value: 'september', label: 'introduction.september' },
    { value: 'october', label: 'introduction.october' },
    { value: 'november', label: 'introduction.november' },
    { value: 'december', label: 'introduction.december' },
  ]);

  return (
    <form onSubmit={handleSubmit(formHandleSubmit)}>
      <DividerComp>
        <TypographyComp variant="h2" gutterBottom display="inline" noWrap={true}>
          introduction.RHFBasicUse
        </TypographyComp>
      </DividerComp>

      <br />
      <br />

      <CardComp>
        <CardContentComp>
          <TypographyComp variant="h3" gutterBottom style={{ textAlign: 'center' }}>
            introduction.playWithForm
          </TypographyComp>

          <BoxComp display={'flex'} justifyContent={'center'}>
            <CustomIconButton>
              <ArrowCircleDownIcon color="warning" />
              <ArrowCircleDownIcon color="primary" />
              <ArrowCircleDownIcon color="error" />
            </CustomIconButton>
          </BoxComp>

          <br />

          <GridComp container spacing={3}>
            <GridComp item xs={12}>
              <BoxComp display={'flex'} flexDirection={'column'} gap={'15px'}>
                <CustomController<FormValues>
                  name="studentNameAndSurname"
                  control={control}
                  componentFields={{
                    componentType: 'textField',
                    label: 'introduction.studentNameAndSurname',
                    placeholder: 'introduction.studentNameAndSurnamePlaceholder',
                    helperText: formState.errors.studentNameAndSurname?.message,
                    isLabelTranslation: true,
                    isPlaceholderTranslation: true,
                    isHelperTextTranslation: true,
                    isValueTranslation: false,
                    error: !!formState.errors.studentNameAndSurname,
                    disabled: false,
                    required: false,
                  }}
                />

                <CustomController<FormValues>
                  name="studentGender"
                  control={control}
                  componentFields={{
                    componentType: 'radio',
                    label: 'introduction.gender',
                    helperText: formState.errors.studentGender?.message,
                    isLabelTranslation: true,
                    isHelperTextTranslation: true,
                    isItemTextTranslation: true,
                    error: !!formState.errors.studentGender,
                    disabled: false,
                    required: false,
                    items: studentGenderItems,
                  }}
                />

                <CustomController<FormValues>
                  name="parentNameAndSurname"
                  control={control}
                  componentFields={{
                    componentType: 'textField',
                    label: 'introduction.parentNameAndSurname',
                    placeholder: 'introduction.parentNameAndSurnamePlaceholder',
                    helperText: formState.errors.parentNameAndSurname?.message,
                    isLabelTranslation: true,
                    isPlaceholderTranslation: true,
                    isHelperTextTranslation: true,
                    isValueTranslation: false,
                    error: !!formState.errors.parentNameAndSurname,
                    disabled: false,
                    required: false,
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
                    isLabelTranslation: true,
                    isPlaceholderTranslation: true,
                    isHelperTextTranslation: true,
                    error: !!formState.errors.parentPhoneNumber,
                    disabled: false,
                    required: false,
                  }}
                />

                <CustomController<FormValues>
                  name="monthsToBePaid"
                  control={control}
                  componentFields={{
                    componentType: 'select',
                    multiple: true,
                    label: 'introduction.monthsToBePaid',
                    helperText: formState.errors.monthsToBePaid?.message,
                    isLabelTranslation: true,
                    isHelperTextTranslation: true,
                    isItemTextTranslation: true,
                    error: !!formState.errors.monthsToBePaid,
                    disabled: false,
                    required: false,
                    items: monthsToBePaidItems,
                  }}
                />

                <CustomController<FormValues>
                  name="amountDuesPayable"
                  control={control}
                  componentFields={{
                    componentType: 'numericTextField',
                    label: 'introduction.amountDuesPayable',
                    placeholder: 'introduction.amountDuesPayablePlaceholder',
                    helperText: formState.errors.amountDuesPayable?.message,
                    isLabelTranslation: true,
                    isPlaceholderTranslation: true,
                    isHelperTextTranslation: true,
                    isPrefix: true,
                    error: !!formState.errors.amountDuesPayable,
                    disabled: false,
                    required: false,
                  }}
                />

                <CustomController<FormValues>
                  name="paymentType"
                  control={control}
                  componentFields={{
                    componentType: 'select',
                    label: 'introduction.paymentType',
                    helperText: formState.errors.paymentType?.message,
                    isLabelTranslation: true,
                    isHelperTextTranslation: true,
                    isItemTextTranslation: true,
                    error: !!formState.errors.paymentType,
                    disabled: false,
                    required: false,
                    items: paymentTypeItems,
                  }}
                />

                <CustomController<FormValues>
                  name="paymentBank"
                  control={control}
                  componentFields={{
                    componentType: 'asyncSelect',
                    label: 'introduction.paymentBank',
                    helperText: formState.errors.paymentBank?.message,
                    isLabelTranslation: true,
                    isHelperTextTranslation: true,
                    error: !!formState.errors.paymentBank,
                    disabled: false,
                    required: false,
                    shouldFetchOnEveryOpenMenu: true,
                    isSearhAndFilter: true,
                    fetchItemsData: async () => {
                      await new Promise((resolve) => setTimeout(resolve, 500));
                      const resultData = [
                        { value: '0010', label: 'T.C. Ziraat Bankası A.Ş.' },
                        { value: '0012', label: 'Türkiye Halk Bankası A.Ş.' },
                        { value: '0015', label: 'Türkiye Vakıflar Bankası T.A.O.' },
                        { value: '0032', label: 'Türkiye Ekonomi Bankası A.Ş.' },
                        { value: '0046', label: 'Akbank T.A.Ş.' },
                        { value: '0059', label: 'Şekerbank T.A.Ş.' },
                        { value: '0062', label: 'Türkiye Garanti Bankası A.Ş.' },
                        { value: '0064', label: 'Türkiye İş Bankası A.Ş.' },
                        { value: '0067', label: 'Yapı ve Kredi Bankası A.Ş.' },
                        { value: '0099', label: 'ING Bank A.Ş.' },
                        { value: '0103', label: 'Fibabanka A.Ş.' },
                        { value: '0111', label: 'QNB Finansbank A.Ş.' },
                        { value: '0124', label: 'Alternatifbank A.Ş.' },
                        { value: '0125', label: 'Burgan Bank A.Ş.' },
                        { value: '0134', label: 'Denizbank A.Ş.' },
                        { value: '0143', label: 'Aktif Yatırım Bankası A.Ş.' },
                        { value: '0146', label: 'Odea Bank A.Ş.' },
                        { value: '0203', label: 'Albaraka Türk Katılım Bankası A.Ş.' },
                        { value: '0205', label: 'Kuveyt Türk Katılım Bankası A.Ş.' },
                        { value: '0212', label: 'Hayat Finans Katılım Bankası A.Ş.' },
                      ];
                      return resultData;
                    },

                    fetchValueItemsData: async (_value, _multiple) => {
                      const resultData = [{ value: '0010', label: 'T.C. Ziraat Bankası A.Ş.' }];
                      return resultData;
                    },
                  }}
                />

                <CustomController<FormValues>
                  name="paymentInstruments"
                  control={control}
                  componentFields={{
                    componentType: 'asyncSelect',
                    label: 'introduction.paymentInstruments',
                    helperText: formState.errors.paymentInstruments?.message,
                    isLabelTranslation: true,
                    isHelperTextTranslation: true,
                    multiple: true,
                    error: !!formState.errors.paymentInstruments,
                    disabled: false,
                    required: false,
                    shouldFetchOnEveryOpenMenu: true,
                    isSearhAndFilter: true,
                    fetchItemsData: async () => {
                      await new Promise((resolve) => setTimeout(resolve, 500));
                      const paymentMethods = [
                        { value: 'pm001', label: 'Banka Kartı ile Ödeme' },
                        { value: 'pm002', label: 'Kredi Kartı ile Ödeme' },
                        { value: 'pm003', label: 'Sanal POS ile Ödeme' },
                        { value: 'pm004', label: 'Kripto Para ile Ödeme' },
                        { value: 'pm005', label: 'Dijital Cüzdan ile Ödeme (Apple Pay, Google Pay)' },
                        { value: 'pm006', label: 'Havale / EFT ile Ödeme' },
                        { value: 'pm007', label: 'Mobil Ödeme (Operatör Faturası Üzerinden)' },
                        { value: 'pm008', label: 'QR Kod ile Ödeme' },
                        { value: 'pm009', label: 'Link ile Ödeme (Mail, SMS veya WhatsApp üzerinden)' },
                        { value: 'pm010', label: 'Kapıda Ödeme (Nakit veya Kart ile)' },
                        { value: 'pm011', label: 'Taksitli Ödeme (Kredi Kartına Vade Seçeneği ile)' },
                        { value: 'pm012', label: 'Ön Ödemeli Kart ile Ödeme (Papara, ininal vb.)' },
                        { value: 'pm013', label: 'Kripto Cüzdan ile Ödeme (Metamask, Trust Wallet vb.)' },
                        { value: 'pm014', label: 'Ticari Kredi ile Ödeme (İşyeri Kredisi, Mikro Kredi vb.)' },
                        { value: 'pm015', label: 'Kripto ile Stablecoin Ödeme (USDT, USDC, DAI vb.)' },
                      ];
                      return paymentMethods;
                    },

                    fetchValueItemsData: async (_value, _multiple) => {
                      const resultData = [{ value: 'pm002', label: 'Kredi Kartı ile Ödeme' }];
                      return resultData;
                    },
                  }}
                />

                <CustomController<FormValues>
                  name="approval"
                  control={control}
                  componentFields={{
                    componentType: 'checkbox',
                    label: 'introduction.confirmAcceptanceRules',
                    helperText: formState.errors.approval?.message,
                    isLabelTranslation: true,
                    isHelperTextTranslation: true,
                    error: !!formState.errors.approval,
                    disabled: false,
                    required: false,
                  }}
                />

                <CustomController<FormValues>
                  name="code"
                  control={control}
                  componentFields={{
                    componentType: 'passwordTextField',
                    label: 'introduction.code',
                    placeholder: 'introduction.codePlaceholder',
                    helperText: formState.errors.code?.message,
                    isLabelTranslation: true,
                    isPlaceholderTranslation: true,
                    isHelperTextTranslation: true,
                    isValueTranslation: false,
                    error: !!formState.errors.code,
                    disabled: false,
                    required: false,
                  }}
                />

                <CustomController<FormValues>
                  name="paymentDate"
                  control={control}
                  componentFields={{
                    componentType: 'datePicker',
                    label: 'introduction.paymentDate',
                    helperText: formState.errors.paymentDate?.message,
                    isLabelTranslation: true,
                    isHelperTextTranslation: true,
                    error: !!formState.errors.paymentDate,
                    disabled: false,
                    required: false,
                  }}
                />
                <BoxComp display={'flex'} flexDirection={'row'} justifyContent={'end'} gap={'15px'}>
                  <CancelButton onClick={() => reset()} />
                  <SaveButton />
                </BoxComp>
              </BoxComp>
            </GridComp>
          </GridComp>
        </CardContentComp>
      </CardComp>

      <br />
      <br />

      <CardComp>
        <CardContentComp>
          <TypographyComp variant="h3" gutterBottom style={{ textAlign: 'center' }}>
            introduction.observeFormChanges
          </TypographyComp>

          <BoxComp display={'flex'} justifyContent={'center'}>
            <CustomIconButton>
              <ArrowCircleDownIcon color="warning" />
              <ArrowCircleDownIcon color="primary" />
              <ArrowCircleDownIcon color="error" />
            </CustomIconButton>
          </BoxComp>

          <br />

          <GridComp container spacing={5}>
            <>
              <GridComp item xs={4}>
                <TypographyComp variant="h5">introduction.studentNameAndSurname</TypographyComp>
              </GridComp>
              <GridComp item xs={8}>
                <TypographyComp variant="h5">
                  {watchAllFields.studentNameAndSurname ? watchAllFields.studentNameAndSurname : '-'}
                </TypographyComp>
              </GridComp>
            </>

            <>
              <GridComp item xs={4}>
                <TypographyComp variant="h5">introduction.gender</TypographyComp>
              </GridComp>
              <GridComp item xs={8}>
                <TypographyComp variant="h5">
                  {watchAllFields.studentGender ? watchAllFields.studentGender : '-'}
                </TypographyComp>
              </GridComp>
            </>

            <>
              <GridComp item xs={4}>
                <TypographyComp variant="h5">introduction.parentNameAndSurname</TypographyComp>
              </GridComp>
              <GridComp item xs={8}>
                <TypographyComp variant="h5">
                  {watchAllFields.parentNameAndSurname ? watchAllFields.parentNameAndSurname : '-'}
                </TypographyComp>
              </GridComp>
            </>

            <>
              <GridComp item xs={4}>
                <TypographyComp variant="h5">introduction.parentPhoneNumber</TypographyComp>
              </GridComp>
              <GridComp item xs={8}>
                <TypographyComp variant="h5">
                  {watchAllFields.parentPhoneNumber ? watchAllFields.parentPhoneNumber : '-'}
                </TypographyComp>
              </GridComp>
            </>

            <>
              <GridComp item xs={4}>
                <TypographyComp variant="h5">introduction.monthsToBePaid</TypographyComp>
              </GridComp>
              <GridComp item xs={8}>
                <TypographyComp variant="h5">
                  {watchAllFields.monthsToBePaid && watchAllFields.monthsToBePaid.length > 0
                    ? Array.isArray(watchAllFields.monthsToBePaid) && watchAllFields.monthsToBePaid.length > 0
                      ? watchAllFields.monthsToBePaid.join(', ')
                      : watchAllFields.monthsToBePaid
                    : '-'}
                </TypographyComp>
              </GridComp>
            </>

            <>
              <GridComp item xs={4}>
                <TypographyComp variant="h5">introduction.amountDuesPayable</TypographyComp>
              </GridComp>
              <GridComp item xs={8}>
                <TypographyComp variant="h5">
                  {watchAllFields.amountDuesPayable ? watchAllFields.amountDuesPayable : '-'}
                </TypographyComp>
              </GridComp>
            </>

            <>
              <GridComp item xs={4}>
                <TypographyComp variant="h5">introduction.paymentType</TypographyComp>
              </GridComp>
              <GridComp item xs={8}>
                <TypographyComp variant="h5">
                  {watchAllFields.paymentType ? watchAllFields.paymentType : '-'}
                </TypographyComp>
              </GridComp>
            </>

            <>
              <GridComp item xs={4}>
                <TypographyComp variant="h5">introduction.paymentBank</TypographyComp>
              </GridComp>
              <GridComp item xs={8}>
                <TypographyComp variant="h5">
                  {watchAllFields.paymentBank ? watchAllFields.paymentBank : '-'}
                </TypographyComp>
              </GridComp>
            </>

            <>
              <GridComp item xs={4}>
                <TypographyComp variant="h5">introduction.paymentInstruments</TypographyComp>
              </GridComp>
              <GridComp item xs={8}>
                <TypographyComp variant="h5">
                  {watchAllFields.paymentInstruments && watchAllFields.paymentInstruments.length > 0
                    ? Array.isArray(watchAllFields.paymentInstruments) && watchAllFields.paymentInstruments.length > 0
                      ? watchAllFields.paymentInstruments.join(', ')
                      : watchAllFields.paymentInstruments
                    : '-'}
                </TypographyComp>
              </GridComp>
            </>

            <>
              <GridComp item xs={4}>
                <TypographyComp variant="h5">introduction.confirmAcceptanceRules</TypographyComp>
              </GridComp>
              <GridComp item xs={8}>
                <TypographyComp variant="h5">{watchAllFields.approval ? 'true' : 'false'}</TypographyComp>
              </GridComp>
            </>

            <>
              <GridComp item xs={4}>
                <TypographyComp variant="h5">introduction.code</TypographyComp>
              </GridComp>
              <GridComp item xs={8}>
                <TypographyComp variant="h5">{watchAllFields.code ? watchAllFields.code : '-'}</TypographyComp>
              </GridComp>
            </>

            <>
              <GridComp item xs={4}>
                <TypographyComp variant="h5">introduction.paymentDate</TypographyComp>
              </GridComp>
              <GridComp item xs={8}>
                <TypographyComp variant="h5">
                  {watchAllFields.paymentDate ? watchAllFields.paymentDate : '-'}
                </TypographyComp>
              </GridComp>
            </>
          </GridComp>
        </CardContentComp>
      </CardComp>
    </form>
  );
};

export default RhfStandardExamp;
