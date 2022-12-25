import React, { createContext, useState, useContext } from 'react'
import { IdataContext, guestI, employeeI } from '../interfaces/data';

type Props = {
  children: React.ReactNode
}

const dataContext = createContext<IdataContext | null>(null)

const DataContextProvider = ({ children }: Props) => {
  const [guests, setGuests] = useState<guestI[] | []>([])
  const [employees, setEmployees] = useState<employeeI[]>([
    {
      id: '1',
      name: 'Muhamad Mulyana',
      position: 'CEO'
    },
    {
      id: '2',
      name: 'Herdian',
      position: 'CTO'
    },
    {
      id: '3',
      name: 'Aji Priyastomo',
      position: 'COO'
    }
  ])

  const addGuest = (payload: any) => {
    const newGuest = {...payload}
    setGuests((prev) => [
      ...prev,
      newGuest
    ])
  }

  const addEmployee = (payload: any) => {
    const newEmployee = {...payload}
    setEmployees((prev) => [
      ...prev,
      newEmployee
    ])
  } 

  const value = {
    guests,
    employees,
    addEmployee,
    addGuest
  }

  return <dataContext.Provider value={value}>{children}</dataContext.Provider>
}

export const UseDataContext = () => useContext(dataContext)

export default DataContextProvider
