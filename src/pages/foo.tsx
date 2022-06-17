import React, { memo, useState } from 'react'
import { Link } from 'react-router-dom'
import FloatProxy from '../components/FloatProxy'

const Foo = memo(() => {
  const [size, setSize] = useState(300)
  const [mode, setMode] = useState(false)
  return (
    <>
      <div className='w-full flex flex-col items-center'>
        <div className='py-50px'>current:Foo</div>
        <nav>
          <Link
            to='/'
            className='px-10px py-5px rounded-md text-white no-underline'
          >
            go:home
          </Link>
          <Link
            to='/bar'
            className='px-10px py-5px rounded-md text-white no-underline'
          >
            go:bar
          </Link>
          <button
            className='px-10px py-5px rounded-md text-white'
            onClick={() => setMode(!mode)}
          >
            toggle
          </button>
        </nav>
      </div>
      <FloatProxy
        className={mode ? 'w-50 h-50' : 'w-60 h-30'}
        m='5'
        rounded='xl'
        overflow='hidden'
      />
    </>
  )
})

export default Foo
