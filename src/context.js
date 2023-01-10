import React, { useState } from 'react'
import sublinks from './data'

export const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
  const [location, setLocation] = useState({})
  const [page, setPage] = useState({ page: '', links: [] })
  const openSideBar = () => {
    setIsSidebarOpen(true)
  }
  const closeSideBar = () => {
    setIsSidebarOpen(false)
  }
  const openSubmenu = (text, location) => {
    const page = sublinks.find((link) => text === link.page)
    setPage(page)
    setLocation(location)
    setIsSubmenuOpen(true)
  }
  const closeSubmenu = () => {
    setIsSubmenuOpen(false)
  }
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        openSideBar,
        closeSideBar,
        openSubmenu,
        closeSubmenu,
        location,
        setLocation,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
