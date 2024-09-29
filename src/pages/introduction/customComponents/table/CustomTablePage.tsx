import React from 'react';
import NewRow from './section/NewRow';
import ViewRow from './section/ViewRow';
import EditRow from './section/EditRow';
import BoxComp from '../../../../components/base/box/Box';
import CardComp from '../../../../components/base/card/Card';
import CardContentComp from '../../../../components/base/cardContent/CardContent';
import GridComp from '../../../../components/base/grid/Grid';
import TypographyComp from '../../../../components/base/typography/Typography';
import DividerComp from '../../../../components/base/divider/Divider';
import IconButtonComp from '../../../../components/base/iconButton/IconButton';
import CustomTable from '../../../../components/custom/table/CustomTable';
import { TableCell } from '../../../../components/custom/table/customTableHelper';
import { formatPhoneNumber } from '../../../../utils/locale/phoneFormats';
import { styled } from '@mui/material/styles';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

const generateRandomUUID = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (char) => {
    const random = (Math.random() * 16) | 0;
    const value = char === 'x' ? random : (random & 0x3) | 0x8;
    return value.toString(16);
  });
};

const CustomIconButton = styled(IconButtonComp)`
  cursor: default;
  background-color: transparent;
  &:hover {
    background-color: transparent;
  }
`;

export interface rowType {
  id: string;
  registrationDate: string;
  student: string;
  gradePointAverage: number | null;
  parent: string;
  parentPhoneNumber: string;
  homeAddress: string;
}

const cellsData: TableCell[] = [
  {
    key: 'registrationDate',
    label: 'introduction.registrationDate',
    settings: {
      head: {
        tableCell: {
          minWidth: 200,
        },
      },
    },
  },
  {
    key: 'student',
    label: 'introduction.student',
    settings: {
      head: {
        tableCell: {
          minWidth: 200,
        },
      },
    },
  },
  {
    key: 'gradePointAverage',
    label: 'introduction.gradePointAverage',
    settings: {
      head: {
        tableCell: {
          minWidth: 200,
          align: 'right',
        },
      },
    },
  },
  {
    key: 'parent',
    label: 'introduction.parent',
    settings: {
      head: {
        tableCell: {
          minWidth: 200,
        },
      },
    },
  },
  {
    key: 'parentPhoneNumber',
    label: 'introduction.parentPhoneNumber',
    settings: {
      head: {
        tableCell: {
          minWidth: 200,
        },
      },
      body: {
        tableCell: {
          prepareCellTextMethod: (cellText) => {
            return formatPhoneNumber(cellText);
          },
        },
      },
    },
  },
  {
    key: 'homeAddress',
    label: 'introduction.homeAddress',
    settings: {
      head: {
        tableCell: {
          minWidth: 200,
        },
      },
    },
  },
];

const CustomTablePage: React.FC = () => {
  const [newRowOpen, setNewRowOpen] = React.useState(false);
  const [viewRowOpen, setViewRowOpen] = React.useState(false);
  const [editRowOpen, setEditRowOpen] = React.useState(false);

  const [rowData, setRowData] = React.useState<rowType[]>([
    {
      id: generateRandomUUID(),
      registrationDate: '12/09/2023',
      student: 'İnek Şaban',
      gradePointAverage: 45.0,
      parent: 'Hasan Efendi',
      parentPhoneNumber: '5325551122',
      homeAddress: 'Taşlık Mahallesi Hababam Sokak No:1 Kadıköy/İstanbul',
    },
    {
      id: generateRandomUUID(),
      registrationDate: '15/09/2023',
      student: 'Damat Ferit',
      gradePointAverage: 55.5,
      parent: 'Hüseyin Bey',
      parentPhoneNumber: '5325552233',
      homeAddress: 'Çamlıca Mahallesi İstiklal Caddesi No:14 Üsküdar/İstanbul',
    },
    {
      id: generateRandomUUID(),
      registrationDate: '18/09/2023',
      student: 'Güdük Necmi',
      gradePointAverage: 60.0,
      parent: 'Fatma Hanım',
      parentPhoneNumber: '5325553344',
      homeAddress: 'Etiler Mahallesi Barbaros Bulvarı No:7 Beşiktaş/İstanbul',
    },
    {
      id: generateRandomUUID(),
      registrationDate: '20/09/2023',
      student: 'Tulum Hayri',
      gradePointAverage: 50.0,
      parent: 'Hakkı Efendi',
      parentPhoneNumber: '5325554455',
      homeAddress: 'Bebek Mahallesi Boğaz Sokak No:25 Beşiktaş/İstanbul',
    },
    {
      id: generateRandomUUID(),
      registrationDate: '22/09/2023',
      student: 'Kalem Şakir',
      gradePointAverage: 70.0,
      parent: 'Müzeyyen Hanım',
      parentPhoneNumber: '5325555566',
      homeAddress: 'Bostancı Mahallesi Deniz Caddesi No:18 Kadıköy/İstanbul',
    },
    {
      id: generateRandomUUID(),
      registrationDate: '24/09/2023',
      student: 'Domdom Ali',
      gradePointAverage: 40.0,
      parent: 'Rıfat Efendi',
      parentPhoneNumber: '5325556677',
      homeAddress: 'Üsküdar Mahallesi Valide Sultan Caddesi No:10 Üsküdar/İstanbul',
    },
    {
      id: generateRandomUUID(),
      registrationDate: '26/09/2023',
      student: 'Hayta İsmail',
      gradePointAverage: 65.0,
      parent: 'Ahmet Efendi',
      parentPhoneNumber: '5325557788',
      homeAddress: 'Fatih Mahallesi Sultanahmet Caddesi No:21 Fatih/İstanbul',
    },
    {
      id: generateRandomUUID(),
      registrationDate: '28/09/2023',
      student: 'Tavşan Sezai',
      gradePointAverage: 75.5,
      parent: 'Emin Bey',
      parentPhoneNumber: '5325558899',
      homeAddress: 'Sarıyer Mahallesi Köybaşı Caddesi No:30 Sarıyer/İstanbul',
    },
  ]);
  const [selectedRowData, setSelectedRowData] = React.useState<rowType>();

  return (
    <>
      <DividerComp>
        <TypographyComp variant="h2" gutterBottom display="inline">
          introduction.customTableComponent
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
              <CustomTable
                cells={cellsData}
                rows={rowData}
                onAddClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                  event.preventDefault();
                  setNewRowOpen(true);
                }}
                onEditClick={(event: React.MouseEvent<HTMLButtonElement>, row: rowType) => {
                  event.preventDefault();
                  setSelectedRowData(row);
                  setEditRowOpen(true);
                }}
                onViewClick={(event: React.MouseEvent<HTMLButtonElement>, row: rowType) => {
                  event.preventDefault();
                  setSelectedRowData(row);
                  setViewRowOpen(true);
                }}
                onDeleteClick={(event: React.MouseEvent<HTMLButtonElement>, row: rowType) => {
                  event.preventDefault();
                  const updatedRowData = rowData.filter((item) => item.id !== row.id);
                  setRowData(updatedRowData);
                }}
              />
            </GridComp>
          </GridComp>
        </CardContentComp>
      </CardComp>

      {newRowOpen && (
        <NewRow
          open={newRowOpen}
          setOpen={setNewRowOpen}
          formSubmit={(data) => {
            const newID = generateRandomUUID();

            const newRow = {
              id: newID,
              ...data,
            };

            setRowData((prev) => [...prev, newRow]);
          }}
        />
      )}

      {viewRowOpen && selectedRowData && <ViewRow data={selectedRowData} open={viewRowOpen} setOpen={setViewRowOpen} />}

      {editRowOpen && selectedRowData && (
        <EditRow
          data={selectedRowData}
          open={editRowOpen}
          setOpen={setEditRowOpen}
          formSubmit={(data) => {
            setRowData((prevData) => prevData.map((item) => (item.id === data.id ? { ...item, ...data } : item)));
          }}
        />
      )}
    </>
  );
};

export default CustomTablePage;
