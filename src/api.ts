import { addToast } from "./store"


export const toast = () => {
    addToast({ type: "default", message: "This is a success toast" })
}

toast.success = (message: string) =>
    addToast({ type: "success", message })

toast.error = (message: string) =>
    addToast({ type: "error", message })

toast.info = (message: string) =>
    addToast({ type: "info", message })

toast.warning = (message: string) =>
    addToast({ type: "warning", message })