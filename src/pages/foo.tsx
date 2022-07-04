import React, { memo, useState } from 'react'
import { Link } from 'react-router-dom'
import FloatProxy from '../components/StarPort/FloatProxy'
const Foo = memo(() => {
  const [mode, setMode] = useState(false)
  return (
    <>
      <div className='w-full flex flex-col items-center'>
        <div className='py-50px'>Current:Foo</div>
        <FloatProxy port='13' w='96px' h='72px' />
        <nav flex="~" gap="2">
          <Link
            to='/'
            className='px-10px py-5px rounded-md text-white no-underline'
            bg="[#4074ba]"
          >
            Go:home
          </Link>
          <Link
            to='/transfer-list'
            className='no-underline px-10px py-5px rounded-md text-white'
            bg="[#4074ba]"
          >
            Go:transfer-list
          </Link>
          <Link
            to='/bar'
            className='no-underline px-10px py-5px rounded-md text-white'
            bg="[#4074ba]"
          >
            Go:bar
          </Link>
          <button
            className='px-10px py-5px rounded-md text-white'
            bg="[#4074ba]"
            onClick={() => setMode(!mode)}
          >
            Toggle
          </button>
        </nav>
      </div>
      <div flex='~ wrap' justify='center'>
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'].map(
          item => (
            <FloatProxy
              key={item}
              port={item}
              className={mode ? 'w-60 h-50' : 'w-60 h-30'}
              m='5'
              rounded='xl'
              overflow='hidden'
            />
          )
        )}
      </div>
    </>
  )
})

export default Foo
