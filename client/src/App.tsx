import { useState } from 'react'
import './App.css'

type ResultData = {
  result: string
}

const App = () => {
  const [result, setResult] = useState<string>('')

  const getResult = async () => {
    const response = await fetch('api/result')
    const data = (await response.json()) as ResultData
    //The response should be guarded instead of type assertion
    if (data.result) setResult(data.result)
  }

  const postResult = async () => {
    await fetch('api/result', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ result }),
    })
  }

  return (
    <div>
      <input
        type="number"
        value={result}
        onChange={(e) => setResult(e.target.value)}
      />
      <button onClick={postResult}>Save result</button>
      <button onClick={getResult}>Get last result</button>
    </div>
  )
}

export default App
