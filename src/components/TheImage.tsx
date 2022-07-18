import React, { memo, useState } from 'react'

// 待测的组件，放到FloatContainer中
const TheImage = memo((props: any) => {
  const [state, setState] = useState(0)
  return (
    <div className='w-full h-full relative'>
      <img className='object-cover w-full h-full' src={props.src} />
      <span
        className='absolute bottom-0 left-1/2 text-white'
        onClick={e => {
          e.stopPropagation()
          setState(state + 1)
        }}
      >
        {state}
      </span>
    </div>
  )
})

export default TheImage
