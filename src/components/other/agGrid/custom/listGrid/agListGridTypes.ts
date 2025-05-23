import { ReactNode } from 'react';
import { ApiSliceGetListMethodRequestDto } from '../../../../../redux/slices/apiSliceHelper/getMethodsAndTypes/getList/getListRequestType';
import { ApiSliceGetListMethodResponseDto } from '../../../../../redux/slices/apiSliceHelper/getMethodsAndTypes/getList/getListResponseType';
import { ApiSliceGetReportMethodRequestDto } from '../../../../../redux/slices/apiSliceHelper/getMethodsAndTypes/getReport/getReportRequestType';
import { ApiSliceGetReportMethodResponseDto } from '../../../../../redux/slices/apiSliceHelper/getMethodsAndTypes/getReport/getReportResponseType';
import { IconButtonColor } from '../../../../base/iconButton/iconButtonHelper';
import { ColumnType } from '../../helper/column/columnType';
import { IAGGridAddButtonProps } from '../../helper/buttons/AGGridAddButton';

export interface GridCacheSettings {
  maxConcurrentDatasourceRequests?: number; // Api'ye aynı anda yapılabilecek maksimum istek sayısı

  cacheBlockSize?: number; // Api'den bir istekte alınacak veri sayısı

  totalRowCount?: number; // Api'den tüm istekler ile beraber alınacak veri sayısı

  serverSideInitialRowCount?: number; // Grid'in scroll çubuğunu doğru boyutlandırması için başlangıçta beklenilen toplam satır sayısıdır. Api'den gelecek maximum satır sayısı değerine yakın bir değer verilmelidir.

  // maxBlocksInCache?: number; // Grid'in önbelleğinde tutulacak maksimum blok sayısı => (maxBlocksInCache * cacheBlockSize) kadar satır önbellekte tutulur

  cacheOverflowSize?: number; // Görünür bloktan önce ve sonra kaç blok tutulacağını belirler => Örn: değer 1 ise, görünür blok + öncesinde 1 blok + sonrasında 1 blok

  rowBuffer?: number; // Grid'in görünür alanının dışında kaç satır render edileceğini belirler => Örn: 20 ise, görünür alanın üstünde 20 ve altında 20 satır daha render edilir
}

export type OperationColumnItemFields =
  | {
      type: 'iconButton';
      icon: ReactNode;
      color?: IconButtonColor;
      visable?: boolean;
      visablePrepare?: (row: unknown) => boolean;
      disabled?: boolean;
      disabledPrepare?: (row: unknown) => boolean;
      onClick: (row: unknown) => void;
    }
  | {
      type: 'button';
      label: string;
      onClick: (row: unknown) => void;
    };

export interface AgListGridProps {
  addButtonProps?: IAGGridAddButtonProps;
  isSummary?: boolean;
  columns: ColumnType[];
  onView?: (row: unknown) => void;
  onEdit?: (row: unknown) => void;
  onDelete?: (row: unknown) => void;
  operationItems?: OperationColumnItemFields[];
  gridCacheSettings?: GridCacheSettings;
  triggerGetList: (params: ApiSliceGetListMethodRequestDto) => Promise<{ data?: ApiSliceGetListMethodResponseDto }>;
  triggerGetReport: (
    params: ApiSliceGetReportMethodRequestDto,
  ) => Promise<{ data?: ApiSliceGetReportMethodResponseDto }>;
}
