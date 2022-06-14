import React, { memo, useContext } from 'react'
import { MetaDataContext } from '../global/floating'
const FloatProxy = memo((props: any) => {
  const { setMetadata } = useContext(MetaDataContext)
  setMetadata(props)
  return <div>FloatProxy</div>
})

export default FloatProxy
