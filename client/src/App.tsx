import { Calculator, useCalculatorContext } from './context/calculator'
import DigitButton from './components/DigitButton/DigitButton'
import OperationButton from './components/OperationButton/OperationButton'
import ServerButton from './components/ServerButton/ServerButton'
import './App.css'

const App = () => {
  const [{ operation, currNumber, prevNumber }, dispatch] =
    useCalculatorContext()

  const getResult = async () => {
    const response = await fetch('api/result')
    const data = (await response.json()) as Calculator
    dispatch({ type: 'LOAD_DATA', payload: { calculator: data } })
  }

  const postResult = async () => {
    if (operation === '' && currNumber === '' && prevNumber === '') {
      return
    }

    await fetch('api/result', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ operation, currNumber, prevNumber }),
    })
  }

  return (
    <div className="calculator-container">
      <div className="output">
        <div className="prev-number">
          {prevNumber} {operation}
        </div>
        <div className="curr-number">{currNumber}</div>
      </div>
      <div className="grid-container">
        <OperationButton operation="C" />
        <OperationButton operation="%" />
        <OperationButton operation="DEL" />
        <OperationButton operation="÷" />
        <DigitButton digit="7" />
        <DigitButton digit="8" />
        <DigitButton digit="9" />
        <OperationButton operation="x" />
        <DigitButton digit="6" />
        <DigitButton digit="5" />
        <DigitButton digit="4" />
        <OperationButton operation="+" />
        <DigitButton digit="3" />
        <DigitButton digit="2" />
        <DigitButton digit="1" />
        <OperationButton operation="-" />
        <DigitButton digit="00" />
        <DigitButton digit="0" />
        <DigitButton digit="." />
        <OperationButton operation="=" />
        <ServerButton label="Save Result" onClick={postResult} />
        <ServerButton label="Load Result" onClick={getResult} />
      </div>
    </div>
  )
}

export default App
