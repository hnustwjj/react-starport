import React, { memo, useContext } from 'react'
import { MetaDataContext } from '../global/floating'

const FloatContainer = memo((props: { slot: JSX.Element }) => {
  const { metadata } = useContext(MetaDataContext)
  return (
    <div
      overflow='hidden'
      {...metadata}
      transition='~ all ease-in-out'
    >
      {props.slot}
    </div>
  )
})

export default FloatContainer
