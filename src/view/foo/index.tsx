import React, { memo } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Foo = memo(() => {
  const navigate = useNavigate()
  return (
    <div className='w-full  flex flex-col items-center'>
      <div className='py-50px'>Foo</div>
      <button
        className='bg-[#bfa] px-10px py-5px rounded-md text-black'
        onClick={() => navigate('/')}
      >
        home
      </button>
    </div>
  )
})

export default Foo
