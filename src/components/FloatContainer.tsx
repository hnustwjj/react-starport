import React, { memo, useContext } from 'react'
import { MetaDataContext } from '../global/floating'

// 用于持有浮动的组件（用插槽显示）
// 将全局的metadata(样式）传递给slot外面的div
const FloatContainer = memo((props: { slot: JSX.Element }) => {
  const { metadata } = useContext(MetaDataContext)
  return (
    <div overflow='hidden' {...metadata} transition='~ all' fixed='~'>
      {props.slot}
    </div>
  )
})

export default FloatContainer
