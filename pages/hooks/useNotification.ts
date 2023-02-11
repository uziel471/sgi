import { toast } from 'react-toastify';

export default function useNotification() {
  const notification = (message: string, type: 'success' | 'error' | 'info' | 'warning') => {
    console.log(message, type);
    toast[type](message);
  };
  return {
    notification,
  };
}
