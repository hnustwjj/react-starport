import React, { memo, useState } from 'react'

// 待测的组件，放到FloatContainer中
const TheImage = memo((props: any) => {
  const [state, setState] = useState(0)
  console.log('re - render')
  return (
    <div className='w-full h-full relative' onClick={() => setState(state + 1)}>
      <img className='object-cover w-full h-full' src={props.src} />
      <span className='absolute bottom-0 left-1/2'>{state}</span>
    </div>
  )
})

export default TheImage
