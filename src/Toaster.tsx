import React from 'react'
import ToasterItem from './ToasterItem'
import { Toast, ToasterProps } from './types'
import { useToast } from './useToaster'
import { positionToStyle } from './utils/position'

const Toaster = (props: ToasterProps) => {

    const { toasts }: { toasts: Toast[] } = useToast()

    const position = positionToStyle(props.position)

    return (
        <div
            style={{
                position: "fixed",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                ...props.styling,
                ...position
            }}
        >
            {
            toasts.map(toast => (
                <ToasterItem
                    key={toast.id}
                    id={toast.id}
                    message={toast.message}
                    type={toast.type}
                    duration={props.duration ?? 4000}
                    variant={props.variant ?? "default"}
                />
            ))
            }
        </div>
    )
}

export default Toaster
