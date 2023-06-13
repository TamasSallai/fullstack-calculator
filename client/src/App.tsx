import { useState } from 'react'
import './App.css'

type ResultData = {
  result: string
}

const App = () => {
  const [result, setResult] = useState<string>('')

  const handleFetchResult = async () => {
    const response = await fetch('api/result')
    const data = (await response.json()) as ResultData
    //The response should be guarded instead of type assertion
    if (data.result) setResult(data.result)
  }

  return (
    <div>
      <input
        type="number"
        value={result}
        onChange={(e) => setResult(e.target.value)}
      />
      <button>Save result</button>
      <button onClick={handleFetchResult}>Get last result</button>
    </div>
  )
}

export default App
