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
 * Filtre popup'ı açıldığında varsayılan olarak seçili olan filtre tipi.
 * Örn: 'contains', 'startsWith', vs.
 */
type DefaultOption = 'equals';

/**
 * Kullanıcının seçim yapabileceği filtre türlerinin listesi.
 * Örn: sadece 'contains' ve 'startsWith' sunmak istiyorsan burada belirtirsin.
 */
export type FilterOptions = 'equals';

/**
 * true verilirse filtre readonly olur, kullanıcı düzenleme yapamaz.
 * Genellikle filtre API'si ile programatik kullanım için kullanılır.
 *
 * @default false
 */
type ReadOnly = boolean;

export interface RadioCustomFilterItemParams {
  label: string;
  value: string | number;
  disabled?: boolean;
}

interface InitialFilterFieldsType {
  filter: string | number; // Value
}

export interface RadioCustomFilterParams {
  buttons?: Buttons[];
  closeOnApply?: CloseOnApply;
  defaultOption: DefaultOption;
  filterOptions?: FilterOptions[];
  readOnly?: ReadOnly;
  // extra props
  initialFilterFields?: InitialFilterFieldsType;
  initialFilterValue?: string | number;
  label: string;
  isLabelTranslation?: boolean;
  items: RadioCustomFilterItemParams[];
  isItemTextTranslation?: boolean;
  disabled?: boolean;
}
