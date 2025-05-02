/**
 * true verilirse, tarayıcının yerleşik tarih seçici (browser date picker) bileşeni kullanılır.
 * false ise AG Grid'in kendi tarih bileşeni kullanılır.
 */
type BrowserDatePickerAgDateColumnFilter = boolean;

/**
 * `filterParams.buttons` özelliği, filtre kutusunun altında hangi butonların görüneceğini belirler.
 * Geçerli değerler: 'apply', 'clear', 'reset', 'cancel'
 *
 * - `apply`: Filtreyi uygula butonu.
 * - `clear`: Mevcut tüm filtre koşullarını siler.
 * - `reset`: Filtreyi varsayılana döndürür.
 * - `cancel`: Yapılan değişiklikleri iptal eder.
 */
type ButtonsAgDateColumnFilter = 'apply' | 'clear' | 'reset' | 'cancel';

/**
 * `buttons` içinde `apply` varsa, `apply` butonuna basıldığında filtre popup'ının hemen kapanıp kapanmayacağını belirler.
 * true → Butona tıklanınca popup kapanır
 * false → Popup açık kalır (varsayılan)
 *
 * @default false
 */
type CloseOnApplyAgDateColumnFilter = boolean;

/**
 * Hücredeki tarih değeri ile filtre tarihini karşılaştırmak için özel fonksiyon.
 * Dönüş değeri: 0 (eşit), < 0 (küçük), > 0 (büyük)
 *
 * Örn: (filterDate, cellValue) => filterDate.getTime() - new Date(cellValue).getTime()
 */
type ComparatorAgDateColumnFilter = (filterLocalDateAtMidnight: Date, cellValue: unknown) => number;

/**
 * Kullanıcının tarih girdikten sonra filtrelemenin ne kadar gecikmeyle yapılacağını belirler (ms).
 *
 * @default 0
 */
type DebounceMsAgDateColumnFilter = number;

/**
 * Çoklu filtre koşullarının varsayılan bağlama şekli.
 * 'AND' → tüm koşullar sağlanmalı
 * 'OR' → herhangi biri yeterli
 *
 * @default 'AND'
 */
type DefaultJoinOperatorAgDateColumnFilter = 'AND' | 'OR';

/**
 * Filtre popup'ı açıldığında seçili olacak varsayılan filtre tipi.
 * Örn: 'equals', 'greaterThan', 'inRange'
 */
type DefaultOptionAgDateColumnFilter =
  | 'equals'
  | 'notEqual'
  | 'lessThan'
  | 'greaterThan'
  | 'inRange'
  | 'blank'
  | 'notBlank';

/**
 * Kullanıcının seçebileceği filtre türleri listesi.
 * 'equals', 'notEqual', 'greaterThan', 'inRange', vb.
 */
type FilterOptionsAgDateColumnFilter =
  | 'equals'
  | 'notEqual'
  | 'lessThan'
  | 'greaterThan'
  | 'inRange'
  | 'blank'
  | 'notBlank';

/**
 * Tarih filtresi için input kutusunun placeholder (örnek metin) değeri.
 */
type FilterPlaceholderAgDateColumnFilter = unknown | string;

/**
 * Floating filter üzerinde 'inRange' seçildiğinde, tarihlerin nasıl formatlanacağını belirler.
 * Örn: 'DD.MM.YYYY', 'YYYY-MM-DD'
 *
 * @default 'YYYY-MM-DD'
 */
type InRangeFloatingFilterDateFormatAgDateColumnFilter = string;

/**
 * 'inRange' filtresinde başlangıç ve bitiş tarihinin aralığa dahil olup olmadığını belirler.
 * true → dahil
 */
type InRangeInclusiveAgDateColumnFilter = boolean;

/**
 * 'equals' filtresinde, boş (null) hücrelerin de filtreye dahil edilip edilmeyeceğini belirler.
 */
type IncludeBlanksInEqualsAgDateColumnFilter = boolean;

/**
 * 'greaterThan' filtresinde boş (null) değerlerin dahil edilip edilmeyeceğini belirtir.
 */
type IncludeBlanksInGreaterThanAgDateColumnFilter = boolean;

/**
 * 'lessThan' filtresinde boş (null) değerlerin dahil edilip edilmeyeceğini belirtir.
 */
type IncludeBlanksInLessThanAgDateColumnFilter = boolean;

/**
 * 'notEqual' filtresinde boş (null) değerlerin dahil edilip edilmeyeceğini belirtir.
 */
type IncludeBlanksInNotEqualAgDateColumnFilter = boolean;

/**
 * 'inRange' filtresinde boş (null) değerlerin dahil edilip edilmeyeceğini belirtir.
 */
type IncludeBlanksInRangeAgDateColumnFilter = boolean;

/**
 * Hücredeki değerin geçerli bir tarih olup olmadığını kontrol eden özel fonksiyon.
 * true → geçerli tarih
 */
type IsValidDateAgDateColumnFilter = (value: unknown) => boolean;

/**
 * Kullanıcının aynı anda tanımlayabileceği maksimum koşul sayısı.
 * Örn: 2 → equals ve greaterThan gibi iki filtre uygulanabilir.
 *
 * @default 2
 */
type MaxNumConditionsAgDateColumnFilter = number;

/**
 * Filtrede girilebilecek maksimum tarih değeri.
 * Örn: '2099-12-31' gibi
 */
type MaxValidDateAgDateColumnFilter = Date | string;

/**
 * Girilebilecek maksimum yıl değeri.
 * Örn: 2099
 */
type MaxValidYearAgDateColumnFilter = number;

/**
 * Filtrede girilebilecek minimum tarih değeri.
 * Örn: '1900-01-01'
 */
type MinValidDateAgDateColumnFilter = Date | string;

/**
 * Girilebilecek minimum yıl değeri.
 *
 * @default 1000
 */
type MinValidYearAgDateColumnFilter = number;

/**
 * Filtre popup'ı ilk açıldığında kaç koşul görünür olacak?
 * Geri kalanı sonradan kullanıcı tarafından eklenir.
 *
 * @default 1
 */
type NumAlwaysVisibleConditionsAgDateColumnFilter = number;

/**
 * true verilirse filtre sadece okunabilir olur, kullanıcı müdahale edemez.
 * Genelde programatik kontrol senaryolarında kullanılır.
 *
 * @default false
 */
type ReadOnlyAgDateColumnFilter = boolean;

export interface DateColumnFilterParams {
  browserDatePicker?: BrowserDatePickerAgDateColumnFilter;
  buttons?: ButtonsAgDateColumnFilter[];
  closeOnApply?: CloseOnApplyAgDateColumnFilter;
  comparator?: ComparatorAgDateColumnFilter;
  debounceMs?: DebounceMsAgDateColumnFilter;
  defaultJoinOperator?: DefaultJoinOperatorAgDateColumnFilter;
  defaultOption: DefaultOptionAgDateColumnFilter;
  filterOptions?: FilterOptionsAgDateColumnFilter[];
  filterPlaceholder?: FilterPlaceholderAgDateColumnFilter;
  inRangeFloatingFilterDateFormat?: InRangeFloatingFilterDateFormatAgDateColumnFilter;
  inRangeInclusive?: InRangeInclusiveAgDateColumnFilter;
  includeBlanksInEquals?: IncludeBlanksInEqualsAgDateColumnFilter;
  includeBlanksInGreaterThan?: IncludeBlanksInGreaterThanAgDateColumnFilter;
  includeBlanksInLessThan?: IncludeBlanksInLessThanAgDateColumnFilter;
  includeBlanksInNotEqual?: IncludeBlanksInNotEqualAgDateColumnFilter;
  includeBlanksInRange?: IncludeBlanksInRangeAgDateColumnFilter;
  isValidDate?: IsValidDateAgDateColumnFilter;
  maxNumConditions?: MaxNumConditionsAgDateColumnFilter;
  maxValidDate?: MaxValidDateAgDateColumnFilter;
  maxValidYear?: MaxValidYearAgDateColumnFilter;
  minValidDate?: MinValidDateAgDateColumnFilter;
  minValidYear?: MinValidYearAgDateColumnFilter;
  numAlwaysVisibleConditions?: NumAlwaysVisibleConditionsAgDateColumnFilter;
  readOnly?: ReadOnlyAgDateColumnFilter;
  // extra props
  initialFilterValue?: string;
}
