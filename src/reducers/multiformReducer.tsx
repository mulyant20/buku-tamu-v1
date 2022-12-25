export const initState: stateType = {
  name: '',
  phoneNumber: '',
  desc: '',
  employee: '',
  date: '',
  time: '',
}

export const formReducer = (state: stateType, action: Action) => {
  switch (action.type) {
    case 'HANDLE_CHANGE':
      return { ...state, [action.payload.name]: action.payload.value }
    case 'RESET':
      return {
        name: '',
        phoneNumber: '',
        desc: '',
        employee: '',
        date: '',
        time: '',
      }
    default:
      return state
  }
}

export type stateType = {
  name: string
  phoneNumber: string
  desc: string
  employee: string
  date: string
  time: string
}

export enum ActionType {
  handleChange = 'HANDLE_CHANGE',
  reset = 'RESET',
}

export interface HandleChangeI {
  type: ActionType.handleChange
  payload: {
    name: string
    value: string
  }
}

export interface ResetI {
  type: ActionType.reset
}

export type Action = HandleChangeI | ResetI
