export type Position = "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center" 
export type ToastType = "success" | "error" | "info" | "warning" | "default"

export type ExitVariant = "default" | "mac" | "left" | "right" | "top"

export interface ToasterProps {
    position?: Position
    duration ?: number
    styling?: React.CSSProperties
    exitVariant?: ExitVariant
}

export interface Toast {
    id: string
    message: string
    type: ToastType
}


export type ToastInput = Omit<Toast, "id">