import { Toast, ToastInput } from "./types";

console.log("store instance created", Math.random())

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
    console.log("subscribe called, listeners count:", globalStore.__gr_toasty_listeners__.length)
    listeners.push(listener)

    return () => {
        listeners = listeners.filter(l => l !== listener)
        globalStore.__gr_toasty_listeners__ = listeners
    }
}

const notify = (toasts: Toast[]) => {
    console.log("notify called, listeners:", globalStore.__gr_toasty_listeners__.length, "toasts:", toasts.length)
    listeners.forEach(listener => listener(toasts))
}

export const deleteToast = (id: string) => {
    toasts = toasts.filter(toast => toast.id !== id)
    globalStore.__gr_toasty_toasts__ = toasts
    notify(toasts)
}

export const addToast = (toast: ToastInput) => {
    console.log("addToast called", toast)
    const newToast = { ...toast, id: crypto.randomUUID() }
    toasts = [...toasts, newToast]
    globalStore.__gr_toasty_toasts__ = toasts
    notify(toasts)
}