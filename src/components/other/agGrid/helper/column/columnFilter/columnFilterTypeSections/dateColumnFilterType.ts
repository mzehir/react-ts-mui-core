/**
 * true verilirse, tarayıcının yerleşik tarih seçici (browser date picker) bileşeni kullanılır.
 * false ise AG Grid'in kendi tarih bileşeni kullanılır.
 */
type BrowserDatePicker = boolean;

/**
 * `filterParams.buttons` özelliği, filtre kutusunun altında hangi butonların görüneceğini belirler.
 * Geçerli değerler: 'apply', 'clear', 'reset', 'cancel'
 *
 * - `apply`: Filtreyi uygula butonu.
 * - `clear`: Mevcut tüm filtre koşullarını siler.
 * - `reset`: Filtreyi varsayılana döndürür.
 * - `cancel`: Yapılan değişiklikleri iptal eder.
 */
type Buttons = 'apply' | 'clear' | 'reset' | 'cancel';

/**
 * `buttons` içinde `apply` varsa, `apply` butonuna basıldığında filtre popup'ının hemen kapanıp kapanmayacağını belirler.
 * true → Butona tıklanınca popup kapanır
 * false → Popup açık kalır (varsayılan)
 *
 * @default false
 */
type CloseOnApply = boolean;

/**
 * Hücredeki tarih değeri ile filtre tarihini karşılaştırmak için özel fonksiyon.
 * Dönüş değeri: 0 (eşit), < 0 (küçük), > 0 (büyük)
 *
 * Örn: (filterDate, cellValue) => filterDate.getTime() - new Date(cellValue).getTime()
 */
type Comparator = (filterLocalDateAtMidnight: Date, cellValue: unknown) => number;

/**
 * Kullanıcının tarih girdikten sonra filtrelemenin ne kadar gecikmeyle yapılacağını belirler (ms).
 *
 * @default 0
 */
type DebounceMs = number;

/**
 * Çoklu filtre koşullarının varsayılan bağlama şekli.
 * 'AND' → tüm koşullar sağlanmalı
 * 'OR' → herhangi biri yeterli
 *
 * @default 'AND'
 */
type DefaultJoinOperator = 'AND' | 'OR';

/**
 * Filtre popup'ı açıldığında seçili olacak varsayılan filtre tipi.
 * Örn: 'equals', 'greaterThan', 'inRange'
 */
type DefaultOption = 'equals' | 'notEqual' | 'lessThan' | 'greaterThan' | 'inRange' | 'blank' | 'notBlank';

/**
 * Kullanıcının seçebileceği filtre türleri listesi.
 * 'equals', 'notEqual', 'greaterThan', 'inRange', vb.
 */
export type FilterOptions = 'equals' | 'notEqual' | 'lessThan' | 'greaterThan' | 'inRange' | 'blank' | 'notBlank';

/**
 * Tarih filtresi için input kutusunun placeholder (örnek metin) değeri.
 */
type FilterPlaceholder = unknown | string;

/**
 * Floating filter üzerinde 'inRange' seçildiğinde, tarihlerin nasıl formatlanacağını belirler.
 * Örn: 'DD.MM.YYYY', 'YYYY-MM-DD'
 *
 * @default 'YYYY-MM-DD'
 */
type InRangeFloatingFilterDateFormat = string;

/**
 * 'inRange' filtresinde başlangıç ve bitiş tarihinin aralığa dahil olup olmadığını belirler.
 * true → dahil
 */
type InRangeInclusive = boolean;

/**
 * 'equals' filtresinde, boş (null) hücrelerin de filtreye dahil edilip edilmeyeceğini belirler.
 */
type IncludeBlanksInEquals = boolean;

/**
 * 'greaterThan' filtresinde boş (null) değerlerin dahil edilip edilmeyeceğini belirtir.
 */
type IncludeBlanksInGreaterThan = boolean;

/**
 * 'lessThan' filtresinde boş (null) değerlerin dahil edilip edilmeyeceğini belirtir.
 */
type IncludeBlanksInLessThan = boolean;

/**
 * 'notEqual' filtresinde boş (null) değerlerin dahil edilip edilmeyeceğini belirtir.
 */
type IncludeBlanksInNotEqual = boolean;

/**
 * 'inRange' filtresinde boş (null) değerlerin dahil edilip edilmeyeceğini belirtir.
 */
type IncludeBlanksInRange = boolean;

/**
 * Hücredeki değerin geçerli bir tarih olup olmadığını kontrol eden özel fonksiyon.
 * true → geçerli tarih
 */
type IsValidDate = (value: unknown) => boolean;

/**
 * Kullanıcının aynı anda tanımlayabileceği maksimum koşul sayısı.
 * Örn: 2 → equals ve greaterThan gibi iki filtre uygulanabilir.
 *
 * @default 2
 */
type MaxNumConditions = number;

/**
 * Filtrede girilebilecek maksimum tarih değeri.
 * Örn: '2099-12-31' gibi
 */
type MaxValidDate = Date | string;

/**
 * Girilebilecek maksimum yıl değeri.
 * Örn: 2099
 */
type MaxValidYear = number;

/**
 * Filtrede girilebilecek minimum tarih değeri.
 * Örn: '1900-01-01'
 */
type MinValidDate = Date | string;

/**
 * Girilebilecek minimum yıl değeri.
 *
 * @default 1000
 */
type MinValidYear = number;

/**
 * Filtre popup'ı ilk açıldığında kaç koşul görünür olacak?
 * Geri kalanı sonradan kullanıcı tarafından eklenir.
 *
 * @default 1
 */
type NumAlwaysVisibleConditions = number;

/**
 * true verilirse filtre sadece okunabilir olur, kullanıcı müdahale edemez.
 * Genelde programatik kontrol senaryolarında kullanılır.
 *
 * @default false
 */
type ReadOnly = boolean;

interface InitialFilterFieldsType {
  dateFrom: string; // Start value => examp => 1990-02-14 00:00:00
  dateTo?: string; // End value => examp => 1997-12-31 00:00:00
}

export interface DateColumnFilterParams {
  browserDatePicker?: BrowserDatePicker;
  buttons?: Buttons[];
  closeOnApply?: CloseOnApply;
  comparator?: Comparator;
  debounceMs?: DebounceMs;
  defaultJoinOperator?: DefaultJoinOperator;
  defaultOption: DefaultOption;
  filterOptions?: FilterOptions[];
  filterPlaceholder?: FilterPlaceholder;
  inRangeFloatingFilterDateFormat?: InRangeFloatingFilterDateFormat;
  inRangeInclusive?: InRangeInclusive;
  includeBlanksInEquals?: IncludeBlanksInEquals;
  includeBlanksInGreaterThan?: IncludeBlanksInGreaterThan;
  includeBlanksInLessThan?: IncludeBlanksInLessThan;
  includeBlanksInNotEqual?: IncludeBlanksInNotEqual;
  includeBlanksInRange?: IncludeBlanksInRange;
  isValidDate?: IsValidDate;
  maxNumConditions?: MaxNumConditions;
  maxValidDate?: MaxValidDate;
  maxValidYear?: MaxValidYear;
  minValidDate?: MinValidDate;
  minValidYear?: MinValidYear;
  numAlwaysVisibleConditions?: NumAlwaysVisibleConditions;
  readOnly?: ReadOnly;
  // extra props
  initialFilterFields?: InitialFilterFieldsType;
}
