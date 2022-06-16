import React, { memo, useState } from 'react'
import { useLocation } from 'react-router-dom'

// 待测的组件，放到FloatContainer中
const TheImage = memo((props: any) => {
  const [state, setState] = useState(false)
  return (
    <div onClick={() => setState(!state)} w='full' h='full'>
      {state ? (
        <img
          className='object-cover'
          src='https://images.unsplash.com/photo-1620315808304-66597517f188?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=512&ixid=MnwxfDB8MXxyYW5kb218MHw5NDczNDU2Nnx8fHx8fHwxNjQ4OTMyNTE4&ixlib=rb-1.2.1&q=80&w=512'
        />
      ) : (
        <img
          w='full'
          h='full'
          className='object-cover'
          src='https://images.unsplash.com/photo-1615247644823-a5f0d3b5f795?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=512&ixid=MnwxfDB8MXxyYW5kb218MHw5NDczNDU2Nnx8fHx8fHwxNjQ4OTMyNTMy&ixlib=rb-1.2.1&q=80&w=512'
        />
      )}
    </div>
  )
})

export default TheImage
