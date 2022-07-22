import React, { memo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FloatProxy from '../components/StarPort/FloatProxy'
const Home = memo(() => {
  const navigate = useNavigate()

  return (
    <>
      <div className='w-full flex flex-col items-center'>
        <div className='pt-50px '>Current:Foo</div>
        <FloatProxy port='13' w='96px' h='72px' />
        <nav flex='~' gap='2' m='y-10px'>
          <Link
            to='/transfer-list'
            className='no-underline px-10px py-5px rounded-md text-white'
            bg='[#4074ba]'
          >
            Go:transfer-list
          </Link>
          <Link
            to='/none'
            className='no-underline px-10px py-5px rounded-md text-white'
            bg='[#4074ba]'
          >
            Go:none
          </Link>
          <Link
            to='/percent'
            className='no-underline px-10px py-5px rounded-md text-white'
            bg='[#4074ba]'
          >
            Go:percent
          </Link>
        </nav>
      </div>
      <div flex='~ wrap' justify='center' m='t-10px'>
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'].map(item => (
          <FloatProxy
            key={item}
            port={item}
            className='w-60 h-30'
            m='5'
            rounded='xl'
            cursor='pointer'
            overflow='hidden'
            onClick={() => navigate('/detail/' + item)}
          />
        ))}
      </div>
    </>
  )
})

export default Home
