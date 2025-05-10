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
 * Filtreleme sırasında büyük/küçük harf duyarlılığını belirler.
 * true → "Ali" ile "ali" eşleşmez
 * false → "Ali" ile "ali" eşleşir (varsayılan)
 *
 * @default false
 */
type CaseSensitive = boolean;

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
 * Filtre popup'ı açıldığında varsayılan olarak seçili olan filtre tipi.
 * Örn: 'contains', 'startsWith', vs.
 */
type DefaultOption =
  | 'equals'
  | 'notEqual'
  | 'contains'
  | 'notContains'
  | 'startsWith'
  | 'endsWith'
  | 'blank'
  | 'notBlank';

/**
 * Kullanıcının seçim yapabileceği filtre türlerinin listesi.
 * Örn: sadece 'contains' ve 'startsWith' sunmak istiyorsan burada belirtirsin.
 */
export type FilterOptions =
  | 'equals'
  | 'notEqual'
  | 'contains'
  | 'notContains'
  | 'startsWith'
  | 'endsWith'
  | 'blank'
  | 'notBlank';

/**
 * Filtre kutusu içindeki input alanının placeholder (örnek metin) değerini belirler.
 *
 * Örn: "İsme göre ara..."
 */
type FilterPlaceholder = unknown | string;

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
 * true verilirse filtre readonly olur, kullanıcı düzenleme yapamaz.
 * Genellikle filtre API'si ile programatik kullanım için kullanılır.
 *
 * @default false
 */
type ReadOnly = boolean;

/**
 * Kullanıcının yazdığı input'u filtre karşılaştırmasından önce biçimlendirir.
 * Örn: Türkçe karakterleri normalize edebilirsin.
 *
 * Örnek: "ç" → "c"
 */
type TextFormatter = (from: string) => string | null;

/**
 * Gelişmiş bir karşılaştırma fonksiyonu.
 * Filtreleme davranışını tamamen özelleştirmeni sağlar.
 *
 * true dönerse değer filtreyi geçer, false dönerse geçemez.
 */
type TextMatcher = (params: unknown) => boolean;

/**
 * true verilirse kullanıcıdan gelen input'un başındaki ve sonundaki boşluklar silinir.
 *
 * @default false
 */
type TrimInput = boolean;

interface InitialFilterFieldsType {
  filter: string; // Value
}

export interface TextColumnFilterParams {
  buttons?: Buttons[];
  caseSensitive?: CaseSensitive;
  closeOnApply?: CloseOnApply;
  debounceMs?: DebounceMs;
  defaultJoinOperator?: DefaultJoinOperator;
  defaultOption: DefaultOption;
  filterOptions?: FilterOptions[];
  filterPlaceholder?: FilterPlaceholder;
  maxNumConditions?: MaxNumConditions;
  numAlwaysVisibleConditions?: NumAlwaysVisibleConditions;
  readOnly?: ReadOnly;
  textFormatter?: TextFormatter;
  textMatcher?: TextMatcher;
  trimInput?: TrimInput;
  // extra props
  initialFilterFields?: InitialFilterFieldsType;
  initialFilterValue?: string;
}
