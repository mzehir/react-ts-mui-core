import { toast } from 'react-toastify';
import { ToastCompProps, toastCompDefaultProps } from './toastifyHelper';
import i18n from '../../../i18n/i18n';

export function Toastify(props: ToastCompProps): void {
  const { isTranslation, message, type, ...otherProps } = { ...toastCompDefaultProps, ...props };
  let _message = message;

  if (isTranslation && message) {
    _message = i18n.t(message);
  }

  toast[type](_message, {
    ...otherProps,
  });
}
