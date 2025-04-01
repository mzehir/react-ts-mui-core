import { DataGridCompColDef } from '../../../base/dataGrid/dataGridHelper';

export const listDataGridPropsPrepareColumn = (column: DataGridCompColDef): DataGridCompColDef => {
  const result: DataGridCompColDef = {
    field: column.field,
    /**
     * Açıklama => Sütunun benzersiz tanımlayıcısı. Satır değerleri ile eşlemek için kullanılır.
     */

    type: column.type,
    /**
     * Açıklama => Sütunun türü.
     */

    display: column.display,
    /**
     * Açıklama => Hücre için görüntüleme modu.
     */

    headerName: column.headerName,
    /**
     * Açıklama => Sütun başlığı hücresinde görüntülenen başlık.
     */

    description: column.description,
    /**
     * Açıklama => Sütun başlığı adı kesildiğinde popoverda gösterilen araç ipucu metni.
     */

    align: column.align,
    /**
     * Açıklama => Hücre içeriğini hizalar.
     */

    headerAlign: column.headerAlign,
    /**
     * Açıklama => Sütun başlığı içeriğini hizalar.
     */

    headerClassName: column.headerClassName,
    /**
     * Açıklama => Sütun başlığı hücresine eklenen sınıf adı.
     */

    cellClassName: column.cellClassName,
    /**
     * Açıklama => Sütundaki hücrelere eklenen sınıf adı.
     */

    flex: column.flex,
    /**
     * Açıklama => Sütunun esnek büyüme faktörü. Pozitif bir sayı olmalıdır.
     */

    width: column.width,
    /**
     * Açıklama => Sütunun piksel cinsinden genişliği.
     */

    minWidth: column.minWidth,
    /**
     * Açıklama => Sütunun piksel cinsinden minimum genişliği.
     */

    maxWidth: column.maxWidth,
    /**
     * Açıklama => Sütunun piksel cinsinden maksimum genişliği.
     */

    hideable: column.hideable,
    /**
     * Açıklama => Eğer `false` ise, bu sütunun gizleme seçeneğini kaldırır.
     */

    sortable: column.sortable,
    /**
     * Açıklama => Eğer `false` ise, bu sütun için sıralamayı devre dışı bırakır.
     */

    resizable: column.resizable,
    /**
     * Açıklama => Eğer `false` ise, bu sütun için yeniden boyutlandırmayı devre dışı bırakır.
     */

    editable: column.editable,
    /**
     * Açıklama => Eğer `true` ise, sütunun hücreleri düzenlenebilir.
     */

    filterable: column.filterable,
    /**
     * Açıklama => Eğer `true` ise, sütun filtrelenebilir.
     */

    hideSortIcons: column.hideSortIcons,
    /**
     * Açıklama => Eğer `true` ise kolon başlığında ki sıralama ikonları gizlenir.
     */

    disableColumnMenu: column.disableColumnMenu,
    /**
     * Açıklama => Eğer `true` ise, sütun menüsü bu sütun için devre dışı bırakılır.
     */

    disableReorder: column.disableReorder,
    /**
     * Açıklama => Eğer `true` ise, bu sütun yeniden sıralanamaz.
     */

    disableExport: column.disableExport,
    /**
     * Açıklama => Eğer `true` ise, bu sütun dışa aktarımlara dahil edilmeyecektir.
     */

    valueGetter: column.valueGetter,
    /**
     * Açıklama => Hücrede görüntülenecek olan değeri değiştirebileceğimiz bir fonksiyondur.
     *
     * valueGetter: (params) => `${params.row.firstName} ${params.row.lastName}`,
     */

    valueSetter: column.valueSetter,
    /**
     * Açıklama => Hücre düzenlendiğinde yeni değerin nasıl kaydedileceğini belirleyen fonksiyondur. Özellikle valueGetter ile oluşturulan alanların düzenlenmesinde kullanılır.
     * 
     valueSetter: (params) => {
      const [firstName, lastName] = params.value.split(' ');
      return { ...params.row, firstName, lastName };
     },
     */

    valueFormatter: column.valueFormatter,
    /**
     * Açıklama => Hücredeki değeri görüntüleme için formatlayan fonksiyondur. Veriyi görüntüleme formatına dönüştürür, ancak orijinal değeri değiştirmez. Sayı, tarih, para birimi gibi özel format gerektiren alanlarda kullanılır.
     */

    valueParser: column.valueParser,
    /**
     * Açıklama => Düzenleme sırasında girilen string değeri uygun tipe dönüştüren fonksiyondur. Kullanıcının girdiği değeri veri modeline uygun formata çevirir. Özellikle valueFormatter ile birlikte kullanılır.
     */

    renderHeader: column.renderHeader,
    /**
     * Açıklama => Kolon başlığının görünümünü özelleştiren fonksiyondur. Örneğin kolon başlığını ikon ile desteklemek istediğimizde kullanılabilir.
     */

    renderCell: column.renderCell,
    /**
     * Açıklama => Hücrenin görünümünü tamamen özelleştirmemizi sağlayan fonksiyondur. renderHeader ile benzer mantıkta çalışır.
     */

    renderEditCell: column.renderEditCell,
    /**
     * Açıklama => Hücre düzenleme modundayken görünümünü özelleştiren fonksiyondur.
     */

    preProcessEditCellProps: column.preProcessEditCellProps,
    /**
     * Açıklama => Hücre düzenleme işlemi sırasında değerin kaydedilmeden önce doğrulanmasını veya işlenmesini sağlayan bir fonksiyondur.
     */

    rowSpanValueGetter: column.rowSpanValueGetter,
    /**
     * Açıklama => Dikey hücre birleştirme için kullanılır. Bir hücrenin kaç satır boyunca uzanacağını belirler.
     */

    colSpan: column.colSpan,
    /**
     * Açıklama => Yatay hücre birleştirme için kullanılır. Bir hücrenin kaç sütun boyunca uzanacağını belirler.
     */

    sortingOrder: column.sortingOrder,
    /**
     * Açıklama => Sıralama düzenini belirleyen dizidir. Sıralama butonuna tıklandığında hangi sırada sıralama yapılacağını belirtir.
     */

    sortComparator: column.sortComparator,
    /**
     * Açıklama => Sıralama mantığını tamamen özelleştirmek için kullanılır.
     */

    getSortComparator: column.getSortComparator,
    /**
     * Açıklama => Sıralama yönüne göre farklı karşılaştırma fonksiyonları döndürür. sortComparator'dan daha gelişmiş kontrol sağlar.
     */

    filterOperators: column.filterOperators,
    /**
     * Açıklama => Sütun için özel filtreleme operatörlerini tanımlar. Varsayılan filtreleme operatörlerini değiştirmek veya yenilerini eklemek için kullanılır.
     */

    getApplyQuickFilterFn: column.getApplyQuickFilterFn,
    /**
     * Açıklama => Hızlı filtreleme (quick filter) mantığını özelleştiren fonksiyondur. DataGrid'in üstündeki genel arama kutusunun davranışını belirler.
     */

    // Custom Ones
    isTranslation: column.isTranslation,
    /**
     * Açıklama => headerName metninin çeviri(i18n) methodunu kullanıp kullanmayacağını belirler. Varsayılan değer `true`.
     */
  };

  return result;
};
