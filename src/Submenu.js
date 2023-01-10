import React, { useState, useRef, useEffect } from 'react'
import { AppContext } from './context'
const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = React.useContext(AppContext)
  const container = useRef(null)
  useEffect(() => {
    const submenu = container.current
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`

    if (links.length === 3) {
      setColumns('col-3')
    }
    if (links.length > 3) {
      setColumns('col-4')
    }
  }, [location])
  const [columns, setColumns] = useState('col-2')
  return (
    <aside
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { url, label, icon } = link
          return (
            <a href={url} key={index}>
              {icon}
              {label}
            </a>
          )
        })}
      </div>
    </aside>
  )
}

export default Submenu
