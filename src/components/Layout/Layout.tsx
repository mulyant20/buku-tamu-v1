import React from 'react'
import { Navbar } from '../Navbar'
import { Tab } from '../Tab'

type Props = {
  children: React.ReactNode
  withoutTab?: boolean
}

export default function Layout({ children, withoutTab }: Props) {
  return (
    <>
      <Navbar />
      {withoutTab ? null : <Tab />}
      <div className='max-w-[966px] mx-auto'>{children}</div>
    </>
  )
}
