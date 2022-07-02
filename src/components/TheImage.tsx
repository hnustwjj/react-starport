import React, { memo, useState } from 'react'

// 待测的组件，放到FloatContainer中
const TheImage = memo((props: any) => {
  const [state, setState] = useState(0)
  return (
    <div w='full' h='full' relative='~' onClick={() => setState(state + 1)}>
      <img w='full' h='full' className='object-cover' src={props.src} />
      <span absolute='~' bottom='0' left='1/2'>
        {state}
      </span>
    </div>
  )
})

export default TheImage
