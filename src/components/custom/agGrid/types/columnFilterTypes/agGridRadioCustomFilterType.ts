/**
 * `filterParams.buttons` özelliği, filtre kutusunun altında hangi butonların görüneceğini belirler.
 * Geçerli değerler: 'apply', 'clear', 'reset', 'cancel'
 *
 * - `apply`: Filtreyi uygula butonu.
 * - `clear`: Mevcut tüm filtre koşullarını siler.
 * - `reset`: Filtreyi varsayılana döndürür.
 * - `cancel`: Yapılan değişiklikleri iptal eder.
 */
type ButtonsAgGridRadioCustomFilter = 'apply' | 'clear' | 'reset' | 'cancel';

/**
 * `buttons` içinde `apply` varsa, `apply` butonuna basıldığında filtre popup'ının hemen kapanıp kapanmayacağını belirler.
 * true → Butona tıklanınca popup kapanır
 * false → Popup açık kalır (varsayılan)
 *
 * @default false
 */
type CloseOnApplyAgGridRadioCustomFilter = boolean;

/**
 * Filtre popup'ı açıldığında varsayılan olarak seçili olan filtre tipi.
 * Örn: 'contains', 'startsWith', vs.
 */
type DefaultOptionAgGridRadioCustomFilter = 'equals';

/**
 * Kullanıcının seçim yapabileceği filtre türlerinin listesi.
 * Örn: sadece 'contains' ve 'startsWith' sunmak istiyorsan burada belirtirsin.
 */
type FilterOptionsAgGridRadioCustomFilter = 'equals';

/**
 * true verilirse filtre readonly olur, kullanıcı düzenleme yapamaz.
 * Genellikle filtre API'si ile programatik kullanım için kullanılır.
 *
 * @default false
 */
type ReadOnlyAgGridRadioCustomFilter = boolean;

export interface AgGridRadioCustomFilterCompItemProp {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface AgGridRadioCustomFilterCompProps {
  buttons?: ButtonsAgGridRadioCustomFilter[];
  closeOnApply?: CloseOnApplyAgGridRadioCustomFilter;
  defaultOption: DefaultOptionAgGridRadioCustomFilter;
  filterOptions?: FilterOptionsAgGridRadioCustomFilter[];
  readOnly?: ReadOnlyAgGridRadioCustomFilter;
  // extra props
  label: string;
  isLabelTranslation?: boolean;
  items: AgGridRadioCustomFilterCompItemProp[];
  isItemTextTranslation?: boolean;
  disabled?: boolean;
}
