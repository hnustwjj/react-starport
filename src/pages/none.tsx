import React, { memo } from 'react'
import { Link } from 'react-router-dom'

const None = memo(() => {
  return (
    <>
      <div className='w-full flex flex-col items-center'>
        <div className='py-50px'>Current:Bar</div>
        <nav flex='~' gap='2'>
          <Link
            to='/'
            className='px-10px py-5px rounded-md text-white no-underline'
            bg='[#4074ba]'
          >
            Go:home
          </Link>
        </nav>
      </div>
    </>
  )
})

export default None
