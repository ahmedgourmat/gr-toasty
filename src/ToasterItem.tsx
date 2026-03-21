import React, { useEffect, useState } from 'react'
import { ToastType } from './types'
import { deleteToast } from './store'
import { getExitStyle, typeStyles } from './styles/toastItem'
import { AnimationStyle } from './types'

const ToasterItem = ({
    id,
    message,
    type,
    duration = 4000,
    animationStyle = "default"
}: {
    id: string
    message: string
    type: ToastType
    duration?: number
    animationStyle?: AnimationStyle
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
            className={`gr-toasty__item gr-toasty__item--${animationStyle}`}
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
                opacity: isLeaving ? 0 : 1,
                ...typeStyles[type],
                ...(isLeaving ? getExitStyle(animationStyle) : {})
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