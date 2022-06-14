import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './router'
import { BrowserRouter } from 'react-router-dom'
import 'virtual:windi.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <div className='w-[100vw] h-[100vh] bg-black text-white'>
      <Router />
    </div>
  </BrowserRouter>
)
