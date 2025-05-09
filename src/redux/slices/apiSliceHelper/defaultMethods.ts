import { Toastify } from '../../../components/other/toastify/Toastify';
import { ToastCompProps } from '../../../components/other/toastify/toastifyHelper';

export const apiSliceRunToast = (props: ToastCompProps) => {
  Toastify({
    ...props,
    isTranslation: true,
    theme: 'colored',
  });
};
