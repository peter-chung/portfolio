"use client"

import { createContext, useContext, useState } from "react"

const ActiveSectionContext = createContext<{
  active: string | null
  setActive: (id: string | null) => void
}>({ active: null, setActive: () => {} })

export function ActiveSectionProvider({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState<string | null>(null)
  return (
    <ActiveSectionContext.Provider value={{ active, setActive }}>
      {children}
    </ActiveSectionContext.Provider>
  )
}

export function useActiveSection() {
  return useContext(ActiveSectionContext)
}
