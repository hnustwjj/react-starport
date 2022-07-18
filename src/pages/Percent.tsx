import { FloatProxy } from '../main'
import React, { memo } from 'react'
import { Link } from 'react-router-dom'
const Percent = memo(() => {
  return (
    <div w='full' h='full' flex='~ col' items='center'>
      <Link
        to='/transfer-list'
        className='no-underline px-10px py-5px rounded-md text-white'
        bg='[#4074ba]'
      >
        Go:transfer-list
      </Link>
      <div className='my-10'>支持百分比的样式属性</div>
      <FloatProxy
        port='1'
        className='w-[40%] h-[40%] rounded-md overflow-hidden '
      />
    </div>
  )
})

export default Percent
