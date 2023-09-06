import { toast } from 'react-toastify';

type ToastType = 'info' | 'success' | 'warning' | 'error' | 'default'

export const notify = (message: string, type?: ToastType): void => {
    if (type === 'info') {
        toast.info(message)
    }
    if (type === 'success') {
        toast.success(message)
    }
    if (type === 'warning') {
        toast.warning(message)
    }
    if (type === 'error') {
        toast.error(message)
    }
    if (!type || type === 'default') {
        toast(message)
    }
};