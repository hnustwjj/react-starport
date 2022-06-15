import React, { memo, useState } from 'react'
import { Link } from 'react-router-dom'
import FloatProxy from '../components/FloatProxy'

const Foo = memo(() => {
  const [size, setSize] = useState(300)
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
          <button
            className='px-10px py-5px rounded-md text-white'
            onClick={() => setSize(size + 30)}
          >
            enlarge
          </button>
        </nav>
      </div>
      <FloatProxy
        style={{ width: size + 'px', height: size + 'px' }}
        m='5'
        rounded='xl'
        overflow='hidden'
      />
    </>
  )
})

export default Foo
