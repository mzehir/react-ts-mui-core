/**
 * Giriş kutusuna sadece belirli karakterlerin girilmesine izin verir.
 * Örn: '\\d\\.' ifadesi, sadece sayılar ve nokta karakterine izin verir.
 */
type AllowedCharPattern = string;

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
 * Kullanıcı yazı yazarken filtrelemenin ne kadar gecikmeyle (ms cinsinden) uygulanacağını belirler.
 * Varsayılan: 500ms
 *
 * @default 500
 */
type DebounceMs = number;

/**
 * Çoklu filtre koşullarında, koşulların AND mi yoksa OR ile mi bağlanacağını belirler.
 * 'AND' → tüm koşullar sağlanmalı
 * 'OR' → herhangi biri sağlanmalı
 *
 * @default 'AND'
 */
type DefaultJoinOperator = 'AND' | 'OR';

/**
 * Filtre popup'ı açıldığında varsayılan olarak hangi filtre türü seçili olacak?
 * Örn: 'equals', 'lessThan', vs.
 */
type DefaultOption =
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
 * Kullanıcının seçim yapabileceği filtre türlerinin listesi.
 * Örn: sadece 'lessThan' ve 'greaterThanOrEqual' sunmak istiyorsan burada belirtirsin.
 */
type FilterOptions =
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
type FilterPlaceholder = unknown | string;

/**
 * 'inRange' filtresinde aralık uç değerlerinin dahil olup olmadığını belirler.
 * true → min ve max dahil
 */
type InRangeInclusive = boolean;

/**
 * 'equals' filtresinde hücre değeri boşsa, yine de filtreye dahil edilip edilmeyeceğini belirler.
 */
type IncludeBlanksInEquals = boolean;

/**
 * 'greaterThan' filtresinde boş (null) değerlerin dahil edilip edilmeyeceği.
 */
type IncludeBlanksInGreaterThan = boolean;

/**
 * 'lessThan' filtresinde boş (null) değerlerin dahil edilip edilmeyeceği.
 */
type IncludeBlanksInLessThan = boolean;

/**
 * 'notEqual' filtresinde boş (null) değerlerin dahil edilip edilmeyeceği.
 */
type IncludeBlanksInNotEqual = boolean;

/**
 * 'inRange' filtresinde boş (null) değerlerin dahil edilip edilmeyeceği.
 */
type IncludeBlanksInRange = boolean;

/**
 * Kullanıcının aynı anda kaç filtre koşulu tanımlayabileceğini sınırlar.
 * Örn: 2 koşul = "contains 'abc'" AND "startsWith 'x'"
 *
 * @default 2
 */
type MaxNumConditions = number;

/**
 * Popup ilk açıldığında kaç koşul görünür olsun?
 * Kalan koşullar, kullanıcı isterse açılır.
 *
 * @default 1
 */
type NumAlwaysVisibleConditions = number;

/**
 * Sayı filtrelemeden önce, değerin nasıl görüneceğini belirleyen biçimlendirici.
 * Örn: 1000 → "1.000" gibi
 */
type NumberFormatter = (value: number | null) => string | null;

/**
 * Girişteki metni sayıya çevirmek için kullanılan fonksiyon.
 * Örn: "1.000" → 1000
 */
type NumberParser = (text: string | null) => number | null;

/**
 * true verilirse filtre readonly olur, kullanıcı düzenleme yapamaz.
 * Genellikle filtre API'si ile programatik kullanım için kullanılır.
 *
 * @default false
 */
type ReadOnly = boolean;

export interface NumberColumnFilterParams {
  allowedCharPattern?: AllowedCharPattern;
  buttons?: Buttons[];
  closeOnApply?: CloseOnApply;
  debounceMs?: DebounceMs;
  defaultJoinOperator?: DefaultJoinOperator;
  defaultOption: DefaultOption;
  filterOptions?: FilterOptions[];
  filterPlaceholder?: FilterPlaceholder;
  inRangeInclusive?: InRangeInclusive;
  includeBlanksInEquals?: IncludeBlanksInEquals;
  includeBlanksInGreaterThan?: IncludeBlanksInGreaterThan;
  includeBlanksInLessThan?: IncludeBlanksInLessThan;
  includeBlanksInNotEqual?: IncludeBlanksInNotEqual;
  includeBlanksInRange?: IncludeBlanksInRange;
  maxNumConditions?: MaxNumConditions;
  numAlwaysVisibleConditions?: NumAlwaysVisibleConditions;
  numberFormatter?: NumberFormatter;
  numberParser?: NumberParser;
  readOnly?: ReadOnly;
  // extra props
  initialFilterValue?: number | string;
}
