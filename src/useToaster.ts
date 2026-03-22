import { useEffect, useState } from "react";
import { subscribe } from "./store";
import { Toast } from "./types";

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([])

  useEffect(() => {
    const unsubscribe = subscribe((toasts: Toast[]) => {
      setToasts(toasts)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  return { toasts }

}