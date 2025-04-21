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

export interface AgGridRadioCustomFilterCompItemProp {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface AgGridRadioCustomFilterCompProps {
  buttons?: ButtonsAgGridRadioCustomFilter[];
  label: string;
  isLabelTranslation?: boolean;
  items: AgGridRadioCustomFilterCompItemProp[];
  isItemTextTranslation?: boolean;
  disabled?: boolean;
}
