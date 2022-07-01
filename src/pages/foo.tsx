import React, { memo, useState } from 'react'
import { Link } from 'react-router-dom'
import FloatProxy from '../components/FloatProxy'
import { MyLink } from '../router'

const Foo = memo(() => {
  const [mode, setMode] = useState(false)
  return (
    <>
      <div className='w-full flex flex-col items-center'>
        <div className='py-50px'>current:Foo</div>
        <nav>
          <MyLink
            to='/'
            className='px-10px py-5px rounded-md text-white no-underline'
          >
            go:home
          </MyLink>
          <MyLink
            to='/bar'
            className='px-10px py-5px rounded-md text-white no-underline'
          >
            go:bar
          </MyLink>
          <button
            className='px-10px py-5px rounded-md text-white'
            onClick={() => setMode(!mode)}
          >
            toggle
          </button>
        </nav>
      </div>
      <div flex='~ wrap' justify='center'>
        <FloatProxy
          port='1'
          className={mode ? 'w-60 h-50' : 'w-60 h-30'}
          m='5'
          rounded='xl'
          overflow='hidden'
        />
        {/* <FloatProxy
          port='2'
          className={mode ? 'w-60 h-50' : 'w-60 h-30'}
          m='5'
          rounded='xl'
          overflow='hidden'
        />
        <FloatProxy
          port='3'
          className={mode ? 'w-60 h-50' : 'w-60 h-30'}
          m='5'
          rounded='xl'
          overflow='hidden'
        />
        <FloatProxy
          port='4'
          className={mode ? 'w-60 h-50' : 'w-60 h-30'}
          m='5'
          rounded='xl'
          overflow='hidden'
        />
        <FloatProxy
          port='5'
          className={mode ? 'w-60 h-50' : 'w-60 h-30'}
          m='5'
          rounded='xl'
          overflow='hidden'
        />
        <FloatProxy
          port='6'
          className={mode ? 'w-60 h-50' : 'w-60 h-30'}
          m='5'
          rounded='xl'
          overflow='hidden'
        />
        <FloatProxy
          port='7'
          className={mode ? 'w-60 h-50' : 'w-60 h-30'}
          m='5'
          rounded='xl'
          overflow='hidden'
        />
        <FloatProxy
          port='8'
          className={mode ? 'w-60 h-50' : 'w-60 h-30'}
          m='5'
          rounded='xl'
          overflow='hidden'
        />
        <FloatProxy
          port='9'
          className={mode ? 'w-60 h-50' : 'w-60 h-30'}
          m='5'
          rounded='xl'
          overflow='hidden'
        />
        <FloatProxy
          port='10'
          className={mode ? 'w-60 h-50' : 'w-60 h-30'}
          m='5'
          rounded='xl'
          overflow='hidden'
        />
        <FloatProxy
          port='11'
          className={mode ? 'w-60 h-50' : 'w-60 h-30'}
          m='5'
          rounded='xl'
          overflow='hidden'
        />
        <FloatProxy
          port='12'
          className={mode ? 'w-60 h-50' : 'w-60 h-30'}
          m='5'
          rounded='xl'
          overflow='hidden'
        /> */}
      </div>
    </>
  )
})

export default Foo
