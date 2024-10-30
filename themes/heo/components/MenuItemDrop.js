import Link from 'next/link'
import { useState } from 'react'

export const MenuItemDrop = ({ link }) => {
  const [show, changeShow] = useState(false)
  const hasSubMenu = link?.subMenus?.length > 0

  if (!link || !link.show) {
    return null
  }

  return (
    <div
      onMouseOver={() => changeShow(true)}
      onMouseOut={() => changeShow(false)}>
      {/* 不含子菜单 */}
      {!hasSubMenu && (
        <Link
          target={link?.target}
          href={link?.href}
          className='flex items-center justify-center px-3 py-1 tracking-widest no-underline hover:bg-black hover:bg-opacity-10 rounded-2xl'>
          {link?.icon && <i className={link?.icon} />}{' '}
          <span className='px-3'> {link?.name} </span>
        </Link>
      )}
      {/* 含子菜单的按钮 */}
      {hasSubMenu && (
        <>
          <div className='flex items-center justify-center px-3 py-1 tracking-widest no-underline cursor-pointer hover:bg-black hover:bg-opacity-10 rounded-2xl'>
            {link?.icon && <i className={link?.icon} />}{' '}
            <span className='px-3'> {link?.name} </span>
          </div>
        </>
      )}
      {/* 子菜单 */}
      {hasSubMenu && (
        <ul
          style={{ backdropFilter: 'blur(3px)' }}
          className={`${show ? 'visible opacity-100 top-14' : 'invisible opacity-0 top-20'} drop-shadow-md overflow-hidden rounded-xl bg-white dark:bg-[#1e1e1e] transition-all duration-300 z-20 absolute`}>
          {link.subMenus.map((sLink, index) => {
            return (
              <li
                key={index}
                className='py-1 pl-3 pr-6 tracking-widest text-gray-900 transition-all duration-200 cursor-pointer hover:bg-blue-600 dark:hover:bg-yellow-600 hover:text-white dark:text-gray-100'>
                <Link href={sLink.href} target={link?.target}>
                  <span className='text-sm text-nowrap font-extralight'>
                    {link?.icon && <i className={sLink?.icon} />}
                    <span className='px-2'> {sLink.title} </span>
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
