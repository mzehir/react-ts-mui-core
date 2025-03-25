import { DataGridProps, GridValidRowModel } from '@mui/x-data-grid';

export interface DataGridCompRowModel extends GridValidRowModel {}

export interface DataGridCompProps<R extends DataGridCompRowModel = DataGridCompRowModel>
  extends Omit<DataGridProps<R>, 'rows'> {
  rows?: R[];
}

export const dataGridCompDefaultProps: Partial<DataGridCompProps<DataGridCompRowModel>> = {
  columns: [],

  //! apiRef
  /**
   * apiRef: DataGrid'in metodlarına ve state'ine dışarıdan erişim sağlar.
   * Kullanım amacı: Grid'i programatik olarak kontrol etmek istediğinizde kullanılır.
   * Örnek kullanımlar:
   * - Satır/sütun seçimini programatik olarak değiştirme
   * - Grid'i yeniden render etme
   * - Grid state'ini okuma/değiştirme
   */

  // const apiRef = useGridApiRef();
  // <DataGrid apiRef={apiRef} />

  //! aria-label
  /**
   * aria-label: Grid için erişilebilirlik etiketi tanımlar.
   * Kullanım amacı: Ekran okuyucular için grid'in amacını açıklar.
   * Ne zaman kullanılır: Erişilebilirlik gereksinimlerinde ve SEO optimizasyonunda.
   * Örnek: Kullanıcı listesi, ürün tablosu gibi açıklayıcı etiketler.
   */

  // <DataGrid aria-label="Kullanıcı Listesi Tablosu" />

  //! aria-labelledby
  /**
   * aria-labelledby: Grid'i başka bir HTML elementinin ID'si ile ilişkilendirir.
   * Kullanım amacı: Grid'i açıklayan başlık elementi ile bağlantı kurar.
   * Ne zaman kullanılır: Grid başlığı ayrı bir elementte yer aldığında.
   * Erişilebilirlik standartlarına uyum için önemlidir.
   */

  // <h2 id="userTableTitle">Kullanıcı Listesi</h2>
  // <DataGrid aria-labelledby="userTableTitle" />

  //! autoPageSize
  /**
   * autoPageSize: Görünür alan yüksekliğine göre sayfa boyutunu otomatik ayarlar.
   * Kullanım amacı: Kaydırma çubuğu olmadan tüm alanı kullanmak.
   * Ne zaman kullanılır:
   * - Sayfada boşluk kalmasını istemediğinizde
   * - Grid yüksekliğini dinamik tutmak istediğinizde
   */

  // <DataGrid autoPageSize />

  //! autosizeOnMount
  /**
   * autosizeOnMount: Grid yüklendiğinde sütun genişliklerini otomatik ayarlar.
   * Kullanım amacı: İçeriğe göre optimal sütun genişliklerini belirler.
   * Ne zaman kullanılır:
   * - İçerik uzunluğu değişken olduğunda
   * - Başlangıçta manuel genişlik ayarı yapmak istemediğinizde
   * Not: Performansı etkileyebilir, büyük veri setlerinde dikkatli kullanılmalıdır.
   */

  // <DataGrid autosizeOnMount />

  //! autosizeOptions
  /**
   * autosizeOptions: Otomatik boyutlandırma davranışını özelleştirir.
   * Kullanım amacı: Sütun genişliklerinin nasıl hesaplanacağını kontrol eder.
   * Ne zaman kullanılır: Özel boyutlandırma gereksinimleri olduğunda
   *
   * Özelleştirilebilir seçenekler:
   * - skipHeader: Başlık metnini hesaplamaya dahil etmez
   * - includeOutliers: Aykırı değerleri hesaplamaya dahil eder
   * - includeHeaders: Başlıkları hesaplamaya dahil eder
   * - minWidth: Minimum sütun genişliği
   * - maxWidth: Maksimum sütun genişliği
   */

  // <DataGrid
  //     autosizeOptions={{
  //       skipHeader: false,
  //       includeOutliers: true,
  //       minWidth: 50,
  //       maxWidth: 300
  //     }}
  // />

  //! cellModesModel
  /**
   * cellModesModel: Hücre modlarının modelini tanımlar.
   * Kullanım amacı: Hücrelerin farklı modlarda görüntülenmesini sağlar.
   * Ne zaman kullanılır:
   * - Hücrelerin farklı modlarda görüntülenmesi gerektiğinde
   * - Hücrelerin farklı durumlarda görüntülenmesi gerektiğinde
   */

  // <DataGrid
  //   cellModesModel={{
  //     1: { // Satır ID
  //       firstName: { mode: 'edit' }, // Hücre düzenleme modunda
  //       lastName: { mode: 'view' }   // Hücre görüntüleme modunda
  //     }
  //   }}
  // />

  //! checkboxSelection
  /**
   * checkboxSelection: Veri Izgarası satırları seçmek için onay kutuları içeren ekstra bir sütun görüntüler.
   * Kullanım amacı: Kullanıcıların satırları seçmesine izin vermek için.
   * Ne zaman kullanılır:
   * - Satırların seçilebilir olması gerektiğinde
   * - Kullanıcıların satırları seçmesine izin vermek istediğinizde
   */

  // <DataGrid checkboxSelection />

  //! classes
  /**
   * classes: Grid'in farklı bölümlerine CSS class'ları ekler.
   * Kullanım amacı: Grid'in görünümünü özelleştirmek.
   * Ne zaman kullanılır:
   * - Özel stil uygulamak istediğinizde
   * - Tema özelleştirmesi yapacağınızda
   *
   * Örnek kullanım:
   */

  // <DataGrid
  //   classes={{
  //     root: 'custom-grid',
  //     row: 'custom-row',
  //     cell: 'custom-cell',
  //     columnHeader: 'custom-header'
  //   }}
  // />

  //! clipboardCopyCellDelimiter
  /**
   * clipboardCopyCellDelimiter: Kopyalanan hücreler arasındaki ayırıcıyı belirler.
   * Kullanım amacı: Kopyalanan verilerin formatını özelleştirmek.
   * Ne zaman kullanılır:
   * - Excel veya başka programlara veri aktarımında
   * - Özel format gerektiren durumlarda
   */

  // <DataGrid clipboardCopyCellDelimiter="\t" /> // Tab ile ayırma
  // <DataGrid clipboardCopyCellDelimiter="," />  // Virgül ile ayırma

  //! columnBufferPx
  /**
   * columnBufferPx: Sütunların önbellek piksel değeri.
   * Kullanım amacı: Yatay kaydırmada performansı optimize etmek.
   * Ne zaman kullanılır:
   * - Çok sayıda sütun olduğunda
   * - Kaydırma performansını iyileştirmek istediğinizde
   * Varsayılan değer: 150px
   */

  // <DataGrid columnBufferPx={200} />

  //! columnGroupHeaderHeight
  /**
   * columnGroupHeaderHeight: Grup başlıklarının yüksekliği.
   * Kullanım amacı: Gruplanmış sütun başlıklarının yüksekliğini ayarlar.
   * Ne zaman kullanılır:
   * - Sütunları grupladığınızda
   * - Başlık yüksekliğini özelleştirmek istediğinizde
   * Varsayılan değer: 56px
   */

  // <DataGrid columnGroupHeaderHeight={80} />

  //! columnHeaderHeight
  /**
   * columnHeaderHeight: Sütun başlıklarının yüksekliği.
   * Kullanım amacı: Başlık satırının yüksekliğini ayarlar.
   * Ne zaman kullanılır:
   * - Başlıklarda çok satırlı metin olduğunda
   * - Özel başlık tasarımı yapıldığında
   * Varsayılan değer: 56px
   */

  // <DataGrid columnHeaderHeight={64} />

  //! columnVisibilityModel
  /**
   * columnVisibilityModel: Sütunların görünürlük durumlarını kontrol eder.
   * Kullanım amacı: Hangi sütunların görüneceğini programatik olarak belirlemek.
   * Ne zaman kullanılır:
   * - Dinamik sütun görünürlüğü gerektiğinde
   * - Kullanıcı tercihlerini kaydetmek istediğinizde
   */

  // <DataGrid
  //   columnVisibilityModel={{
  //     id: false,          // ID sütunu gizli
  //     firstName: true,    // İsim sütunu görünür
  //     lastName: true      // Soyisim sütunu görünür
  //   }}
  // />

  //! density
  /**
   * density: Grid satırlarının yüksekliğini belirler.
   * Değerler: 'compact' | 'comfortable' | 'standard'
   * Kullanım amacı: Veri yoğunluğunu ayarlamak
   *
   * compact: En sıkışık görünüm
   * comfortable: Rahat okunabilir görünüm
   * standard: Varsayılan görünüm
   */

  // <DataGrid
  //   density="compact" // Daha fazla veriyi ekranda göstermek için
  // />

  //! disableAutosize
  /**
   * disableAutosize: Otomatik boyutlandırmayı devre dışı bırakır.
   * Kullanım amacı: Performans optimizasyonu
   * Ne zaman kullanılır:
   * - Büyük veri setlerinde
   * - Sütun genişliklerini manuel kontrol etmek istediğinizde
   */

  // <DataGrid
  //   disableAutosize
  //   columnWidths={{ id: 100, name: 150 }}
  // />

  //! disableColumnFilter
  /**
   * disableColumnFilter: Sütun filtreleme özelliğini devre dışı bırakır.
   * Kullanım amacı: Filtreleme özelliğini tamamen kapatmak
   * Ne zaman kullanılır:
   * - Sadece görüntüleme amaçlı gridlerde
   * - Özel filtreleme mekanizması kullanılacaksa
   */

  // <DataGrid disableColumnFilter />

  //! disableColumnMenu
  /**
   * disableColumnMenu: Sütun menüsünü devre dışı bırakır.
   * Kullanım amacı: Sütun başlıklarındaki menü özelliğini kapatmak
   * Ne zaman kullanılır:
   * - Basitleştirilmiş UI gerektiğinde
   * - Kullanıcı etkileşimini sınırlamak istediğinizde
   */

  // <DataGrid disableColumnMenu />

  //! disableColumnResize
  /**
   * disableColumnResize: Sütun genişlik ayarlama özelliğini devre dışı bırakır.
   * Kullanım amacı: Sütun genişliklerini sabit tutmak
   * Ne zaman kullanılır:
   * - Sabit genişlikli tasarımlarda
   * - Kullanıcı müdahalesini engellemek istediğinizde
   */

  // <DataGrid disableColumnResize />

  //! disableColumnSelector
  /**
   * disableColumnSelector: Sütun seçici özelliğini devre dışı bırakır.
   * Kullanım amacı: Sütun görünürlük kontrolünü kapatmak
   * Ne zaman kullanılır:
   * - Tüm sütunların görünür kalması gerektiğinde
   * - Basitleştirilmiş UI gerektiğinde
   */

  // <DataGrid disableColumnSelector />

  //! disableColumnSorting
  /**
   * disableColumnSorting: Sütun sıralama özelliğini devre dışı bırakır.
   * Kullanım amacı: Sıralama özelliğini kapatmak
   * Ne zaman kullanılır:
   * - Verinin mevcut sırasının korunması gerektiğinde
   * - Özel sıralama mekanizması kullanılacaksa
   */

  // <DataGrid disableColumnSorting />

  //! disableDensitySelector
  /**
   * disableDensitySelector: Yoğunluk seçici özelliğini devre dışı bırakır.
   * Kullanım amacı: Yoğunluk ayarı seçeneğini gizlemek
   * Ne zaman kullanılır:
   * - Sabit yoğunluk gerektiğinde
   * - Toolbar'ı basitleştirmek istediğinizde
   */

  // <DataGrid disableDensitySelector />

  //! disableEval
  /**
   * disableEval: eval() fonksiyonunun kullanımını engeller.
   * Kullanım amacı: Güvenlik önlemi
   * Ne zaman kullanılır:
   * - Güvenlik kritik uygulamalarda
   * - XSS saldırılarına karşı koruma gerektiğinde
   */

  // <DataGrid disableEval />

  //! disableMultipleRowSelection
  /**
   * disableMultipleRowSelection: Çoklu satır seçimini devre dışı bırakır.
   * Kullanım amacı: Tek satır seçimine zorlamak
   * Ne zaman kullanılır:
   * - Tek kayıt işlemlerinde
   * - Basit seçim senaryolarında
   */

  // <DataGrid disableMultipleRowSelection />

  //! disableRowSelectionOnClick
  /**
   * disableRowSelectionOnClick: Tıklama ile satır seçimini devre dışı bırakır.
   * Kullanım amacı: Yanlışlıkla seçimleri engellemek
   * Ne zaman kullanılır:
   * - Sadece checkbox ile seçim istendiğinde
   * - Özel seçim mantığı uygulanacaksa
   */

  // <DataGrid disableRowSelectionOnClick />

  //! disableVirtualization
  /**
   * disableVirtualization: Sanallaştırmayı devre dışı bırakır.
   * Kullanım amacı: Tüm satırları DOM'da tutmak
   * Ne zaman kullanılır:
   * - Küçük veri setlerinde
   * - Özel scroll davranışı gerektiğinde
   * DİKKAT: Büyük veri setlerinde performans sorunlarına yol açabilir!
   */

  // <DataGrid disableVirtualization />

  //! editMode
  /**
   * editMode: Grid'in düzenleme modunu belirler.
   * Değerler: 'cell' | 'row'
   *
   * cell: Tek bir hücreyi düzenleme modu
   * row: Tüm satırı düzenleme modu
   *
   * Kullanım amacı: Veri düzenleme davranışını kontrol etmek
   * Ne zaman kullanılır:
   * - Farklı düzenleme senaryoları için
   * - Form benzeri düzenleme gerektiğinde (row mode)
   * - Hızlı düzenleme gerektiğinde (cell mode)
   */

  // Hücre bazlı düzenleme örneği
  // <DataGrid
  // editMode="cell"
  // rows={rows}
  // columns={[
  //   {
  //     field: 'name',
  //     editable: true,
  //     preProcessEditCellProps: (params) => ({
  //       ...params.props,
  //       error: !params.props.value
  //     })
  //   }
  // ]}
  // />

  // Satır bazlı düzenleme örneği
  // <DataGrid
  // editMode="row"
  // rows={rows}
  // columns={columns}
  // onRowEditStart={(params) => {
  //   console.log('Düzenleme başladı:', params);
  // }}
  // onRowEditStop={(params) => {
  //   console.log('Düzenleme bitti:', params);
  // }}
  // />

  //! estimatedRowCount
  /**
   * estimatedRowCount: Tahmini toplam satır sayısı.
   * Kullanım amacı: Sanallaştırma ve kaydırma performansını optimize etmek
   * Ne zaman kullanılır:
   * - Sayfalama ile yüklenen büyük veri setlerinde
   * - Toplam satır sayısı bilinmediğinde
   * - Sonsuz kaydırma senaryolarında
   */

  // Sonsuz kaydırma örneği
  // <DataGrid
  // rows={currentRows}
  // estimatedRowCount={10000} // Tahmini toplam satır
  // onRowsScrollEnd={(params) => {
  //   // Daha fazla veri yükle
  //   loadMoreRows();
  // }}
  // />

  //! experimentalFeatures
  /**
   * experimentalFeatures: Deneysel özellikleri aktifleştirir.
   * Kullanım amacı: Yeni/test aşamasındaki özellikleri kullanmak
   * Ne zaman kullanılır:
   * - Beta özellikleri test etmek için
   * - Yeni özellikleri erken adapte etmek için
   *
   * DİKKAT: Üretim ortamında kullanırken dikkatli olunmalı!
   */

  // Deneysel özellikleri aktifleştirme örneği
  // <DataGrid
  //   experimentalFeatures={{
  //     lazyLoading: true,      // Tembel yükleme
  //     newEditingApi: true,    // Yeni düzenleme API'si
  //     warnIfFocusStateIsNotSynced: true // Odak senkronizasyon uyarıları
  //   }}
  // />

  //! filterDebounceMs
  /**
   * filterDebounceMs: Filtreleme işlemi için bekleme süresi (milisaniye)
   * Kullanım amacı: Filtreleme performansını optimize etmek
   * Ne zaman kullanılır:
   * - Büyük veri setlerinde
   * - Anlık filtreleme yerine gecikmeli filtreleme istendiğinde
   * - Sunucu taraflı filtrelemede gereksiz istekleri önlemek için
   *
   * Varsayılan değer: 150
   */

  // Temel Kullanım
  // <DataGrid
  //    filterDebounceMs={200} // 200ms bekleme süresi
  //    rows={rows}
  //    columns={columns}
  // />

  // Sunucu Taraflı Filtreleme Örneği
  // const ServerSideFilterGrid = () => {
  // const [data, setData] = useState([]);

  // return (
  //   <DataGrid
  //     filterDebounceMs={400} // Sunucu istekleri için daha uzun bekleme
  //     rows={data}
  //     columns={columns}
  //     onFilterModelChange={async (model) => {
  //       // Debounce sayesinde her karakter girişinde değil,
  //       // kullanıcı yazmayı bitirdikten 400ms sonra çağrılır
  //       const filteredData = await fetchFilteredData(model);
  //       setData(filteredData);
  //     }}
  //   />
  // );
  // };

  //! filterMode
  /**
   * filterMode: Filtreleme modunu belirler
   * Değerler: 'client' | 'server'
   *
   * client: Tüm filtreleme işlemleri tarayıcıda yapılır
   * server: Filtreleme işlemleri sunucuda yapılır
   *
   * Kullanım amacı: Filtreleme işleminin nerede yapılacağını belirlemek
   * Ne zaman kullanılır:
   * - Büyük veri setlerinde sunucu taraflı filtreleme için
   * - Küçük veri setlerinde client taraflı hızlı filtreleme için
   */

  // Client Taraflı Filtreleme
  // <DataGrid
  //   filterMode="client"
  //   rows={rows}
  //   columns={columns}
  // />

  // Server Taraflı Filtreleme
  // <DataGrid
  //   filterMode="server"
  //   rows={rows}
  //   columns={columns}
  //   onFilterModelChange={(model) => {
  //     // Sunucudan filtrelenmiş veriyi al
  //     fetchFilteredData(model);
  //   }}
  // />

  //! filterModel
  /**
   * filterModel: Filtreleme durumunu ve kurallarını tanımlar
   * Kullanım amacı: Filtreleme durumunu kontrol etmek ve yönetmek
   * Ne zaman kullanılır:
   * - Varsayılan filtreler uygulamak için
   * - Filtreleme durumunu dışarıdan kontrol etmek için
   * - Karmaşık filtreleme senaryolarında
   */

  // Temel Filtreleme Modeli
  // <DataGrid
  //   filterModel={{
  //     items: [
  //       {
  //         field: 'age',
  //         operator: '>',
  //         value: '18'
  //       },
  //       {
  //         field: 'status',
  //         operator: 'equals',
  //         value: 'active'
  //       }
  //     ],
  //     logicOperator: 'and' // 'and' veya 'or'
  //   }}
  // />

  //! getCellClassName
  /**
   * getCellClassName: Hücrelere dinamik CSS sınıfı atamak için kullanılır
   * Kullanım amacı: Hücreleri duruma göre stillemek
   * Parametre olarak { id, field, value, row } alır
   *
   * Ne zaman kullanılır:
   * - Koşullu hücre stilleme gerektiğinde
   * - Değer bazlı renklendirme yapılacağında
   * - Özel durum gösterimi gerektiğinde
   */

  // const CustomStyledGrid = () => (
  //     <DataGrid
  //       getCellClassName={(params) => {
  //         if (params.field === 'status') {
  //           return params.value === 'error' ? 'cell-error' : 'cell-normal';
  //         }
  //         if (params.value < 0) {
  //           return 'cell-negative';
  //         }
  //         return '';
  //       }}
  //       sx={{
  //         '& .cell-error': {
  //           backgroundColor: '#ffebee',
  //           color: '#d32f2f',
  //         },
  //         '& .cell-negative': {
  //           color: 'red',
  //           fontWeight: 'bold',
  //         }
  //       }}
  //     />
  //   );

  //! getDetailPanelContent
  /**
   * getDetailPanelContent: Satır detay panelinin içeriğini belirler
   * Kullanım amacı: Satıra ait detaylı bilgileri göstermek
   * Parametre olarak { row, rowNode } alır
   *
   * Ne zaman kullanılır:
   * - Master-detail görünümü gerektiğinde
   * - Ek bilgileri göstermek için
   * - Karmaşık veri gösterimi gerektiğinde
   */

  // const DetailedGrid = () => (
  //     <DataGrid
  //       getDetailPanelContent={({ row }) => (
  //         <Box sx={{ p: 2 }}>
  //           <Typography variant="h6">
  //             Details for {row.name}
  //           </Typography>
  //           <Grid container spacing={2}>
  //             <Grid item xs={6}>
  //               <DetailCard data={row.details} />
  //             </Grid>
  //             <Grid item xs={6}>
  //               <ActivityChart data={row.activities} />
  //             </Grid>
  //           </Grid>
  //         </Box>
  //       )}
  //     />
  //   );

  //! getEstimatedRowHeight
  /**
   * getEstimatedRowHeight: Tahmini satır yüksekliğini belirler
   * Kullanım amacı: Sanallaştırma performansını optimize etmek
   *
   * Ne zaman kullanılır:
   * - Dinamik satır yüksekliği olan gridlerde
   * - Performans optimizasyonu gerektiğinde
   */

  // <DataGrid
  //   getEstimatedRowHeight={() => 100}
  //   // Varsayılan değer genellikle 52'dir
  // />

  //! getRowClassName
  /**
   * getRowClassName: Satırlara dinamik CSS sınıfı atamak için kullanılır
   * Kullanım amacı: Satırları duruma göre stillemek
   * Parametre olarak { row, indexRelativeToCurrentPage } alır
   *
   * Ne zaman kullanılır:
   * - Alternatif satır renklendirmesi
   * - Durum bazlı satır vurgulaması
   * - Özel satır stilleri
   */

  // const StripedGrid = () => (
  //     <DataGrid
  //       getRowClassName={(params) =>
  //         params.indexRelativeToCurrentPage % 2 === 0 ? 'even-row' : 'odd-row'
  //       }
  //       sx={{
  //         '& .even-row': {
  //           backgroundColor: '#f5f5f5',
  //         },
  //         '& .odd-row': {
  //           backgroundColor: '#ffffff',
  //         }
  //       }}
  //     />
  //   );

  //! getRowHeight
  /**
   * getRowHeight: Satır yüksekliğini dinamik olarak belirler
   * Kullanım amacı: Satır içeriğine göre yükseklik ayarlamak
   * Parametre olarak { id, model } alır
   *
   * Ne zaman kullanılır:
   * - Çok satırlı içerik gösteriminde
   * - Dinamik içerik yüksekliğinde
   */

  // <DataGrid
  //   getRowHeight={({ id, model }) => {
  //     // Örnek: İçerik uzunluğuna göre yükseklik
  //     const row = model[id];
  //     return row.description.length > 100 ? 100 : 52;
  //   }}
  // />

  //! getRowId
  /**
   * getRowId: Satır ID'sini belirler
   * Kullanım amacı: Özel ID mantığı uygulamak
   *
   * Ne zaman kullanılır:
   * - Standart dışı ID yapısı olan verilerde
   * - Birleşik anahtarlı verilerde
   */

  // <DataGrid
  //   getRowId={(row) => `${row.companyId}-${row.employeeId}`}
  // />

  //! getRowSpacing
  /**
   * getRowSpacing: Satırlar arası boşluğu dinamik olarak belirler
   * Kullanım amacı: Satırlar arası mesafeyi özelleştirmek
   * Parametre olarak { id } alır
   *
   * Ne zaman kullanılır:
   * - Görsel gruplamada
   * - Özel aralık gerektiğinde
   */

  // <DataGrid
  //   getRowSpacing={({ id }) => ({
  //     top: id % 10 === 0 ? 20 : 0, // Her 10 satırda bir fazla boşluk
  //     bottom: 0
  //   })}
  // />

  //! hideFooter
  //! hideFooterPagination
  //! hideFooterSelectedRowCount
  /**
   * hideFooter: Alt bilgi çubuğunu tamamen gizler
   * hideFooterPagination: Sadece sayfalama kontrollerini gizler
   * hideFooterSelectedRowCount: Seçili satır sayısı göstergesini gizler
   *
   * Kullanım amacı: Grid'in alt kısmını özelleştirmek
   * Ne zaman kullanılır:
   * - Minimal görünüm gerektiğinde
   * - Özel kontroller eklenecekse
   * - Sayfalama/seçim bilgisi gerekmediğinde
   */

  // Temel Kullanım
  // const MinimalGrid = () => (
  //     <DataGrid
  //       hideFooter // Tüm alt bilgiyi gizler
  //       rows={rows}
  //       columns={columns}
  //     />
  //   );

  //   // Özel Alt Bilgi
  //   const CustomFooterGrid = () => (
  //     <DataGrid
  //       hideFooterPagination // Sadece sayfalamayı gizler
  //       hideFooterSelectedRowCount // Seçim sayısını gizler
  //       components={{
  //         Footer: CustomFooterComponent
  //       }}
  //     />
  //   );

  //! ignoreDiacritics
  /**
   * ignoreDiacritics: Diakritik işaretleri (é, è, ë vb.) filtreleme ve sıralamada yok sayar
   *
   * Kullanım amacı: Dil bağımsız arama ve sıralama
   * Ne zaman kullanılır:
   * - Çok dilli uygulamalarda
   * - Aksan işaretli karakterlerde sorun yaşandığında
   */

  // <DataGrid
  //   ignoreDiacritics
  //   rows={rows}
  //   columns={columns}
  // />

  //! ignoreValueFormatterDuringExport
  /**
   * ignoreValueFormatterDuringExport: Dışa aktarma sırasında value formatter'ı yok sayar
   *
   * Kullanım amacı: Ham veriyi dışa aktarmak
   * Ne zaman kullanılır:
   * - Excel'e aktarımda orijinal değerler gerektiğinde
   * - Veri işleme senaryolarında
   */

  // <DataGrid
  //   ignoreValueFormatterDuringExport
  //   columns={[
  //     {
  //       field: 'price',
  //       valueFormatter: ({ value }) => `$${value.toFixed(2)}`,
  //     }
  //   ]}
  // />

  //! initialState
  /**
   * initialState: Grid'in başlangıç durumunu belirler
   *
   * Kullanım amacı: Varsayılan grid durumunu ayarlamak
   * Ne zaman kullanılır:
   * - Önceden kaydedilmiş durumu yüklerken
   * - Varsayılan filtreleme/sıralama gerektiğinde
   */

  // <DataGrid
  //   initialState={{
  //     pagination: {
  //       page: 0,
  //       pageSize: 25,
  //     },
  //     sorting: {
  //       sortModel: [{ field: 'name', sort: 'asc' }],
  //     },
  //     filter: {
  //       filterModel: {
  //         items: [{ field: 'status', operator: 'equals', value: 'active' }],
  //       },
  //     },
  //   }}
  // />

  //! isCellEditable
  /**
   * isCellEditable: Hücrenin düzenlenebilir olup olmadığını belirler
   *
   * Kullanım amacı: Koşullu hücre düzenleme kontrolü
   * Ne zaman kullanılır:
   * - Belirli koşullara göre düzenleme izni verilecekse
   * - Rol bazlı düzenleme gerektiğinde
   */

  // <DataGrid
  //   isCellEditable={(params) => {
  //     return params.row.status === 'draft' && userHasEditPermission;
  //   }}
  // />

  //! isRowSelectable
  /**
   * isRowSelectable: Satırın seçilebilir olup olmadığını belirler
   *
   * Kullanım amacı: Koşullu satır seçimi kontrolü
   * Ne zaman kullanılır:
   * - Belirli satırların seçimini engellemek için
   * - Durum bazlı seçim kontrolü gerektiğinde
   */

  // <DataGrid
  //   isRowSelectable={(params) => {
  //     return params.row.status !== 'archived';
  //   }}
  // />

  //! keepNonExistentRowsSelected
  /**
   * keepNonExistentRowsSelected: Var olmayan satırların seçili kalmasını sağlar
   *
   * Kullanım amacı: Sayfalama veya filtreleme sonrası seçimleri korumak
   * Ne zaman kullanılır:
   * - Sayfalama ile veri yüklemede
   * - Filtreleme sonrası seçimleri korumada
   * - Toplu işlem senaryolarında
   */

  // const PaginatedGrid = () => {
  //     const [selectedRows, setSelectedRows] = useState([]);

  //     return (
  //       <DataGrid
  //         keepNonExistentRowsSelected
  //         rows={currentPageRows}
  //         selectionModel={selectedRows}
  //         onSelectionModelChange={(newSelection) => {
  //           setSelectedRows(newSelection);
  //         }}
  //         paginationMode="server"
  //       />
  //     );
  //   };

  //! loading
  /**
   * loading: Grid'in yükleme durumunu belirtir
   *
   * Kullanım amacı: Veri yükleme durumunu göstermek
   * Ne zaman kullanılır:
   * - Asenkron veri yüklemede
   * - API çağrıları sırasında
   * - Uzun süren işlemlerde
   */

  // const AsyncGrid = () => {
  //     const [loading, setLoading] = useState(false);
  //     const [data, setData] = useState([]);

  //     const loadData = async () => {
  //       setLoading(true);
  //       try {
  //         const response = await fetchData();
  //         setData(response.data);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     return (
  //       <DataGrid
  //         loading={loading}
  //         rows={data}
  //         components={{
  //           LoadingOverlay: CustomLoadingOverlay
  //         }}
  //       />
  //     );
  //   };

  //! localeText
  /**
   * localeText: Grid'in metin çevirilerini özelleştirir
   *
   * Kullanım amacı: Dil desteği ve özelleştirilmiş metinler
   * Ne zaman kullanılır:
   * - Çok dilli uygulamalarda
   * - Özel terminoloji gerektiğinde
   * - Marka diline uyum sağlamada
   */

  // const LocalizedGrid = () => {
  //     const translations = {
  //       noRowsLabel: 'Veri bulunamadı',
  //       footerRowSelected: (count) =>
  //         count > 1 ? `${count} satır seçildi` : `${count} satır seçildi`,
  //       filterOperatorContains: 'içerir',
  //       filterOperatorEquals: 'eşittir',
  //       // ... diğer çeviriler
  //     };

  //     return (
  //       <DataGrid
  //         localeText={translations}
  //         rows={rows}
  //         columns={columns}
  //       />
  //     );
  //   };

  //! logger
  //! logLevel
  /**
   * logger: Özel loglama fonksiyonu
   * logLevel: Log seviyesini belirler ('debug' | 'error' | 'warn' | 'info')
   *
   * Kullanım amacı: Grid olaylarını ve hataları izlemek
   * Ne zaman kullanılır:
   * - Hata ayıklamada
   * - Performans izlemede
   * - Kullanıcı davranışlarını takip etmede
   */

  // const MonitoredGrid = () => {
  //     const customLogger = {
  //       debug: (message: string, ...args: any[]) => {
  //         console.debug(`[DataGrid Debug]: ${message}`, ...args);
  //       },
  //       error: (message: string, ...args: any[]) => {
  //         console.error(`[DataGrid Error]: ${message}`, ...args);
  //         // Hata izleme servisine gönder
  //         errorTrackingService.log(message, args);
  //       },
  //       warn: (message: string, ...args: any[]) => {
  //         console.warn(`[DataGrid Warning]: ${message}`, ...args);
  //       },
  //       info: (message: string, ...args: any[]) => {
  //         console.info(`[DataGrid Info]: ${message}`, ...args);
  //       },
  //     };

  //     return (
  //       <DataGrid
  //         logger={customLogger}
  //         logLevel="debug"
  //       />
  //     );
  //   };

  //! nonce
  /**
   * nonce: Content Security Policy (CSP) için nonce değeri
   *
   * Kullanım amacı: Güvenlik politikalarına uyum sağlamak
   * Ne zaman kullanılır:
   * - CSP implementasyonlarında
   * - Güvenlik gereksinimleri olan projelerde
   */

  // const SecureGrid = () => {
  //     const nonce = useNonce(); // CSP nonce değerini al

  //     return (
  //       <DataGrid
  //         nonce={nonce}
  //         // Diğer güvenlik özellikleri...
  //       />
  //     );
  //   };

  //! onCellClick
  /**
   * onCellClick: Hücreye tıklandığında tetiklenir
   * params: { id, field, value, row, colDef, api }
   */
  // const handleCellClick = (params) => {
  //     if (params.field === 'actions') {
  //       showActionMenu(params);
  //     }
  // };

  //! onCellDoubleClick
  /**
   * onCellDoubleClick: Bir hücreye çift tıklandığında tetiklenen event
   *
   * Parametre tipleri:
   * params: GridCellParams = {
   *   id: string | number,      // Satır ID'si
   *   field: string,           // Sütun field adı
   *   row: any,                // Satır verisi
   *   value: any,              // Hücre değeri
   *   formattedValue: any,     // Formatlanmış hücre değeri
   *   api: GridApi,            // Grid API referansı
   *   colDef: GridColDef,      // Sütun tanımı
   *   hasFocus: boolean        // Hücre odaklanma durumu
   * }
   */

  // const BasicDoubleClickExample = () => {
  //   const handleCellDoubleClick = (params: GridCellParams) => {
  //     console.log('Çift tıklanan hücre:', params);
  //     // Hücre düzenleme modunu aç
  //     startEditing(params);
  //   };

  //   return (
  //     <DataGrid
  //       onCellDoubleClick={handleCellDoubleClick}
  //       rows={rows}
  //       columns={columns}
  //     />
  //   );
  // };

  //! onCellEditStart
  //! onCellEditStop
  /**
   * onCellEditStart/onCellEditStop: Hücre düzenleme başlangıç/bitiş
   * Düzenleme durumunu yönetmek için kullanılır
   */

  // const handleCellEditStart = (params) => {
  //   setEditingCell({ id: params.id, field: params.field });
  // };

  // const handleCellEditStop = (params) => {
  //   validateCellEdit(params);
  //   setEditingCell(null);
  // };

  //! onCellKeyDown
  /**
   * onCellKeyDown: Hücrede klavye tuşuna basıldığında tetiklenir
   */

  // const handleCellKeyDown = (params: GridCellParams, event: KeyboardEvent) => {
  //   // Enter tuşu ile düzenleme
  //   if (event.key === 'Enter' && !event.ctrlKey) {
  //     startEditing(params);
  //   }

  //   // Ctrl + Enter ile satır detayı
  //   if (event.key === 'Enter' && event.ctrlKey) {
  //     showRowDetails(params.row);
  //   }

  //   // Delete tuşu ile silme
  //   if (event.key === 'Delete') {
  //     confirmDelete(params.row);
  //   }

  //   // Özel kısayollar
  //   if (event.ctrlKey && event.key === 's') {
  //     event.preventDefault();
  //     saveChanges(params);
  //   }
  // };

  //! onCellModesModelChange
  /**
   * onCellModesModelChange: Hücrelerin düzenleme modları değiştiğinde
   */

  // const handleCellModesChange = (newModel: GridCellModesModel) => {
  //   // Düzenleme durumunu takip et
  //   setEditingCells(newModel);

  //   // Değişiklikleri kaydet
  //   Object.entries(newModel).forEach(([id, fields]) => {
  //     Object.entries(fields).forEach(([field, params]) => {
  //       if (params.mode === 'edit') {
  //         logEditStart({ id, field });
  //       }
  //     });
  //   });
  // };

  //! onClipboardCopy
  /**
   * onClipboardCopy: Veri kopyalandığında tetiklenir
   */

  // const handleClipboardCopy = (params: GridCopyParams) => {
  //   // Kopyalama işlemini logla
  //   logUserAction('dataCopy', {
  //     copiedFields: params.fields,
  //     rowCount: params.rowIds.length
  //   });

  //   // Hassas veri kontrolü
  //   if (containsSensitiveData(params.text)) {
  //     notifySecurityTeam({
  //       action: 'sensitiveDataCopy',
  //       user: currentUser,
  //       data: params
  //     });
  //   }
  // };

  //! onColumnHeaderClick
  /**
   * onColumnHeaderClick: Sütun başlığına tıklandığında
   */

  // const handleColumnHeaderClick = (params: GridColumnHeaderParams) => {
  //   // Özel sıralama mantığı
  //   if (params.field === 'customSort') {
  //     applyCustomSort(params);
  //     return;
  //   }

  //   // Özel filtre menüsü
  //   if (params.field === 'status') {
  //     showCustomFilterMenu(params);
  //   }
  // };

  //! onColumnHeaderContextMenu
  /**
   * onColumnHeaderContextMenu: Sağ tıklama menüsü
   */

  // const handleColumnHeaderContextMenu = (
  //   params: GridColumnHeaderParams,
  //   event: MouseEvent
  // ) => {
  //   event.preventDefault();
  //   showCustomContextMenu({
  //     field: params.field,
  //     x: event.clientX,
  //     y: event.clientY,
  //     actions: [
  //       {
  //         label: 'Sütunu Gizle',
  //         action: () => hideColumn(params.field)
  //       },
  //       {
  //         label: 'Filtreyi Temizle',
  //         action: () => clearFilter(params.field)
  //       }
  //     ]
  //   });
  // };

  //! onColumnHeaderDoubleClick
  /**
   * onColumnHeaderDoubleClick: Çift tıklama
   */

  // const handleColumnHeaderDoubleClick = (params: GridColumnHeaderParams) => {
  //   // Otomatik genişlik ayarı
  //   autoSizeColumn(params.field);
  // };

  //! onColumnHeaderEnter
  /**
   * onColumnHeaderEnter: Fare sütun başlığına girdiğinde
   */

  // const handleColumnHeaderEnter = (params: GridColumnHeaderParams) => {
  //   showColumnTooltip(params);
  // };

  //! onColumnHeaderLeave
  /**
   * onColumnHeaderLeave: Fare sütun başlığından çıktığında
   */

  // const handleColumnHeaderLeave = (params: GridColumnHeaderParams) => {
  //   hideColumnTooltip();
  // };

  //! onColumnHeaderOut
  /**
   * onColumnHeaderOut: Fare sütun başlığından tamamen çıktığında
   */

  // const handleColumnHeaderOut = (params: GridColumnHeaderParams) => {
  //   resetColumnState(params.field);
  // };

  //! onColumnHeaderOver
  /**
   * onColumnHeaderOver: Fare sütun başlığı üzerinde
   */

  // const handleColumnHeaderOver = (params: GridColumnHeaderParams) => {
  //   updateColumnHoverState(params.field);
  // };

  //! onColumnOrderChange
  /**
   * onColumnOrderChange: Sütunların sırası değiştiğinde
   */

  // const handleColumnOrderChange = (params: GridColumnOrderChangeParams) => {
  //   // Yeni sıralamayı kaydet
  //   saveColumnOrder(params.columns);

  //   // Kullanıcı tercihlerini güncelle
  //   updateUserPreferences({
  //     columnOrder: params.columns
  //   });
  // };

  //! onColumnResize
  /**
   * onColumnResize: Sütun genişliği değiştiğinde
   * Kullanıcı tercihleri için önemli
   */

  // const handleColumnResize = (params) => {
  //   saveUserPreferences('columnWidths', {
  //     ...columnWidths,
  //     [params.colDef.field]: params.width
  //   });
  // };

  //! onColumnVisibilityModelChange
  /**
   * onColumnVisibilityModelChange: Sütun görünürlüğü değiştiğinde
   * Kullanıcı tercihleri için önemli
   */

  // const handleColumnVisibility = (newModel) => {
  //   saveUserPreferences('columnVisibility', newModel);
  // };

  //! onColumnWidthChange
  /**
   * onColumnWidthChange: Bir sütunun genişliği değiştiğinde tetiklenir
   *
   * Parametre tipleri:
   * params: GridColumnResizeParams = {
   *   width: number,          // Yeni genişlik
   *   colDef: GridColDef,    // Sütun tanımı
   *   element: HTMLElement,   // Sütun DOM elementi
   *   field: string          // Sütun field adı
   * }
   */

  //   const ColumnWidthExample = () => {
  //   // Sütun genişliklerini state'te tut
  //   const [columnWidths, setColumnWidths] = useState({});

  //   const handleColumnWidthChange = useCallback((params: GridColumnResizeParams) => {
  //     // 1. Genişlik değişikliğini state'e kaydet
  //     setColumnWidths(prev => ({
  //       ...prev,
  //       [params.field]: params.width
  //     }));

  //     // 2. Kullanıcı tercihlerini güncelle
  //     saveUserPreferences('columnWidths', {
  //       ...columnWidths,
  //       [params.field]: params.width
  //     });

  //     // 3. Minimum/Maximum kontrolleri
  //     if (params.width < 50) {
  //       showWarning('Minimum genişlik 50px olmalıdır');
  //     }

  //     // 4. Responsive kontroller
  //     if (window.innerWidth < 768 && params.width > 200) {
  //       showWarning('Mobil görünümde maksimum genişlik 200px\'dir');
  //     }

  //     // 5. Değişikliği logla
  //     logColumnResize({
  //       field: params.field,
  //       oldWidth: columnWidths[params.field],
  //       newWidth: params.width
  //     });
  //   }, [columnWidths]);

  //   return (
  //     <DataGrid
  //       onColumnWidthChange={handleColumnWidthChange}
  //       columns={columns.map(col => ({
  //         ...col,
  //         width: columnWidths[col.field] || col.width
  //       }))}
  //     />
  //   );
  // };

  //! onDensityChange
  /**
   * 2. onDensityChange: Grid'in yoğunluk ayarı değiştiğinde tetiklenir
   *
   * Parametre tipleri:
   * density: 'compact' | 'standard' | 'comfortable'
   */

  //! onFilterModelChange
  /**
   * onFilterModelChange: Filtreleme değiştiğinde
   * Server-side filtering için kritik
   */

  // const handleFilterChange = async (filterModel) => {
  //   setLoading(true);
  //   try {
  //     const filteredData = await fetchFilteredData(filterModel);
  //     setRows(filteredData);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  //! onMenuClose
  /**
   * Sütun menüsü kapandığında tetiklenir
   *
   * Parametre tipleri:
   * params: GridMenuParams = {
   *   field: string,          // Sütun field adı
   *   colDef: GridColDef,    // Sütun tanımı
   *   target: HTMLElement    // Menünün açıldığı element
   * }
   */

  //! onMenuOpen
  /**
   * Sütun menüsü açıldığında tetiklenir
   *
   * Parametre tipleri:
   * params: GridMenuParams = {
   *   field: string,          // Sütun field adı
   *   colDef: GridColDef,    // Sütun tanımı
   *   target: HTMLElement    // Menünün açıldığı element
   * }
   */
  //! onPaginationMetaChange
  /**
   * Sayfalama meta verileri değiştiğinde tetiklenir
   * Parametre tipleri:
   * params: GridPaginationMetaChangeParams = {
   *   page: number,           // Mevcut sayfa
   *   pageSize: number,      // Sayfa başına kayıt
   *   pageCount: number,     // Toplam sayfa sayısı
   *   rowCount: number       // Toplam kayıt sayısı
   * }
   */

  //! onPaginationModelChange
  /**
   * onPaginationModelChange: Sayfalama değiştiğinde
   * Server-side pagination için kritik
   */

  // const handlePaginationChange = async (paginationModel) => {
  //   setLoading(true);
  //   try {
  //     const { data, totalCount } = await fetchPageData(paginationModel);
  //     setRows(data);
  //     setRowCount(totalCount);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  //! onPreferencePanelClose
  /**
   * Tercihler paneli kapandığında tetiklenir
   * Kullanım Amacı:
   * - Değişiklikleri kaydetme
   * - Panel kapanışını izleme
   * - Temizlik işlemleri
   */

  //! onPreferencePanelOpen
  /**
   * Tercihler paneli açıldığında tetiklenir
   * Kullanım Amacı:
   * - Panel açılışını izleme
   * - Kullanıcı etkileşimlerini takip
   * - Panel içeriğini hazırlama
   */

  //! onProcessRowUpdateError
  /**
   * Satır güncelleme işlemi başarısız olduğunda tetiklenir
   * Kullanım Amacı:
   * - Hata yönetimi
   * - Kullanıcı bildirimleri
   * - Hata loglama
   */

  //! onResize
  /**
   * onResize: Grid yeniden boyutlandırıldığında tetiklenir
   * Kullanım Amacı:
   * - Responsive davranış
   * - Performans optimizasyonu
   * - Boyut değişikliklerini izleme
   */

  //! onRowClick
  /**
   * onRowClick: Satıra tıklandığında tetiklenir
   * params: { id, row, field, value, rowNode, colDef, api }
   */

  // const handleRowClick = (params) => {
  //     console.log('Seçilen satır:', params.row);
  //     // Satır detaylarını göster
  //     showRowDetails(params.row);
  // };

  //! onRowCountChange
  /**
   * onRowCountChange: Toplam satır sayısı değiştiğinde tetiklenir
   * Parametre: number (yeni satır sayısı)
   * Kullanım Amacı:
   * - Toplam kayıt sayısını takip etme
   * - Sayfalama bilgilerini güncelleme
   * - UI güncellemeleri yapma
   */

  //! onRowDoubleClick
  /**
   * onRowDoubleClick: Satıra çift tıklandığında tetiklenir
   * Genellikle düzenleme veya detay görünümü için kullanılır
   */

  // const handleRowDoubleClick = (params) => {
  //     openEditDialog(params.row);
  // };

  //! onRowEditStart
  /**
   * Bir satırın düzenleme modu başladığında tetiklenir
   * Parametre tipleri:
   * params: GridRowEditStartParams = {
   *   id: string | number,    // Düzenlenen satırın ID'si
   *   row: GridRowModel       // Satır verisi
   * }
   */

  //! onRowEditStop
  /**
   * Bir satırın düzenleme modu bittiğinde tetiklenir
   * Parametre tipleri:
   * params: GridRowEditStopParams = {
   *   id: string | number,    // Düzenlenen satırın ID'si
   *   row: GridRowModel,      // Satır verisi
   *   hasChanged: boolean     // Değişiklik yapıldı mı?
   * }
   */

  //! onRowModesModelChange
  /**
   * onRowModesModelChange: Satırların düzenleme modları değiştiğinde tetiklenir
   * Parametre tipleri:

   * rowModesModel: GridRowModesModel = {
   *   [id: string]: { mode: GridRowModes }
   * }
   */

  //! onRowSelectionModelChange
  /**
   * onRowSelectionModelChange: Satır seçimi değiştiğinde tetiklenir
   * Çoklu seçim durumlarında önemlidir
   */

  // const handleSelectionChange = (selectionModel) => {
  //     setSelectedRows(selectionModel);
  //     updateBulkActions(selectionModel.length > 0);
  // };

  //! onSortModelChange
  /**
   * onSortModelChange: Sıralama değiştiğinde
   * Server-side sorting için kritik
   */

  // const handleSortChange = async (sortModel) => {
  //   setLoading(true);
  //   try {
  //     const sortedData = await fetchSortedData(sortModel);
  //     setRows(sortedData);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  //! pageSizeOptions
  /**
   * pageSizeOptions: Sayfa başına gösterilecek kayıt sayısı seçenekleri
   * Varsayılan: [25, 50, 100]
   * Kullanım amacı: Kullanıcıya sayfa boyutu seçeneği sunmak
   */

  // const PageSizeExample = () => (
  //   <DataGrid
  //     pageSizeOptions={[10, 20, 50, 100]}
  //     // Özel seçenekler için
  //     components={{
  //       Pagination: CustomPagination
  //     }}
  //   />
  // );

  //! paginationMeta
  /**
   * paginationMeta: Sayfalama meta verilerini içerir
   * Tip:
   * interface GridPaginationMeta {
   *   currentPage: number;
   *   pageSize: number;
   *   pageCount: number;
   *   rowCount: number;
   * }
   */

  // const PaginationMetaExample = () => (
  //   <DataGrid
  //     paginationMeta={{
  //       currentPage: 0,
  //       pageSize: 25,
  //       pageCount: 10,
  //       rowCount: 250
  //     }}
  //     onPaginationMetaChange={(newMeta) => {
  //       console.log('Yeni meta:', newMeta);
  //     }}
  //   />
  // );

  //! paginationMode
  /**
   * paginationMode: 'client' | 'server'
   * Sayfalama işleminin nerede yapılacağını belirler
   *
   * client: Tüm veri yüklenir, sayfalama tarayıcıda yapılır
   * server: Her sayfa için sunucudan veri çekilir
   */

  // const PaginationModeExample = () => (
  //   <DataGrid
  //     paginationMode="server"
  //     onPaginationModelChange={async (model) => {
  //       const data = await fetchPageData(model.page, model.pageSize);
  //       setRows(data);
  //     }}
  //   />
  // );

  //! paginationModel
  /**
   * paginationModel: GridPaginationModel
   * Mevcut sayfalama durumunu belirtir
   *
   * Tip:
   * interface GridPaginationModel {
   *   page: number;
   *   pageSize: number;
   * }
   */

  // const PaginationModelExample = () => {
  //   const [paginationModel, setPaginationModel] = useState({
  //     page: 0,
  //     pageSize: 25
  //   });

  //   return (
  //     <DataGrid
  //       paginationModel={paginationModel}
  //       onPaginationModelChange={setPaginationModel}
  //     />
  //   );
  // };

  //! processRowUpdate
  /**
   * processRowUpdate: (newRow, oldRow) => Promise<any>
   * Satır güncelleme işlemini yönetir
   *
   * Kullanım amacı: Satır güncellemelerini kontrol etmek ve işlemek
   */

  // const ProcessRowUpdateExample = () => {
  //   const processRowUpdate = useCallback(
  //     async (newRow: GridRowModel, oldRow: GridRowModel) => {
  //       try {
  //         // Validasyon
  //         validateRow(newRow);

  //         // API çağrısı
  //         const updatedRow = await api.updateRow(newRow);

  //         // Başarılı güncelleme
  //         showSuccess('Satır güncellendi');
  //         return updatedRow;
  //       } catch (error) {
  //         // Hata durumu
  //         showError(error.message);
  //         return oldRow;
  //       }
  //     },
  //     []
  //   );

  //   return (
  //     <DataGrid
  //       processRowUpdate={processRowUpdate}
  //       onProcessRowUpdateError={(error) => {
  //         console.error('Update error:', error);
  //       }}
  //     />
  //   );
  // };

  //! resetPageOnSortFilter
  /**
   * resetPageOnSortFilter: boolean
   * Sıralama veya filtreleme yapıldığında sayfayı sıfırlar
   *
   * Varsayılan: true
   * Kullanım amacı: Sıralama/filtreleme sonrası sayfa davranışını kontrol etmek
   */

  // const SortFilterExample = () => (
  //   <DataGrid
  //     resetPageOnSortFilter={true}
  //     onSortModelChange={(model) => {
  //       console.log('Sıralama değişti, sayfa sıfırlanacak');
  //     }}
  //   />
  // );

  //! resizeThrottleMs
  /**
   * resizeThrottleMs: number
   * Yeniden boyutlandırma olaylarının throttle süresi (ms)
   *
   * Varsayılan: 60
   * Kullanım amacı: Performans optimizasyonu
   */

  // const ResizeExample = () => (
  //   <DataGrid
  //     resizeThrottleMs={100}
  //     onResize={(params) => {
  //       console.log('Grid yeniden boyutlandırıldı');
  //     }}
  //   />
  // );

  //! rowBufferPx
  /**
   * rowBufferPx: number
   * Görünür alanın üstünde ve altında tamponlanacak piksel miktarı
   *
   * Varsayılan: 150
   * Kullanım amacı: Kaydırma performansını optimize etmek
   */

  // const BufferExample = () => (
  //   <DataGrid
  //     rowBufferPx={200}
  //     rows={largeDataSet}
  //   />
  // );

  //! rowCount
  /**
   * rowCount: number
   * Toplam satır sayısı
   *
   * Kullanım amacı: Server-side pagination için toplam kayıt sayısını belirtmek
   */

  // const RowCountExample = () => (
  //   <DataGrid
  //     rowCount={totalRecords}
  //     paginationMode="server"
  //   />
  // );

  //! rowHeight
  /**
   * rowHeight: number
   * Satır yüksekliği (piksel)
   *
   * Varsayılan: 52
   * Kullanım amacı: Satır yüksekliğini özelleştirmek
   */

  // const RowHeightExample = () => (
  //   <DataGrid
  //     rowHeight={60}
  //     getRowHeight={(params) => {
  //       return params.model.isExpanded ? 120 : 60;
  //     }}
  //   />
  // );

  //! rowModesModel
  /**
   * rowModesModel: GridRowModesModel
   * Satırların düzenleme modlarını kontrol eder
   *
   * Kullanım amacı: Satır düzenleme durumlarını yönetmek
   */

  // const RowModesExample = () => {
  //   const [rowModesModel, setRowModesModel] = useState({});

  //   return (
  //     <DataGrid
  //       rowModesModel={rowModesModel}
  //       onRowModesModelChange={(newModel) => {
  //         setRowModesModel(newModel);
  //       }}
  //     />
  //   );
  // };

  //! rows
  /**
   * rows: GridRowModel[]
   * Grid'de gösterilecek veri satırları
   *
   * Kullanım amacı: Grid verilerini sağlamak
   */

  // const RowsExample = () => (
  //   <DataGrid
  //     rows={[
  //       { id: 1, name: 'John', age: 30 },
  //       { id: 2, name: 'Jane', age: 25 }
  //     ]}
  //   />
  // );

  //! rowSelection
  /**
   * rowSelection: boolean
   * Satır seçimini etkinleştirir/devre dışı bırakır
   *
   * Varsayılan: true
   * Kullanım amacı: Satır seçim özelliğini kontrol etmek
   */

  // const RowSelectionExample = () => (
  //   <DataGrid
  //     rowSelection={true}
  //     checkboxSelection
  //   />
  // );

  //! rowSelectionModel
  /**
   * rowSelectionModel: GridRowSelectionModel
   * Seçili satırların durumunu kontrol eder
   *
   * Kullanım amacı: Seçili satırları yönetmek
   */

  // const RowSelectionModelExample = () => {
  //   const [selectionModel, setSelectionModel] = useState([]);

  //   return (
  //     <DataGrid
  //       rowSelectionModel={selectionModel}
  //       onRowSelectionModelChange={(newSelection) => {
  //         setSelectionModel(newSelection);
  //       }}
  //     />
  //   );
  // };

  //! rowSpacingType
  /**
   * rowSpacingType: 'margin' | 'border'
   * Satır aralığı tipini belirler
   *
   * Kullanım amacı: Satır aralıklarının görsel stilini kontrol etmek
   */

  // const RowSpacingExample = () => (
  //   <DataGrid
  //     rowSpacingType="margin"
  //     getRowSpacing={(params) => ({
  //       top: params.isFirstVisible ? 0 : 5,
  //       bottom: 5,
  //     })}
  //   />
  // );

  //! scrollbarSize
  /**
   * scrollbarSize: number
   * Kaydırma çubuğunun boyutunu piksel cinsinden belirler
   *
   * Varsayılan: Tarayıcı varsayılanı (genellikle 15-17px)
   * Kullanım amacı: Kaydırma çubuğu görünümünü özelleştirmek
   */

  // const ScrollbarExample = () => (
  //   <DataGrid
  //     scrollbarSize={12}
  //     sx={{
  //       '& .MuiDataGrid-scrollbar': {
  //         backgroundColor: '#f5f5f5'
  //       }
  //     }}
  //   />
  // );

  //! showCellVerticalBorder
  /**
   * showCellVerticalBorder: boolean
   * Hücre dikey kenarlıklarını gösterir/gizler
   *
   * Varsayılan: false
   * Kullanım amacı: Grid görünümünü özelleştirmek
   */

  // const CellBorderExample = () => (
  //   <DataGrid
  //     showCellVerticalBorder={true}
  //     sx={{
  //       '& .MuiDataGrid-cell': {
  //         borderColor: '#e0e0e0'
  //       }
  //     }}
  //   />
  // );

  //! showColumnVerticalBorder
  /**
   * showColumnVerticalBorder: boolean
   * Sütun dikey kenarlıklarını gösterir/gizler
   *
   * Varsayılan: false
   * Kullanım amacı: Sütun ayırıcılarını belirginleştirmek
   */

  // const ColumnBorderExample = () => (
  //   <DataGrid
  //     showColumnVerticalBorder={true}
  //     sx={{
  //       '& .MuiDataGrid-columnHeader': {
  //         borderRight: '1px solid #e0e0e0'
  //       }
  //     }}
  //   />
  // );

  //! slotProps
  /**
   * slotProps: object
   * Slot bileşenlerine özel props geçirmek için kullanılır
   *
   * Kullanım amacı: Özel bileşenleri yapılandırmak
   */

  // const SlotPropsExample = () => (
  //   <DataGrid
  //     slotProps={{
  //       toolbar: {
  //         showQuickFilter: true,
  //         quickFilterProps: { debounceMs: 500 }
  //       },
  //       pagination: {
  //         labelRowsPerPage: 'Sayfa başına satır'
  //       }
  //     }}
  //   />
  // );

  //! slots
  /**
   * slots: object
   * Grid bileşenlerini özelleştirmek için kullanılır
   *
   * Kullanım amacı: Varsayılan bileşenleri özel bileşenlerle değiştirmek
   */

  // const SlotsExample = () => (
  //   <DataGrid
  //     slots={{
  //       toolbar: CustomToolbar,
  //       pagination: CustomPagination,
  //       noRowsOverlay: CustomNoRows,
  //       loadingOverlay: CustomLoading
  //     }}
  //   />
  // );

  //! sortingMode
  /**
   * sortingMode: 'client' | 'server'
   * Sıralama işleminin nerede yapılacağını belirler
   *
   * Varsayılan: 'client'
   * Kullanım amacı: Sıralama mantığını kontrol etmek
   */

  // const SortingModeExample = () => (
  //   <DataGrid
  //     sortingMode="server"
  //     onSortModelChange={async (model) => {
  //       const sortedData = await fetchSortedData(model);
  //       setRows(sortedData);
  //     }}
  //   />
  // );

  //! sortingOrder
  /**
   * sortingOrder: Array<'asc' | 'desc'>
   * Sıralama sırasını belirler
   *
   * Varsayılan: ['asc', 'desc']
   * Kullanım amacı: Sıralama davranışını özelleştirmek
   */

  // const SortingOrderExample = () => (
  //   <DataGrid
  //     sortingOrder={['asc', 'desc', null]}
  //     onSortModelChange={(model) => {
  //       console.log('Sıralama değişti:', model);
  //     }}
  //   />
  // );

  //! sortModel
  /**
   * sortModel: GridSortModel
   * Aktif sıralama durumunu belirler
   *
   * Kullanım amacı: Sıralama durumunu kontrol etmek
   */

  // const SortModelExample = () => {
  //   const [sortModel, setSortModel] = useState([
  //     {
  //       field: 'name',
  //       sort: 'asc'
  //     }
  //   ]);

  //   return (
  //     <DataGrid
  //       sortModel={sortModel}
  //       onSortModelChange={setSortModel}
  //     />
  //   );
  // };

  //! sx
  /**
   * sx: SxProps
   * MUI'nin stil sistemi ile özelleştirme yapmak için kullanılır
   *
   * Kullanım amacı: Grid görünümünü özelleştirmek
   */

  // const StyleExample = () => (
  //   <DataGrid
  //     sx={{
  //       '& .MuiDataGrid-root': {
  //         backgroundColor: '#f5f5f5'
  //       },
  //       '& .MuiDataGrid-row:hover': {
  //         backgroundColor: '#e3f2fd'
  //       },
  //       '& .MuiDataGrid-columnHeader': {
  //         backgroundColor: '#1976d2',
  //         color: 'white'
  //       }
  //     }}
  //   />
  // );

  //! unstable_rowSpanning
  /**
   * unstable_rowSpanning: boolean
   * Satır birleştirme özelliğini etkinleştirir
   *
   * Varsayılan: false
   * Kullanım amacı: Satırları dikey olarak birleştirmek
   * NOT: "unstable" prefix'i bu özelliğin deneysel olduğunu gösterir
   */

  // const RowSpanningExample = () => (
  //   <DataGrid
  //     unstable_rowSpanning
  //     rows={rows}
  //     columns={[
  //       {
  //         field: 'department',
  //         headerName: 'Departman',
  //         // Birleştirme mantığını belirle
  //         rowSpan: (params) => {
  //           return params.value === params.getValue(params.id - 1, 'department')
  //             ? 0 // Üstteki hücre ile birleştir
  //             : 2; // 2 satır birleştir
  //         }
  //       },
  //       // Diğer sütunlar...
  //     ]}
  //   />
  // );

  //! virtualizeColumnsWithAutoRowHeight
  /**
   * virtualizeColumnsWithAutoRowHeight: boolean
   * Otomatik satır yüksekliği ile sütun sanallaştırmasını etkinleştirir
   *
   * Varsayılan: false
   * Kullanım amacı: Dinamik yükseklikli satırlarla performansı optimize etmek
   */

  // const VirtualizationExample = () => (
  //   <DataGrid
  //     virtualizeColumnsWithAutoRowHeight
  //     rows={rows}
  //     columns={columns}
  //     getRowHeight={() => 'auto'}
  //   />
  // );
};
