import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import FloatProxy from '../components/FloatProxy'

import TheImage from '../components/TheImage'
const Foo = memo(() => {
  return (
    <>
      <div className='w-full flex flex-col items-center'>
        <div className='py-50px'>Foo</div>
        <Link
          to='/'
          className='bg-[#bfa] px-10px py-5px rounded-md text-black'
        >
          home
        </Link>
      </div>
      <FloatProxy w='100' h='100' m='10' rounded='xl' />
    </>
  )
})

export default Foo
