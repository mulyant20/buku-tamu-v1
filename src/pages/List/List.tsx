import React from 'react'
import { Layout } from '../../components/Layout'
import { UseDataContext } from '../../context/dataContext'
import { IdataContext } from '../../interfaces/data'
import emptyImage from '../../assets/contact.png'
import { Card } from '../../components/Card'
import { MdWorkspacesFilled } from 'react-icons/md'

export default function List() {
  const { guests } = UseDataContext() as IdataContext

  if (!guests.length) {
    return (
      <Layout>
        <div className='w-full h-fit mt-12'>
          <img
            className='w-full h-80 object-contain'
            src={emptyImage}
            alt='empty'
          />
          <p className='text-center mt-4 text-lg'>Belum ada tamu</p>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className='mt-12 h-fit bg-white border border-gray-100 p-6 rounded-lg'>
        <p className='mb-4 text-gray-800 font-semibold'>Tamu</p>
        <table className='w-full'>
          <thead className='bg-slate-100 h-8'>
            <tr className='text-gray-600'>
              <th className='font-semibold w-20'>No</th>
              <th className='font-semibold text-left'>Nama</th>
              <th className='font-semibold text-left'>Nomor Telepon</th>
              <th className='font-semibold text-left'>Pegawai</th>
              <th className='font-semibold'>Waktu</th>
            </tr>
          </thead>
          <tbody>
            {guests.map((guest, index) => (
              <tr className='h-12'>
                <td className='text-center'>{index + 1}</td>
                <td>{guest.name}</td>
                <td className='text-left'>{guest.phoneNumber}</td>
                <td className='text-left'>{guest.employee}</td>
                <td className='text-center'>
                  {guest.date} - {guest.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}
