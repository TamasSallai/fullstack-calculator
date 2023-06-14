import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { CalculatorProvider } from './context/calculator/state.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CalculatorProvider>
      <App />
    </CalculatorProvider>
  </React.StrictMode>
)
