export const evaluate = (
  operation: string,
  currNumber: string,
  prevNumber: string
) => {
  const curr = parseFloat(currNumber)
  const prev = parseFloat(prevNumber)

  if (isNaN(prev) || isNaN(curr)) return ''

  let result = 0
  switch (operation) {
    case '+':
      result = prev + curr
      break
    case '-':
      result = prev - curr
      break
    case 'x':
      result = prev * curr
      break
    case '÷':
      result = prev / curr
      break
    case '%':
      result = prev % curr
      break
    default:
      return ''
  }

  return result.toString()
}
