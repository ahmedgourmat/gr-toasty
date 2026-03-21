export type Position = "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center" | "center"
export type ToastType = "success" | "error" | "info" | "warning" | "default"

export interface ToasterProps {
    position?: Position
    duaration?: number;
    styling?: React.CSSProperties
}

export interface Toast {
    id?: string
    message: string
    type: ToastType
}