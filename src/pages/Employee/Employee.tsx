import React from 'react'
import { MdWork } from 'react-icons/md'
import { Card } from '../../components/Card'
import { Layout } from '../../components/Layout'
import { UseDataContext } from '../../context/dataContext'
import { IdataContext } from '../../interfaces/data'

type Props = {}

export default function Employee({}: Props) {
  const { employees } = UseDataContext() as IdataContext

  if (!employees.length) {
    return <Layout>Kosong</Layout>
  }

  return (
    <Layout>
      <div className='w-full h-fit mt-12 flex gap-12'>
        <div className='basis-0 shrink-0 flex-1 h-fit rounded bg-white border border-gray-100 p-6'>
        <p className='mb-4 text-gray-800 font-semibold'>Pegawai</p>
          <table className='w-full'>
            <thead className='bg-slate-100 h-8'>
              <tr>
                <th className='font-semibold'>No</th>
                <th className='font-semibold text-left pl-8'>Nama</th>
                <th className='font-semibold text-left'>Pekerjaan</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => (
                <tr className='h-10'>
                  <td className='text-center'>{index+1}</td>
                  <td className='pl-8'>{employee.name}</td>
                  <td>{employee.position}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Card
        width='w-[240px]'
          title='Total Pegawai'
          isIcon
          icon={<MdWork />}
          iconCustom='bg-gray-100 text-blue-600'
          value={employees.length}
        />
      </div>
    </Layout>
  )
}