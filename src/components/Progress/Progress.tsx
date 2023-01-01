import React, { useMemo, useState, useEffect } from 'react'

type Props = {
  total: number
  step: number
}

export default function Progress({ total, step }: Props) {
  const [init, setInit] = useState<boolean>(false)
  
  const progress = useMemo(() => {
    return (step / total) * 100
  }, [total, step])

  useEffect(() => {
    let timeout = setTimeout(() => {
      setInit(true)
    }, 100)
  }, [])

  return (
    <div className='gap-2 mt-4 mb-6 flex flex-col flex-start'>
      <p className='text-xl text-gray-800 font-semibold'>{step}<span className='text-sm text-gray-300 font-normal'>/{total}</span></p>
      <div className='w-full h-2 bg-gray-200 rounded-full overflow-hidden'>
        <div
          className='h-full bg-blue-800 duration-200 ease-in rounded-full'
          style={{ width: `${init ? progress : 2}%` }}
        ></div>
      </div>
    </div>
  )
}
