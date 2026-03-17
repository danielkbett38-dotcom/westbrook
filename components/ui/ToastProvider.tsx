'use client'
import { createContext, useContext, useState, useCallback, ReactNode } from 'react'

interface ToastContextType {
  showToast: (msg: string) => void
}

const ToastContext = createContext<ToastContextType>({ showToast: () => {} })

export function useToast() {
  return useContext(ToastContext)
}

export default function ToastProvider({ children }: { children: ReactNode }) {
  const [msg, setMsg] = useState('')
  const [visible, setVisible] = useState(false)

  const showToast = useCallback((message: string) => {
    setMsg(message)
    setVisible(true)
    setTimeout(() => setVisible(false), 4000)
  }, [])

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className={`toast ${visible ? 'show' : ''}`}>{msg}</div>
    </ToastContext.Provider>
  )
}
