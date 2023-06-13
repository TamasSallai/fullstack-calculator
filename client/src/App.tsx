import { useReducer } from 'react'
import { reducer } from './state/reducer'
import DigitButton from './components/DigitButton/DigitButton'
import OperationButton from './components/OperationButton/OperationButton'
import './App.css'

const App = () => {
  const [{ operation, currNumber, prevNumber }, dispatch] = useReducer(
    reducer,
    {
      operation: '',
      currNumber: '',
      prevNumber: '',
    }
  )

  return (
    <div className="calculator-container">
      <div className="output">
        <div className="prev-operand">
          {prevNumber} {operation}
        </div>
        <div className="operand">{currNumber}</div>
      </div>
      <div className="grid-container">
        <OperationButton operation="C" dispatch={dispatch} />
        <OperationButton operation="%" dispatch={dispatch} />
        <OperationButton operation="DEL" dispatch={dispatch} />
        <OperationButton operation="÷" dispatch={dispatch} />
        <DigitButton digit="7" dispatch={dispatch} />
        <DigitButton digit="8" dispatch={dispatch} />
        <DigitButton digit="9" dispatch={dispatch} />
        <OperationButton operation="x" dispatch={dispatch} />
        <DigitButton digit="6" dispatch={dispatch} />
        <DigitButton digit="5" dispatch={dispatch} />
        <DigitButton digit="4" dispatch={dispatch} />
        <OperationButton operation="+" dispatch={dispatch} />
        <DigitButton digit="3" dispatch={dispatch} />
        <DigitButton digit="2" dispatch={dispatch} />
        <DigitButton digit="1" dispatch={dispatch} />
        <OperationButton operation="-" dispatch={dispatch} />
        <DigitButton digit="00" dispatch={dispatch} />
        <DigitButton digit="0" dispatch={dispatch} />
        <DigitButton digit="." dispatch={dispatch} />
        <OperationButton operation="=" dispatch={dispatch} />
      </div>
    </div>
  )
}

export default App
