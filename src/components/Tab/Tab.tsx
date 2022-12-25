import React, { useMemo } from 'react'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

type Props = {}

export default function Tab({}: Props) {
  const location = useLocation()
  const path = location.pathname.split('/')[1]

  const Tabs = useMemo(() => {
    const activeTab = data
      .filter((i) => i.path === path)
      .map((j) => ({ ...j, isActive: true }))
    const filterTab = data.filter((i) => i.path !== path)

    return [...activeTab, ...filterTab].sort((a, b) => a.id - b.id)
  }, [path])

  return (
    <div className='min-w-screen h-[152px] bg-white'>
      <div className='max-w-[966px] h-full mx-auto relative'>
        <div className='h-fit absolute bottom-0 flex gap-[40px]'>
          {Tabs.map((tab) => (
            <div key={tab.id} className={`relative h-16 px-8 flex items-center relative ${tab.hasOwnProperty('isActive') ? 'text-gray-600' : 'text-gray-400'}`}>
              <NavLink to={tab.route}>{tab.name}</NavLink>
              {tab.hasOwnProperty('isActive') ? <div className='rounded-t-lg w-full h-[5px] bg-gradient-to-r from-[#7987FF] to-[#FF9587] absolute bottom-0 left-1/2 -translate-x-1/2'></div> : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const data = [
  { id: 1, name: 'Beranda', route: '/', path: '' },
  { id: 2, name: 'Buku Tamu', route: '/list', path: 'list' },
  { id: 3, name: 'Pegawai', route: '/employee', path: 'employee' },
]
