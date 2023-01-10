import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { AppContext } from './context'
import sublinks from './data'

const Sidebar = () => {
  const { isSidebarOpen, closeSideBar } = React.useContext(AppContext)
  return (
    <aside
      className={`${
        isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'
      }`}
    >
      <div className='sidebar'>
        <button className='close-btn' onClick={closeSideBar}>
          <FaTimes />
        </button>
        <div className='sidebar-links'>
          {sublinks.map((item, index) => {
            const { page, links } = item
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className='sidebar-sublinks'>
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
              </article>
            )
          })}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
