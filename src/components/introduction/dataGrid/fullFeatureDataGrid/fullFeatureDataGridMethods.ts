import { GridColDef } from '@mui/x-data-grid';
import { FullFeatureDataGridBaseRow } from './fullFeatureDataGridTypes';

export const fullFeatureDataGridPropsprepareColumn = <R extends FullFeatureDataGridBaseRow>(
  column: GridColDef<R>,
): GridColDef<R> => {
  const result: GridColDef = {
    field: column.field, // Sütunun benzersiz tanımlayıcısı. Satır değerleri ile eşlemek için kullanılır.
    type: column.type, // Veri Tipi. Varsayılan değer 'string' => 'string' || 'number' || 'date' || 'dateTime' || 'boolean' || 'singleSelect' || 'actions' || 'custom'
    display: column.display, // Hücre için görüntüleme modu. Varsayılan değer 'text'. => 'text' || 'flex'

    headerName: column.headerName, // Sütun başlığı hücresinde görüntülenen başlık.
    description: column.description, // Sütun başlığı adı kesildiğinde gösterilen araç ipucu metni.
    align: column.align, // Hücre içeriğini hizalar. 'left' || 'right' || 'center'
    headerAlign: column.headerAlign, // Sütun başlığı içeriğini hizalar. 'left' || 'right' || 'center'

    headerClassName: column.headerClassName, // Sütun başlığı hücresine eklenen sınıf adı.
    cellClassName: column.cellClassName, // Bu sütundaki hücrelere eklenen sınıf adı.

    flex: column.flex, // Sütunun esnek büyüme faktörü. Pozitif bir sayı olmalıdır.
    width: column.width, // Sütunun piksel cinsinden genişliği. Varsayılan değer 100.
    minWidth: column.minWidth, // Sütunun piksel cinsinden minimum genişliği. Varsayılan değer 50.
    maxWidth: column.maxWidth, // Sütunun piksel cinsinden maksimum genişliği. Varsayılan değer sonsuz.

    hideable: column.hideable, // Eğer `false` ise, bu sütunu gizleme seçeneğini kaldırır. Varsayılan değer `true`.
    sortable: column.sortable, // Eğer `false` ise, bu sütun için sıralamayı devre dışı bırakır. Varsayılan değer `true`.
    resizable: column.resizable, // Eğer `false` ise, bu sütun için yeniden boyutlandırmayı devre dışı bırakır. Varsayılan değer `true`.
    editable: column.editable, // Eğer `true` ise, sütunun hücreleri düzenlenebilir. Varsayılan değer `false`.
    filterable: column.filterable, // Eğer `true` ise, sütun filtrelenebilir. Varsayılan değer `false`.

    hideSortIcons: column.hideSortIcons, // Eğer `true` ise kolon başlığında ki sıralama ikonları gizlenir. Varsayılan değer `false`.
    disableColumnMenu: column.disableColumnMenu, // Eğer `true` ise, sütun menüsü bu sütun için devre dışı bırakılır. Varsayılan değer `false`.
    disableReorder: column.disableReorder, // Eğer `true` ise, bu sütun yeniden sıralanamaz. Varsayılan değer `false`.
    disableExport: column.disableExport, // Eğer `true` ise, bu sütun dışa aktarımlara dahil edilmeyecektir. Varsayılan değer `false`.

    valueGetter: column.valueGetter,
    // Hücrede görüntülenecek olan değeri değiştirebileceğimiz bir fonksiyondur. Örneğin =>
    //! valueGetter: (params) => `${params.row.firstName} ${params.row.lastName}`,

    valueSetter: column.valueSetter,
    // Hücre düzenlendiğinde yeni değerin nasıl kaydedileceğini belirleyen fonksiyondur.
    // Özellikle valueGetter ile oluşturulan alanların düzenlenmesinde kullanılır. Örneğin =>
    //! valueSetter: (params) => {
    //!   const [firstName, lastName] = params.value.split(' ');
    //!   return { ...params.row, firstName, lastName };
    //! },

    valueFormatter: column.valueFormatter,
    // Hücredeki değeri görüntüleme için formatlayan fonksiyondur.
    // Veriyi görüntüleme formatına dönüştürür, ancak orijinal değeri değiştirmez.
    // Sayı, tarih, para birimi gibi özel format gerektiren alanlarda kullanılır. Örneğin =>
    //! valueFormatter: (params) => {
    //!   return new Intl.NumberFormat('tr-TR', {
    //!     style: 'currency',
    //!     currency: 'TRY',
    //!   }).format(params.value);
    //! },

    valueParser: column.valueParser,
    // Düzenleme sırasında girilen string değeri uygun tipe dönüştüren fonksiyondur.
    // Kullanıcının girdiği değeri veri modeline uygun formata çevirir.
    // Özellikle valueFormatter ile birlikte kullanılır. Örneğin =>
    //! valueParser: (value) => {
    //!   // Örnek: Para birimi formatından sayıya çevirme
    //!   return Number(value.replace(/[^0-9.-]+/g, ''));
    //! },

    renderHeader: column.renderHeader,
    // Kolon başlığının görünümünü özelleştiren fonksiyondur. Örneğin =>
    //! renderHeader: (params) => {
    //!   // Örnek: İkonlu başlık
    //!   return (
    //!     <div>
    //!       <AccountCircleIcon />
    //!       <span>{params.colDef.headerName}</span>
    //!     </div>
    //!   );
    //! },

    renderCell: column.renderCell,
    // Hücrenin görünümünü tamamen özelleştirmemizi sağlayan fonksiyondur. Örneğin =>
    //! renderCell: (params) => {
    //!   // Örnek: Durum göstergesi
    //!   return <div style={{ backgroundColor: params.value === 'active' ? 'green' : 'red' }}>{params.value}</div>;
    //! },

    renderEditCell: column.renderEditCell,
    // Hücre düzenleme modundayken görünümünü özelleştiren fonksiyondur. Örneğin =>
    //! renderEditCell: (params) => {
    //!   // Örnek: Özel select input
    //!   return (
    //!     <Select
    //!       value={params.value}
    //!       onChange={(e) =>
    //!         params.api.setEditCellValue({
    //!           id: params.id,
    //!           field: params.field,
    //!           value: e.target.value,
    //!         })
    //!       }
    //!     >
    //!       <MenuItem value="active">Aktif</MenuItem>
    //!       <MenuItem value="passive">Pasif</MenuItem>
    //!     </Select>
    //!   );
    //! },

    preProcessEditCellProps: column.preProcessEditCellProps,
    // Hücre düzenleme işlemi sırasında değerin kaydedilmeden önce doğrulanmasını veya işlenmesini sağlayan bir fonksiyondur.  Örneğin =>
    //! {
    //!   field: 'age',
    //!   headerName: 'Yaş',
    //!   type: 'number',
    //!   editable: true,
    //!   preProcessEditCellProps: (params) => {
    //!     // Gelen değeri doğrulama
    //!     const isValid = params.props.value >= 0 && params.props.value <= 150;
    //!
    //!     // Doğrulama sonucunu ve değeri döndürme
    //!     return {
    //!       ...params.props,
    //!       error: !isValid // error true ise hücre kırmızı renkte görünür
    //!     };
    //!   }
    //! }

    rowSpanValueGetter: column.rowSpanValueGetter,
    // Dikey hücre birleştirme için kullanılır.
    // Bir hücrenin kaç satır boyunca uzanacağını belirler.
    // Aynı değere sahip ardışık hücreleri birleştirir.
    //! rowSpanValueGetter: (params) => {
    //!   // Örnek 1: Aynı soyadına sahip ardışık satırları birleştirme
    //!   return {
    //!     value: params.row.lastName, // Birleştirme için kontrol edilecek değer
    //!     span: 2, // Kaç satır birleştirilecek
    //!   };
    //! },

    colSpan: column.colSpan,
    // Yatay hücre birleştirme için kullanılır.
    // Bir hücrenin kaç sütun boyunca uzanacağını belirler.
    //! {
    //!   field: 'status',
    //!   headerName: 'Durum',
    //!   colSpan: (params) => {
    //!     // 'urgent' durumunda 2 sütun genişliğinde göster
    //!     return params.value === 'urgent' ? 2 : 1;
    //!   }
    //! }

    sortingOrder: column.sortingOrder,
    // Sıralama düzenini belirleyen dizidir.
    // Sıralama butonuna tıklandığında hangi sırada sıralama yapılacağını belirtir.
    // Varsayılan değer: ['asc', 'desc', null] (artan, azalan, sıralama yok)
    //! sortingOrder: ['desc', 'asc']  // Önce azalan sonra artan sıralama

    sortComparator: column.sortComparator,
    // Sıralama mantığını tamamen özelleştirmek için kullanılır.
    //! sortComparator: (v1, v2, cellParams1, cellParams2) => {
    //!   //! Örnek 1: Tarihleri özel formatta sıralama
    //!   return new Date(v1).getTime() - new Date(v2).getTime();
    //!
    //!   //! Örnek 2: Metinleri özel kurala göre sıralama
    //!   if (v1.startsWith('A') && !v2.startsWith('A')) return -1;
    //!   if (!v1.startsWith('A') && v2.startsWith('A')) return 1;
    //!   return v1.localeCompare(v2);
    //!
    //!   //! Örnek 3: Null değerleri en sona alma
    //!   if (v1 === null) return 1;
    //!   if (v2 === null) return -1;
    //!   return v1 - v2;
    //! },

    getSortComparator: column.getSortComparator,
    // Sıralama yönüne göre farklı karşılaştırma fonksiyonları döndürür.
    // sortComparator'dan daha gelişmiş kontrol sağlar.
    //! getSortComparator: (sortItem) => (v1, v2, cellParams1, cellParams2) => {
    //!   //! Örnek 1: Sıralama yönüne göre farklı davranış
    //!   if (sortItem.sort === 'asc') {
    //!     return v1.length - v2.length; // Artan sıralamada uzunluğa göre
    //!   } else {
    //!     return v2.localeCompare(v1); // Azalan sıralamada metne göre
    //!   }
    //!
    //!   //! Örnek 2: Özel sıralama mantığı
    //!   const priority = { High: 3, Medium: 2, Low: 1 };
    //!   return (priority[v1] || 0) - (priority[v2] || 0);
    //! },

    filterOperators: column.filterOperators,
    // Sütun için özel filtreleme operatörlerini tanımlar.
    // Varsayılan filtreleme operatörlerini değiştirmek veya yenilerini eklemek için kullanılır.
    //! filterOperators: [
    //!   {
    //!     label: 'Eşittir',
    //!     value: 'equals',
    //!     getApplyFilterFn: (filterItem) => {
    //!       return (params) => {
    //!         return params.value === filterItem.value;
    //!       };
    //!     },
    //!   },
    //!   {
    //!     label: 'İçerir',
    //!     value: 'contains',
    //!     getApplyFilterFn: (filterItem) => {
    //!       return (params) => {
    //!         return params.value.toLowerCase().includes(filterItem.value.toLowerCase());
    //!       };
    //!     },
    //!   },
    //! ],

    getApplyQuickFilterFn: column.getApplyQuickFilterFn,
    // Hızlı filtreleme (quick filter) mantığını özelleştiren fonksiyondur.
    // DataGrid'in üstündeki genel arama kutusunun davranışını belirler.
    //! getApplyQuickFilterFn: (value) => {
    //!   return (params) => {
    //!     // Örnek: Büyük/küçük harf duyarsız arama
    //!     return String(params.value).toLowerCase().includes(value.toLowerCase());
    //!
    //!     // veya özel filtreleme mantığı
    //!     return someCustomFilterLogic(params.value, value);
    //!   };
    //! }
  };

  return result;
};
