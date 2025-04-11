import { AgGridCompColDef } from '../../custom/agGrid/agGridHelper';
import { GridReadyEvent } from 'ag-grid-community';

export interface GridCacheSettings {
  cacheBlockSize?: number; // Her bir blokta kaç satır verinin tutulacağını belirler => Api'den bir istekte alınacak veri sayısı
  cacheOverflowSize?: number; // Görünür bloktan önce ve sonra kaç blok tutulacağını belirler => Örn: değer 2 ise, görünür blok + öncesinde 2 blok + sonrasında 2 blok = 5 blok tutulur
  maxConcurrentDatasourceRequests?: number; // Aynı anda yapılabilecek maksimum istek sayısı => 1: istekler sırayla yapılır, 2: aynı anda 2 istek yapılabilir (paralel istekler)
  rowBuffer?: number; // Grid'in görünür alanının dışında kaç satır render edileceğini belirler => Örn: 20 ise, görünür alanın üstünde 20 ve altında 20 satır daha render edilir
  totalRowCount?: number;
  serverSideInitialRowCount?: number; // Grid'in scroll çubuğunu doğru boyutlandırması için başlangıçta beklenilen toplam satır sayısı => Örn: 1000 ise scroll çubuğu 1000 satıra göre boyutlandırılır
}

export interface FullFeatureAgGridProps<T> {
  columns: AgGridCompColDef[];
  onGridReady: (event: GridReadyEvent<T>) => void;
  gridSettings?: GridCacheSettings;
}

export const DEFAULT_GRID_SETTINGS: Required<GridCacheSettings> = {
  cacheBlockSize: 100,
  cacheOverflowSize: 2,
  maxConcurrentDatasourceRequests: 1,
  rowBuffer: 0,
  totalRowCount: 1000,
  serverSideInitialRowCount: 1000,
} as const;
