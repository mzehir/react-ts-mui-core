import React from 'react';
import { styled } from '@mui/material/styles';
import BoxComp from '../../../../components/base/box/Box';
import CardComp from '../../../../components/base/card/Card';
import CardContentComp from '../../../../components/base/cardContent/CardContent';
import GridComp from '../../../../components/base/grid/Grid';
import TypographyComp from '../../../../components/base/typography/Typography';
import DividerComp from '../../../../components/base/divider/Divider';
import IconButtonComp from '../../../../components/base/iconButton/IconButton';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { FilterItemComponent } from '../../../../components/custom/filter/helper';
import CustomFilter from '../../../../components/custom/filter/CustomFilter';
import dayjs from 'dayjs';

const CustomIconButton = styled(IconButtonComp)`
  cursor: default;
  background-color: transparent;
  &:hover {
    background-color: transparent;
  }
`;

const CustomFilterPage: React.FC = () => {
  const filterItems: FilterItemComponent[] = [
    {
      name: 'registrationDate',
      componentType: 'datePicker',
      componentProps: {
        label: 'introduction.studentRegistrationDate',
        defaultValue: dayjs('2022-04-17'),
        isLabelTranslation: true,
      },
      summaryProps: {
        summaryLabel: 'introduction.studentRegistrationDate',
        isSummaryLabelTranslation: true,
      },
    },
    {
      name: 'name',
      componentType: 'textField',
      componentProps: {
        label: 'introduction.studentName',
        placeholder: 'introduction.studentNamePlaceholder',
        defaultValue: 'Arda',
        isLabelTranslation: true,
        isPlaceholderTranslation: true,
      },
      summaryProps: {
        summaryLabel: 'introduction.studentName',
        isSummaryLabelTranslation: true,
      },
    },
    {
      name: 'class',
      componentType: 'select',
      componentProps: {
        label: 'introduction.class',
        isLabelTranslation: true,
        items: [
          { label: '1/A', value: 1 },
          { label: '1/B', value: 2 },
          { label: '1/C', value: 3 },
          { label: '2/A', value: 4 },
          { label: '2/B', value: 5 },
          { label: '2/C', value: 6 },
          { label: '3/A', value: 7 },
          { label: '3/B', value: 8 },
          { label: '3/C', value: 9 },
          { label: '4/A', value: 10 },
          { label: '4/B', value: 11 },
          { label: '4/C', value: 12 },
        ],
        defaultValue: 2,
      },
      summaryProps: {
        summaryLabel: 'introduction.class',
        isSummaryLabelTranslation: true,
      },
    },
    {
      name: 'studentLevel',
      componentType: 'select',
      componentProps: {
        label: 'introduction.studentDiligenceLevel',
        isLabelTranslation: true,
        isItemTranslation: true,
        items: [
          { label: 'introduction.veryDiligent', value: 1 },
          { label: 'introduction.diligent', value: 2 },
          { label: 'introduction.standard', value: 3 },
          { label: 'introduction.lazy', value: 4 },
          { label: 'introduction.veryLazy', value: 5 },
        ],
        defaultValue: 2,
      },
      summaryProps: {
        summaryLabel: 'introduction.studentDiligenceLevel',
        isSummaryLabelTranslation: true,
      },
    },
    {
      name: 'studentGradePointAverage',
      componentType: 'numericTextField',
      componentProps: {
        label: 'introduction.studentGradeAverage',
        placeholder: 'introduction.studentGroupGradeAveragePlaceholder',
        defaultValue: 85.5,
        isLabelTranslation: true,
        isPlaceholderTranslation: true,
      },
      summaryProps: {
        summaryLabel: 'introduction.studentGradeAverage',
        isSummaryLabelTranslation: true,
      },
    },
    {
      name: 'gender',
      componentType: 'radio',
      componentProps: {
        label: 'introduction.gender',
        isLabelTranslation: true,
        isItemTranslation: true,
        items: [
          { label: 'introduction.maleStudent', value: 1 },
          { label: 'introduction.femaleStudent', value: 2 },
        ],
        defaultValue: 1,
      },
      summaryProps: {
        summaryLabel: 'introduction.gender',
        isSummaryLabelTranslation: true,
      },
    },
    {
      name: 'scholarship',
      componentType: 'checkbox',
      componentProps: {
        label: 'introduction.scholarshipStudentsOnly',
        isLabelTranslation: true,
        defaultValue: true,
      },
      summaryProps: {
        summaryLabel: 'introduction.scholarshipStudentsOnly',
        isSummaryLabelTranslation: true,
      },
    },
  ];

  const onFilter = (filterValues: unknown) => {
    console.log(filterValues);
  };

  return (
    <>
      <DividerComp>
        <TypographyComp variant="h2" gutterBottom display="inline">
          introduction.customFilterComponent
        </TypographyComp>
      </DividerComp>

      <br />
      <br />

      <CardComp>
        <CardContentComp>
          <TypographyComp variant="h3" gutterBottom style={{ textAlign: 'center' }}>
            introduction.playWithComponent
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
              <CustomFilter filterItems={filterItems} onFilter={onFilter} />
            </GridComp>
          </GridComp>
        </CardContentComp>
      </CardComp>
    </>
  );
};

export default CustomFilterPage;
