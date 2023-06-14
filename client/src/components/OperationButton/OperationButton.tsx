import { useCalculatorContext } from '../../context/calculator'
import './OperationButton.css'

type Props = {
  operation: string
}

const OperationButton = ({ operation }: Props) => {
  const [, dispatch] = useCalculatorContext()

  const handleOperation = () => {
    switch (operation) {
      case 'C':
        dispatch({ type: 'CLEAR' })
        break
      case 'DEL':
        dispatch({ type: 'REMOVE_DIGIT' })
        break
      case '=':
        dispatch({ type: 'EVALUATE' })
        break
      default:
        dispatch({ type: 'SELECT_OPERATION', payload: { operation } })
    }
  }

  return (
    <button
      className={
        operation === '=' ? 'operation-button equal' : 'operation-button'
      }
      onClick={handleOperation}
    >
      {operation}
    </button>
  )
}

export default OperationButton
