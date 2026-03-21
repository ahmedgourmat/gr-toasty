import { Position } from "../types";

export const positionToStyle = (position: Position | undefined) => {
    switch (position) {
        case 'top-left':
            return { top: "1rem", left: "1rem" }
        case 'top-right':
            return { top: "1rem", right: "1rem" }
        case 'bottom-left':
            return { bottom: "1rem", left: "1rem" }
        case 'bottom-right':
            return { bottom: "1rem", right: "1rem" }
        case 'top-center':
            return { top: "1rem", left: "50%", transform: "translateX(-50%)" }
        case 'bottom-center':
            return { bottom: "1rem", left: "50%", transform: "translateX(-50%)" }
        default:
            return { bottom: "1rem", right: "1rem" }
    }
}