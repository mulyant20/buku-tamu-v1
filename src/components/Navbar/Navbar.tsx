import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsMoon, BsSun } from 'react-icons/bs'

type Props = {
  theme?: string
}

export default function Navbar({ theme = 'light' }: Props) {
  const isLight: boolean = theme === 'light' ? true : false
  return (
    <div className={style.nav}>
      <div className={style.navInner}>
        <div className={style.flexBetween}>
          <NavLink to='/' className='text-[#373640] text-[18px] font-semibold mr-12'>Buku Tamu</NavLink>
          <NavLink to='/setting' className='text-[#9F9FA3] text-[15px]'>
            Pengaturan
          </NavLink>
        </div>
        <div className={style.flexBetween}>
          <NavLink to='/guestmode' className={style.buttonGuest}>
            Mode Pengunjung
          </NavLink>
          {isLight ? (
            <button className={style.button}>
              <BsSun />
            </button>
          ) : (
            <button className={style.buttonDark}>
              <BsMoon />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

const style = {
  nav:          'w-screen h-[72px] fixed top-0 left-0 bg-white border-b border-gray-100 z-10',
  navInner:     'max-w-[966px] h-full mx-auto flex justify-between items-center',
  button:       'flex items-center justify-center h-8 w-8 rounded-full border border-gray-200 text-gray-400',
  buttonDark:   'flex items-center justify-center h-8 w-8 rounded-full border border-white/70 text-white',
  buttonGuest:  'block px-[12px] py-2 rounded bg-[#D7DBFF] text-[#2f3dbb] mr-8 cursor-pointer hover:bg-[#222C88] hover:text-white duration-150 ease-in',
  flexBetween:  'flex justify-between items-center',
}
