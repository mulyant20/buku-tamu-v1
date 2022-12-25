import React, { useEffect, useState } from 'react'
import { MultiForm } from '../../components/Form'
import { Layout } from '../../components/Layout'
import { Progress } from '../../components/Progress'
import contactPng from '../../assets/contact.png'

type Props = {}

export default function GuestMode({}: Props) {
  const [step, setStep] = useState<number>(0)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    setStep(1)
  }, [])

  const handleStep = (type?: string) => {
    if (type === 'NEXT' && step < 3) {
      setStep((prev) => prev + 1)
    } else if (step > 1) {
      setStep((prev) => prev - 1)
    }
  }

  const reset = () => {
    setIsOpen(false)
    setStep(1)
  }

  return (
    <Layout withoutTab>
      {isOpen ? (
        <div className='max-w-[560px] mx-auto p-4 mt-20 border border-gray-200 rounded-lg bg-white'>
          <Progress total={3} step={step} />
          <MultiForm step={step} handleStep={handleStep} reset={reset} />
        </div>
      ) : (
        <div className='w-full h-fit mt-20'>
          <img
            src={contactPng}
            alt='contact'
            className='h-72 object-contain mx-auto'
          />
          <h1 className='text-lg text-gray-600 font-semibold max-w-[200px] mx-auto text-center mb-2'>
            Selamat Datang Silahkan Isi Form Disini
          </h1>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='block mx-auto items-center justify-center px-6 py-2 bg-blue-800 text-white rounded'
          >
            Next
          </button>
        </div>
      )}
    </Layout>
  )
}
