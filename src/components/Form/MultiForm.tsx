import { nanoid } from '@reduxjs/toolkit'
import React, { useReducer, Reducer, useMemo } from 'react'
import { UseDataContext } from '../../context/dataContext'
import { IdataContext } from '../../interfaces/data'
import {
  Action,
  ActionType,
  formReducer,
  initState,
  stateType,
} from '../../reducers/multiformReducer'

type Props = {
  step: number
  handleStep: (param: any) => any
  reset: (param?: any) => any
}

export default function MultiForm({ step, handleStep, reset }: Props) {
  const [state, dispatch] = useReducer<Reducer<stateType, Action>>(formReducer, initState)
  const { addGuest } = UseDataContext() as IdataContext
  const handleChangeDispatch = (payload: any) => {
    dispatch({ type: ActionType.handleChange, payload })
  }

  const isNameValid = useMemo(() => {
    const nameRegex = /^[a-zA-Z ]+$/
    if (state.name !== '') {
      if (nameRegex.test(state.name)) {
        return true
      } else {
        handleChangeDispatch({ name: 'isNameValid', value:'*Nama hanya boleh huruf'})
        return false
      }
    } else {
      handleChangeDispatch({ name: 'isNameValid', value:'*Nama tidak boleh kosong'})
      return false
    }
  }, [state.name])

  const isNumberValid = useMemo(() => {
    const numberRegex = /^0{1}\d{9,11}$/
    if (state.phoneNumber !== '' && state.phoneNumber.charAt(0) === '0') {
      if (numberRegex.test(state.phoneNumber)) {
        return true
      } else {
        handleChangeDispatch({ name: 'isNumberValid', value:'*Nomor telepon hanya boleh 10 sampai 12 digit'})
        return false
      }
    } else {
      handleChangeDispatch({ name: 'isNumberValid',  value:'*Nomor telepon Harus diawali 0'})
      return false
    }
  }, [state.phoneNumber])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    handleChangeDispatch({ name, value })
  }

  const save = () => {
    const payload = {
      id: nanoid(),
      name: state.name,
      phoneNumber: state.phoneNumber,
      date: state.date,
      time: state.time,
      employee: state.employee,
    }
    addGuest(payload)
    dispatch({ type: ActionType.reset })
    reset()
  }

  return (
    <div className='w-full h-fit'>
      {form(
        step,
        state,
        handleChange,
        handleStep,
        save,
        isNameValid,
        isNumberValid
      )}
    </div>
  )
}

const form = (
  step: number,
  state: any,
  handleChange: any,
  handleSteps: any,
  save: any,
  isNameValid: boolean,
  isNumberValid: boolean
) => {
  switch (step) {
    case 1:
      return (
        <>
          <div className='w-full h-fit relative mt-8'>
            <p className='text-gray-500 font-semibold mb-4'>Nama anda</p>
            <input
              type='text'
              name='name'
              className='w-full px-4 py-3 rounded border border-gray-200 text-gray-600'
              value={state.name}
              onChange={handleChange}
            />
            {!isNameValid ? (
              <p className='absolute -bottom-6 text-sm text-red-600'>
                {state.isNameValid}
              </p>
            ) : null}
          </div>
          <div className='w-full h-fit relative mt-8'>
            <p className='text-gray-500 font-semibold mb-4'>Nomor Telepon</p>
            <input
              type='text'
              name='phoneNumber'
              className='w-full px-4 py-3 rounded border border-gray-200 text-gray-600'
              value={state.phoneNumber}
              onChange={handleChange}
            />
            {!isNumberValid ? (
              <p className='absolute -bottom-6 text-sm text-red-600'>
                {state.isNumberValid}
              </p>
            ) : null}
          </div>
          <div className='flex justify-end mt-6'>
            <button
              className='px-8 py-2 rounded bg-gray-100 text-gray-600'
              onClick={() => handleSteps('NEXT')}
            >
              next
            </button>
          </div>
        </>
      )
    case 2:
      return (
        <>
          <p className='text-gray-500 font-semibold mb-4'>Nama Pegawai</p>
          <input
            type='text'
            name='employee'
            className='w-full px-4 py-3 rounded border border-gray-200 text-gray-600'
            value={state.employee}
            onChange={handleChange}
          />
          <div className='mt-4 flex justify-between gap-4'>
            <div className='flex-1'>
              <p className='text-gray-500 font-semibold mb-4 mt-8'>Tanggal</p>
              <input
                type='date'
                name='date'
                className='w-full px-4 py-3 rounded border border-gray-200 text-gray-600'
                value={state.date}
                onChange={handleChange}
              />
            </div>
            <div className='flex-1'>
              <p className='text-gray-500 font-semibold mb-4 mt-8'>Waktu</p>
              <input
                type='time'
                name='time'
                className='w-full px-4 py-3 rounded border border-gray-200 text-gray-600'
                value={state.time}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='flex justify-between mt-6'>
            <button
              className='px-8 py-2 rounded bg-gray-100 text-gray-600'
              onClick={() => handleSteps('')}
            >
              back
            </button>
            <button
              className='px-8 py-2 rounded bg-gray-100 text-gray-600'
              onClick={() => handleSteps('NEXT')}
            >
              next
            </button>
          </div>
        </>
      )
    case 3:
      return (
        <>
          <p className='text-gray-500 font-semibold mb-4'>Keperluan</p>
          <textarea
            name='desc'
            className='w-full px-4 py-3 h-[184px] rounded border border-gray-200 text-gray-600'
            value={state.desc}
            onChange={handleChange}
          ></textarea>
          <div className='flex justify-between mt-6'>
            <button
              className='px-8 py-2 rounded bg-gray-100 text-gray-600'
              onClick={() => handleSteps('')}
            >
              kembali
            </button>
            <button
              className='px-8 py-2 rounded bg-blue-700 text-white'
              onClick={save}
            >
              Simpan
            </button>
          </div>
        </>
      )
    default:
      return null
  }
}