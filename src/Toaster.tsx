import React from 'react'
import ToasterItem from './ToasterItem'
import { Toast, ToasterProps } from './types'
import { useToast } from './useToaster'
import { positionToStyle } from './utils/position'

const Toaster = (props: ToasterProps) => {

    const {toasts} : {toasts : Toast[]} = useToast()

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
                toasts.map(toast => <ToasterItem key={toast.id} message={toast.message} type={toast.type}/>)
            }
        </div>
    )
}

export default Toaster
