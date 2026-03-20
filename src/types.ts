export interface ToasterProps {
    position?: "bottom-left" | "bottom-center" | "bottom-right" | "top-left" | "top-center" | "top-right";
}




export interface Toast {
    id?: string
    message: string
    type: 'success' | 'error' | 'info' | 'warning' | 'default'
}