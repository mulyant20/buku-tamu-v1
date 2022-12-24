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
          <h1 className='text-[#373640] text-[18px] font-semibold mr-12'>Buku Tamu</h1>
          <NavLink to='/pengaturan' className='text-[#9F9FA3] text-[15px]'>
            Pengaturan
          </NavLink>
        </div>
        <div className={style.flexBetween}>
          <NavLink to='/pengunjung' className={style.buttonGuest}>
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
  nav:          'w-screen h-[72px] fixed top-0 left-0 bg-white border-b border-gray-100',
  navInner:     'max-w-[966px] h-full mx-auto flex justify-between items-center',
  button:       'flex items-center justify-center h-8 w-8 rounded-full border border-gray-200 text-gray-400',
  buttonDark:   'flex items-center justify-center h-8 w-8 rounded-full border border-white/70 text-white',
  buttonGuest:  'px-[12px] py-2 rounded bg-[#D7DBFF] text-[#222C88] mr-8',
  flexBetween:  'flex justify-between items-center',
}
