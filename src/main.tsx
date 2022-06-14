import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'virtual:windi.css'
import App from './App'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <div className='w-[100vw] h-[100vh] bg-black text-white'>
      <App />
    </div>
  </BrowserRouter>
)
