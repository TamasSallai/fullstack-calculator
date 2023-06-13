import { evaluate } from '../utils/evaluate'

type State = {
  operation: string
  currNumber: string
  prevNumber: string
}

export type Action =
  | { type: 'ADD_DIGIT'; payload: { digit: string } }
  | { type: 'REMOVE_DIGIT' }
  | { type: 'CLEAR' }
  | { type: 'SELECT_OPERATION'; payload: { operation: string } }
  | { type: 'EVALUATE' }

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'ADD_DIGIT': {
      const { currNumber } = state
      const { digit } = action.payload

      if (
        (digit === '0' || digit === '00') &&
        (currNumber === '0' || currNumber === '')
      ) {
        return state
      }

      if (digit === '.' && currNumber.includes('.')) {
        return state
      }

      return {
        ...state,
        currNumber: currNumber.concat(digit),
      }
    }
    case 'REMOVE_DIGIT': {
      const { currNumber } = state

      return {
        ...state,
        currNumber: currNumber.slice(0, -1),
      }
    }
    case 'CLEAR':
      return {
        operation: '',
        currNumber: '',
        prevNumber: '',
      }
    case 'SELECT_OPERATION': {
      const { currNumber, prevNumber } = state
      const { operation } = action.payload

      if (operation === '-' && prevNumber)
        if (currNumber === '' && prevNumber === '') return state

      if (currNumber === '' && prevNumber !== '') return { ...state, operation }

      if (currNumber !== '' && prevNumber === '')
        return {
          operation,
          prevNumber: currNumber,
          currNumber: '',
        }

      return {
        operation,
        currNumber: '',
        prevNumber: evaluate(operation, currNumber, prevNumber),
      }
    }
    case 'EVALUATE': {
      const { operation, currNumber, prevNumber } = state

      if (operation == '' || currNumber == '' || prevNumber == '') {
        return state
      }

      return {
        ...state,
        operation: '',
        prevNumber: '',
        currNumber: evaluate(operation, currNumber, prevNumber),
      }
    }
    default:
      return state
  }
}
