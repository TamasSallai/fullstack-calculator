import { useContext } from 'react'
import { CalculatorContext } from './state'

export const useCalculatorContext = () => useContext(CalculatorContext)
