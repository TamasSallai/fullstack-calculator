import { useCalculatorContext } from '../../context/calculator'
import './DigitButton.css'

type Props = {
  digit: string
}

const DigitButton = ({ digit }: Props) => {
  const [, dispatch] = useCalculatorContext()

  return (
    <button
      className="digit-button"
      onClick={() => dispatch({ type: 'ADD_DIGIT', payload: { digit } })}
    >
      {digit}
    </button>
  )
}

export default DigitButton
