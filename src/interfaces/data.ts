export interface employeeI {
  id:           string
  name:         string
  position:     string
}

export interface guestI {
  id:           string
  name:         string
  phoneNumber:  number
  date:         string
  time:         string
  employee:     string
}

export interface IdataContext {
  guests:           guestI[]
  employees:        employeeI[]
  addEmployee:      (param: any) => any
  addGuest:         (param: any) => any
}
