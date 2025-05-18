import React from 'react';
import styled from '@emotion/styled';
import AccordionDetailsComp from '../../../../../base/accordionDetails/AccordionDetails';
import BoxComp from '../../../../../base/box/Box';
import { ColumnFilterType } from '../../column/columnFilter/columnFilterType';
import { GridRefType } from '../ReadyMadeFilters';
import { Card, CardActionArea, CardContent, SvgIconProps, Typography } from '@mui/material';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import Filter1Icon from '@mui/icons-material/Filter1';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

const CustomAccordionDetailsComp = styled(AccordionDetailsComp)`
  padding: ${({ theme }) => theme.spacing(2)};
  padding-top: ${({ theme }) => theme.spacing(5)};
  padding-bottom: ${({ theme }) => theme.spacing(5)};
  border-top: 1px solid rgba(0, 0, 0, 0.125);
`;

const DetailSection = ({
  gridRef,
  items,
  onClicItem,
}: {
  gridRef: GridRefType;
  items: ColumnFilterType[];
  onClicItem: (params: ColumnFilterType) => void;
}) => {
  return (
    <CustomAccordionDetailsComp>
      <BoxComp display={'flex'} flexDirection={'row'} gap={'15px'} flexWrap={'wrap'}>
        {items.map((item, index) => {
          return (
            <React.Fragment key={index.toString()}>
              {item.componentType === 'textColumnFilter' && (
                <ItemCard
                  item={item}
                  itemOnClik={(params) => onClicItem(params)}
                  title={gridRef.current?.api.getColumnDef(item.name)?.headerName ?? item.name}
                  titleIcon={TextFieldsIcon}
                  description={item.componentProps.filterPlaceholder as string}
                />
              )}

              {item.componentType === 'numberColumnFilter' && (
                <ItemCard
                  item={item}
                  itemOnClik={(params) => onClicItem(params)}
                  title={gridRef.current?.api.getColumnDef(item.name)?.headerName ?? item.name}
                  titleIcon={Filter1Icon}
                  description={item.componentProps.filterPlaceholder as string}
                />
              )}

              {item.componentType === 'dateColumnFilter' && (
                <ItemCard
                  item={item}
                  itemOnClik={(params) => onClicItem(params)}
                  title={gridRef.current?.api.getColumnDef(item.name)?.headerName ?? item.name}
                  titleIcon={CalendarMonthIcon}
                  description={item.componentProps.filterPlaceholder as string}
                />
              )}

              {item.componentType === 'radioCustomFilter' && (
                <ItemCard
                  item={item}
                  itemOnClik={(params) => onClicItem(params)}
                  title={gridRef.current?.api.getColumnDef(item.name)?.headerName ?? item.name}
                  titleIcon={RadioButtonCheckedIcon}
                  description={item.componentProps.label}
                />
              )}
            </React.Fragment>
          );
        })}
      </BoxComp>
    </CustomAccordionDetailsComp>
  );
};

export default DetailSection;

const ItemCard = ({
  item,
  itemOnClik,
  title,
  titleIcon: TitleIcon,
  description,
}: {
  item: ColumnFilterType;
  itemOnClik: (params: ColumnFilterType) => void;
  title: string;
  titleIcon: React.ComponentType<SvgIconProps>;
  description: string;
}) => {
  return (
    <Card
      sx={{
        width: 250,
        backgroundColor: 'background.paper',
        borderRadius: 2,
        boxShadow: 3,
        border: '1px solid',
        borderColor: 'divider',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'scale(1.02)',
        },
      }}
    >
      <CardActionArea onClick={() => itemOnClik(item)} sx={{ display: 'flex', alignItems: 'start', height: '100%' }}>
        <CardContent>
          <BoxComp display="flex" alignItems="center" gap={3} mb={3}>
            <TitleIcon color="primary" />
            <Typography variant="subtitle2" fontWeight="bold">
              {title}
            </Typography>
          </BoxComp>
          <Typography variant="body2" color="text.secondary">
            {description as string}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
