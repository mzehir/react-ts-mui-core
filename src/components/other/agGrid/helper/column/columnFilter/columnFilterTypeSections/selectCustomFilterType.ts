/**
 * Kullanıcı mini filtreye yazarken filtreleme işlemini anında başlatmak için true olarak ayarlanır.
 *
 * @default false
 */
type ApplyMiniFilterWhileTyping = boolean;

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
 * SetFilter içinde mini filtre ve filtre listesinin büyük/küçük harf duyarlılığını etkinleştirmek için true olarak ayarlanır.
 *
 * @default false
 */
type CaseSensitiveFiltering = boolean;

/**
 * `buttons` içinde `apply` varsa, `apply` butonuna basıldığında filtre popup'ının hemen kapanıp kapanmayacağını belirler.
 * true → Butona tıklanınca popup kapanır
 * false → Popup açık kalır (varsayılan)
 *
 * @default false
 */
type CloseOnApply = boolean;

/**
 * Filtre popup'ı açıldığında varsayılan olarak seçili olan filtre tipi.
 * Örn: 'contains', 'startsWith', vs.
 */
type DefaultOption = 'in';

/**
 * Kullanıcının seçim yapabileceği filtre türlerinin listesi.
 * Örn: sadece 'contains' ve 'startsWith' sunmak istiyorsan burada belirtirsin.
 */
export type FilterOptions = 'in';

/**
 * true verilirse filtre readonly olur, kullanıcı düzenleme yapamaz.
 * Genellikle filtre API'si ile programatik kullanım için kullanılır.
 *
 * @default false
 */
type ReadOnly = boolean;

export interface SelectCustomFilterItemParams {
  label: string;
  value: string | number;
  disabled?: boolean;
}

interface InitialFilterFieldsType {
  filter: string[] | number[]; // Value
}

export interface SelectCustomFilterParams {
  applyMiniFilterWhileTyping?: ApplyMiniFilterWhileTyping;
  buttons?: Buttons[];
  caseSensitiveFiltering?: CaseSensitiveFiltering;
  closeOnApply?: CloseOnApply;
  defaultOption: DefaultOption;
  filterOptions?: FilterOptions[];
  readOnly?: ReadOnly;
  // extra props
  initialFilterFields?: InitialFilterFieldsType;
  label: string;
  isLabelTranslation?: boolean;
  items: SelectCustomFilterItemParams[];
  isItemTextTranslation?: boolean;
  disabled?: boolean;
}
