import { Toast } from "./types";

const globalStore = globalThis as typeof globalThis & {
    __gr_toasty_listeners__: Function[]
    __gr_toasty_toasts__: Toast[]
}

if (!globalStore.__gr_toasty_listeners__) {
    globalStore.__gr_toasty_listeners__ = []
}
if (!globalStore.__gr_toasty_toasts__) {
    globalStore.__gr_toasty_toasts__ = []
}

let listeners = globalStore.__gr_toasty_listeners__
let toasts = globalStore.__gr_toasty_toasts__

export const subscribe = (listener: Function) => {
    listeners.push(listener)

    return () => {
        listeners = listeners.filter(l => l !== listener)
        globalStore.__gr_toasty_listeners__ = listeners
    }
}

const notify = (toasts: Toast[]) => {
    listeners.forEach(listener => listener(toasts))
}

export const deleteToast = (id: string) => {
    toasts = toasts.filter(toast => toast.id !== id)
    globalStore.__gr_toasty_toasts__ = toasts
    notify(toasts)
}

export const addToast = (toast: Toast) => {
    const newToast = { ...toast, id: crypto.randomUUID() }
    toasts = [...toasts, newToast]
    globalStore.__gr_toasty_toasts__ = toasts
    notify(toasts)
}