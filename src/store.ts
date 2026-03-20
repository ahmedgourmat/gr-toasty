import { Toast } from "./types";

let listeners: Function[] = [];
let toasts : Toast[] = [];

export const subscribe = (listener: Function) => {
    listeners.push(listener)

    return () => {
        listeners = listeners.filter(l => l !== listener)
    }
}

const notify = (toast : Toast[]) => {
    listeners.forEach(listener => listener(toast))
}


export const deleteToast = (id : string) => {
    toasts = toasts.filter(toast => toast.id !== id)
    notify(toasts)
}

export const addToast = (toast : Toast) => {
    toast.id = crypto.randomUUID()
    toasts.push(toast)
    notify(toasts)
}