import { ToastContainerProps } from 'react-toastify';

export interface ToastCompProps extends ToastContainerProps {
  isTranslation?: boolean;
  message?: string;
  type: 'info' | 'success' | 'warn' | 'error';
  progress?: string | number | undefined;
}

export const toastCompDefaultProps: ToastCompProps = {
  isTranslation: false,
  message: 'No messages to show!',
  type: 'info',
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'dark',
};
