import React, { memo } from 'react'
import { Link } from 'react-router-dom'

const Bar = memo(() => {
  return (
    <>
      <div className='w-full flex flex-col items-center'>
        <div className='py-50px'>current:Bar</div>
        <nav>
          <Link
            to='/'
            className='px-10px py-5px rounded-md text-white no-underline'
          >
            go:home
          </Link>
          <Link
            to='/transfer-list'
            className='px-10px py-5px rounded-md text-white no-underline'
          >
            go:transfer-list
          </Link>
        </nav>
      </div>
    </>
  )
})

export default Bar
