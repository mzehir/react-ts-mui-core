/**
 * Giriş kutusuna sadece belirli karakterlerin girilmesine izin verir.
 * Örn: '\\d\\.' ifadesi, sadece sayılar ve nokta karakterine izin verir.
 */
type AllowedCharPatternAgNumberColumnFilter = string;

/**
 * `filterParams.buttons` özelliği, filtre kutusunun altında hangi butonların görüneceğini belirler.
 * Geçerli değerler: 'apply', 'clear', 'reset', 'cancel'
 *
 * - `apply`: Filtreyi uygula butonu.
 * - `clear`: Mevcut tüm filtre koşullarını siler.
 * - `reset`: Filtreyi varsayılana döndürür.
 * - `cancel`: Yapılan değişiklikleri iptal eder.
 */
type ButtonsAgNumberColumnFilter = 'apply' | 'clear' | 'reset' | 'cancel';

/**
 * `buttons` içinde `apply` varsa, `apply` butonuna basıldığında filtre popup'ının hemen kapanıp kapanmayacağını belirler.
 * true → Butona tıklanınca popup kapanır
 * false → Popup açık kalır (varsayılan)
 *
 * @default false
 */
type CloseOnApplyAgNumberColumnFilter = boolean;

/**
 * Kullanıcı yazı yazarken filtrelemenin ne kadar gecikmeyle (ms cinsinden) uygulanacağını belirler.
 * Varsayılan: 500ms
 *
 * @default 500
 */
type DebounceMsAgNumberColumnFilter = number;

/**
 * Çoklu filtre koşullarında, koşulların AND mi yoksa OR ile mi bağlanacağını belirler.
 * 'AND' → tüm koşullar sağlanmalı
 * 'OR' → herhangi biri sağlanmalı
 *
 * @default 'AND'
 */
type DefaultJoinOperatorAgNumberColumnFilter = 'AND' | 'OR';

/**
 * Filtre popup'ı açıldığında varsayılan olarak hangi filtre türü seçili olacak?
 * Örn: 'equals', 'lessThan', vs.
 */
type DefaultOptionAgNumberColumnFilter = string;

/**
 * Kullanıcının seçim yapabileceği filtre türlerinin listesi.
 * Örn: sadece 'lessThan' ve 'greaterThanOrEqual' sunmak istiyorsan burada belirtirsin.
 */
type FilterOptionsAgNumberColumnFilter =
  | 'equals'
  | 'notEqual'
  | 'lessThan'
  | 'lessThanOrEqual'
  | 'greaterThan'
  | 'greaterThanOrEqual'
  | 'inRange'
  | 'blank'
  | 'notBlank';

/**
 * Filtre giriş kutusunun placeholder (örnek) yazısı.
 * Örn: "Tutar giriniz"
 */
type FilterPlaceholderAgNumberColumnFilter = unknown | string;

/**
 * 'inRange' filtresinde aralık uç değerlerinin dahil olup olmadığını belirler.
 * true → min ve max dahil
 */
type InRangeInclusiveAgNumberColumnFilter = boolean;

/**
 * 'equals' filtresinde hücre değeri boşsa, yine de filtreye dahil edilip edilmeyeceğini belirler.
 */
type IncludeBlanksInEqualsAgNumberColumnFilter = boolean;

/**
 * 'greaterThan' filtresinde boş (null) değerlerin dahil edilip edilmeyeceği.
 */
type IncludeBlanksInGreaterThanAgNumberColumnFilter = boolean;

/**
 * 'lessThan' filtresinde boş (null) değerlerin dahil edilip edilmeyeceği.
 */
type IncludeBlanksInLessThanAgNumberColumnFilter = boolean;

/**
 * 'notEqual' filtresinde boş (null) değerlerin dahil edilip edilmeyeceği.
 */
type IncludeBlanksInNotEqualAgNumberColumnFilter = boolean;

/**
 * 'inRange' filtresinde boş (null) değerlerin dahil edilip edilmeyeceği.
 */
type IncludeBlanksInRangeAgNumberColumnFilter = boolean;

/**
 * Kullanıcının aynı anda kaç filtre koşulu tanımlayabileceğini sınırlar.
 * Örn: 2 koşul = "contains 'abc'" AND "startsWith 'x'"
 *
 * @default 2
 */
type MaxNumConditionsAgNumberColumnFilter = number;

/**
 * Popup ilk açıldığında kaç koşul görünür olsun?
 * Kalan koşullar, kullanıcı isterse açılır.
 *
 * @default 1
 */
type NumAlwaysVisibleConditionsAgNumberColumnFilter = number;

/**
 * Sayı filtrelemeden önce, değerin nasıl görüneceğini belirleyen biçimlendirici.
 * Örn: 1000 → "1.000" gibi
 */
type NumberFormatterAgNumberColumnFilter = (value: number | null) => string | null;

/**
 * Girişteki metni sayıya çevirmek için kullanılan fonksiyon.
 * Örn: "1.000" → 1000
 */
type NumberParserAgNumberColumnFilter = (text: string | null) => number | null;

/**
 * true verilirse filtre readonly olur, kullanıcı düzenleme yapamaz.
 * Genellikle filtre API'si ile programatik kullanım için kullanılır.
 *
 * @default false
 */
type ReadOnlyAgNumberColumnFilter = boolean;

export interface FilterParamsAgNumberColumnFilter {
  allowedCharPattern?: AllowedCharPatternAgNumberColumnFilter;
  buttons?: ButtonsAgNumberColumnFilter[];
  closeOnApply?: CloseOnApplyAgNumberColumnFilter;
  debounceMs?: DebounceMsAgNumberColumnFilter;
  defaultJoinOperator?: DefaultJoinOperatorAgNumberColumnFilter;
  defaultOption?: DefaultOptionAgNumberColumnFilter;
  filterOptions?: FilterOptionsAgNumberColumnFilter[];
  filterPlaceholder?: FilterPlaceholderAgNumberColumnFilter;
  inRangeInclusive?: InRangeInclusiveAgNumberColumnFilter;
  includeBlanksInEquals?: IncludeBlanksInEqualsAgNumberColumnFilter;
  includeBlanksInGreaterThan?: IncludeBlanksInGreaterThanAgNumberColumnFilter;
  includeBlanksInLessThan?: IncludeBlanksInLessThanAgNumberColumnFilter;
  includeBlanksInNotEqual?: IncludeBlanksInNotEqualAgNumberColumnFilter;
  includeBlanksInRange?: IncludeBlanksInRangeAgNumberColumnFilter;
  maxNumConditions?: MaxNumConditionsAgNumberColumnFilter;
  numAlwaysVisibleConditions?: NumAlwaysVisibleConditionsAgNumberColumnFilter;
  numberFormatter?: NumberFormatterAgNumberColumnFilter;
  numberParser?: NumberParserAgNumberColumnFilter;
  readOnly?: ReadOnlyAgNumberColumnFilter;
}
