import React from 'react'

type Props = {
  children: React.ReactNode
  title?: string
  width?: string
  icon?: React.ReactNode
  isIcon?: boolean
  iconCustom?: string
}

export default function Card({ children, title, width, isIcon, icon, iconCustom }: Props) {
  return (
    <div
      className={`h-[216px] rounded-lg overflow-hidden bg-white border border-gray-100 p-6 relative ${width}`}
    >
      <div
        className={`h-full flex flex-col items-start ${isIcon ? 'justify-between' : 'justify-end'}`}
      >
        {isIcon ? (
            <div className={`px-4 py-4 rounded-lg text-xl ${iconCustom}`}>
                {icon}
            </div>
        ) : null}
        <div>
          <p className='text-[#C3C3C6] mb-4'>{title}</p>
          {children}
        </div>
      </div>
      <div className='w-full h-[10px] absolute bottom-0 left-0 bg-gradient-to-r from-[#7987FF] to-[#FF9587]'></div>
    </div>
  )
}
