import React from "react"
import { ExitVariant, ToastType } from "../types"

export const typeStyles: Record<ToastType, React.CSSProperties> = {
    success: { backgroundColor: "#f0fdf4", color: "#166534", border: "1px solid #bbf7d0" },
    error:   { backgroundColor: "#fef2f2", color: "#991b1b", border: "1px solid #fecaca" },
    info:    { backgroundColor: "#eff6ff", color: "#1e40af", border: "1px solid #bfdbfe" },
    warning: { backgroundColor: "#fffbeb", color: "#92400e", border: "1px solid #fde68a" },
    default: { backgroundColor: "#fafafa", color: "#18181b", border: "1px solid #e4e4e7" },
}

export const getExitStyle = (exitVariant: ExitVariant): React.CSSProperties => {
    switch (exitVariant) {
        case "mac":     return { transform: "scale(0.5)", opacity: 0 }
        case "left":    return { transform: "translateX(-150%)", opacity: 0 }
        case "right":   return { transform: "translateX(150%)", opacity: 0 }
        case "top":     return { transform: "translateY(-150%)", opacity: 0 }
        default:        return { opacity: 0 }
    }
}
