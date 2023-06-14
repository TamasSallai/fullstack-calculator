import { createContext, useReducer } from 'react'
import { Action, reducer } from './reducer'

export type Calculator = {
  operation: string
  currNumber: string
  prevNumber: string
}

const initialState = {
  operation: '',
  currNumber: '',
  prevNumber: '',
}

export const CalculatorContext = createContext<
  [Calculator, React.Dispatch<Action>]
>([initialState, () => initialState])

interface Props {
  children: React.ReactNode
}

export const CalculatorProvider = ({ children }: Props) => {
  const [calculator, dispatch] = useReducer(reducer, initialState)

  return (
    <CalculatorContext.Provider value={[calculator, dispatch]}>
      {children}
    </CalculatorContext.Provider>
  )
}
