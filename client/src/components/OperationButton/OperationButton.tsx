import { Action } from '../../state/reducer'
import './OperationButton.css'

type Props = {
  operation: string
  dispatch: React.Dispatch<Action>
}

const OperationButton = ({ operation, dispatch }: Props) => {
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
