import { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()
  return (
    <div className='w-full  flex flex-col items-center '>
      <div className='py-50px'>home</div>
      <Outlet />
      <button
        className='bg-[#bfa] px-10px py-5px rounded-md text-black'
        onClick={() => navigate('/foo')}
      >
        foo
      </button>
    </div>
  )
}

export default App
