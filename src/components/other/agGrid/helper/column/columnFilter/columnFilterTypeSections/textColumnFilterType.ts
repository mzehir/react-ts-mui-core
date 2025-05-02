/**
 * `filterParams.buttons` özelliği, filtre kutusunun altında hangi butonların görüneceğini belirler.
 * Geçerli değerler: 'apply', 'clear', 'reset', 'cancel'
 *
 * - `apply`: Filtreyi uygula butonu.
 * - `clear`: Mevcut tüm filtre koşullarını siler.
 * - `reset`: Filtreyi varsayılana döndürür.
 * - `cancel`: Yapılan değişiklikleri iptal eder.
 */
type ButtonsAgTextColumnFilter = 'apply' | 'clear' | 'reset' | 'cancel';

/**
 * Filtreleme sırasında büyük/küçük harf duyarlılığını belirler.
 * true → "Ali" ile "ali" eşleşmez
 * false → "Ali" ile "ali" eşleşir (varsayılan)
 *
 * @default false
 */
type CaseSensitiveAgTextColumnFilter = boolean;

/**
 * `buttons` içinde `apply` varsa, `apply` butonuna basıldığında filtre popup'ının hemen kapanıp kapanmayacağını belirler.
 * true → Butona tıklanınca popup kapanır
 * false → Popup açık kalır (varsayılan)
 *
 * @default false
 */
type CloseOnApplyAgTextColumnFilter = boolean;

/**
 * Kullanıcı yazı yazarken filtrelemenin ne kadar gecikmeyle (ms cinsinden) uygulanacağını belirler.
 * Varsayılan: 500ms
 *
 * @default 500
 */
type DebounceMsAgTextColumnFilter = number;

/**
 * Çoklu filtre koşullarında, koşulların AND mi yoksa OR ile mi bağlanacağını belirler.
 * 'AND' → tüm koşullar sağlanmalı
 * 'OR' → herhangi biri sağlanmalı
 *
 * @default 'AND'
 */
type DefaultJoinOperatorAgTextColumnFilter = 'AND' | 'OR';

/**
 * Filtre popup'ı açıldığında varsayılan olarak seçili olan filtre tipi.
 * Örn: 'contains', 'startsWith', vs.
 */
type DefaultOptionAgTextColumnFilter =
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
type FilterOptionsAgTextColumnFilter =
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
type FilterPlaceholderAgTextColumnFilter = unknown | string;

/**
 * Kullanıcının aynı anda kaç filtre koşulu tanımlayabileceğini sınırlar.
 * Örn: 2 koşul = "contains 'abc'" AND "startsWith 'x'"
 *
 * @default 2
 */
type MaxNumConditionsAgTextColumnFilter = number;

/**
 * Popup ilk açıldığında kaç koşul görünür olsun?
 * Kalan koşullar, kullanıcı isterse açılır.
 *
 * @default 1
 */
type NumAlwaysVisibleConditionsAgTextColumnFilter = number;

/**
 * true verilirse filtre readonly olur, kullanıcı düzenleme yapamaz.
 * Genellikle filtre API'si ile programatik kullanım için kullanılır.
 *
 * @default false
 */
type ReadOnlyAgTextColumnFilter = boolean;

/**
 * Kullanıcının yazdığı input'u filtre karşılaştırmasından önce biçimlendirir.
 * Örn: Türkçe karakterleri normalize edebilirsin.
 *
 * Örnek: "ç" → "c"
 */
type TextFormatterAgTextColumnFilter = (from: string) => string | null;

/**
 * Gelişmiş bir karşılaştırma fonksiyonu.
 * Filtreleme davranışını tamamen özelleştirmeni sağlar.
 *
 * true dönerse değer filtreyi geçer, false dönerse geçemez.
 */
type TextMatcherAgTextColumnFilter = (params: unknown) => boolean;

/**
 * true verilirse kullanıcıdan gelen input'un başındaki ve sonundaki boşluklar silinir.
 *
 * @default false
 */
type TrimInputAgTextColumnFilter = boolean;

export interface TextColumnFilterParams {
  buttons?: ButtonsAgTextColumnFilter[];
  caseSensitive?: CaseSensitiveAgTextColumnFilter;
  closeOnApply?: CloseOnApplyAgTextColumnFilter;
  debounceMs?: DebounceMsAgTextColumnFilter;
  defaultJoinOperator?: DefaultJoinOperatorAgTextColumnFilter;
  defaultOption: DefaultOptionAgTextColumnFilter;
  filterOptions?: FilterOptionsAgTextColumnFilter[];
  filterPlaceholder?: FilterPlaceholderAgTextColumnFilter;
  maxNumConditions?: MaxNumConditionsAgTextColumnFilter;
  numAlwaysVisibleConditions?: NumAlwaysVisibleConditionsAgTextColumnFilter;
  readOnly?: ReadOnlyAgTextColumnFilter;
  textFormatter?: TextFormatterAgTextColumnFilter;
  textMatcher?: TextMatcherAgTextColumnFilter;
  trimInput?: TrimInputAgTextColumnFilter;
  // extra props
  initialFilterValue?: string;
}
