import { Action } from '../../state/reducer'
import './DigitButton.css'

type Props = {
  digit: string
  dispatch: React.Dispatch<Action>
}

const DigitButton = ({ digit, dispatch }: Props) => {
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
