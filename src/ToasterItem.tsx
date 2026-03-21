import React, { useEffect, useState } from 'react'
import { ToastType } from './types'
import { deleteToast } from './store'

type Variant = "default" | "mac" | "left" | "right" | "top"

const typeStyles: Record<ToastType, React.CSSProperties> = {
    success: { backgroundColor: "#f0fdf4", color: "#166534", border: "1px solid #bbf7d0" },
    error:   { backgroundColor: "#fef2f2", color: "#991b1b", border: "1px solid #fecaca" },
    info:    { backgroundColor: "#eff6ff", color: "#1e40af", border: "1px solid #bfdbfe" },
    warning: { backgroundColor: "#fffbeb", color: "#92400e", border: "1px solid #fde68a" },
    default: { backgroundColor: "#fafafa", color: "#18181b", border: "1px solid #e4e4e7" },
}

const getExitStyle = (variant: Variant): React.CSSProperties => {
    switch (variant) {
        case "mac":     return { transform: "scale(0.5)", opacity: 0 }
        case "left":    return { transform: "translateX(-150%)", opacity: 0 }
        case "right":   return { transform: "translateX(150%)", opacity: 0 }
        case "top":     return { transform: "translateY(-150%)", opacity: 0 }
        default:        return { opacity: 0 }
    }
}

const ToasterItem = ({
    id,
    message,
    type,
    duration = 4000,
    variant = "default"
}: {
    id: string
    message: string
    type: ToastType
    duration?: number
    variant?: Variant
}) => {

    const [isLeaving, setIsLeaving] = useState(false)

    const dismiss = () => setIsLeaving(true)

    useEffect(() => {
        const timer = setTimeout(dismiss, duration)
        return () => clearTimeout(timer)
    }, [duration])

    const handleTransitionEnd = () => {
        if (isLeaving) deleteToast(id)
    }

    return (
        <div
            onTransitionEnd={handleTransitionEnd}
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "12px",
                padding: "12px 16px",
                borderRadius: "8px",
                minWidth: "280px",
                maxWidth: "380px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                fontSize: "14px",
                fontWeight: 500,
                cursor: "default",
                transition: "all 0.3s ease",
                opacity: isLeaving ? 0 : 1,
                ...typeStyles[type],
                ...(isLeaving ? getExitStyle(variant) : {})
            }}
        >
            <span>{message}</span>
            <button
                onClick={dismiss}
                style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "16px",
                    lineHeight: 1,
                    padding: "0 2px",
                    color: "inherit",
                    opacity: 0.6,
                }}
            >
                ✕
            </button>
        </div>
    )
}

export default ToasterItem