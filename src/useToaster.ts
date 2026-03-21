import { useEffect, useState } from "react";
import { subscribe } from "./store";
import { Toast } from "./types";

export function useToast(){

    const [toasts, setToasts] = useState<Toast[]>([])
    useEffect(() => {
      
        const fn = subscribe((toasts:Toast[])=>{
            setToasts(toasts)
        })
    
      return () => {
        fn()
      }
    }, [toasts])
    
    return {toasts}

}