import React from 'react'
import { Card } from '../../components/Card'
import { Layout } from '../../components/Layout'
import { MdPeople, MdWork, MdWorkspacesFilled } from 'react-icons/md'
import { UseDataContext } from '../../context/dataContext';
import { IdataContext } from '../../interfaces/data';

type Props = {
  guest?: number
  totalGuest?: number
  employee?: number
}

export default function Home({ guest, totalGuest, employee }: Props) {
  const {guests, employees} = UseDataContext() as IdataContext
  return (
    <Layout>
      <div className='w-full mt-12 grid grid-cols-[repeat(auto-fill,minmax(theme(width.64),1fr))] p-2 gap-12'>
        <Card
          title='Tamu Hari Ini'
          icon={<MdPeople />}
          isIcon
          iconCustom='bg-gray-100 text-purple-600'
          value={guests.length}
        />
        <Card
          title='Total Tamu'
          isIcon
          icon={<MdWorkspacesFilled />}
          iconCustom='bg-gray-100 text-blue-600'
          value={20}
        />
        <Card
          title='Jumlah Pegawai'
          isIcon
          icon={<MdWork />}
          iconCustom='bg-gray-100 text-blue-500'
          value={employees.length}
        />
      </div>
    </Layout>
  )
}
