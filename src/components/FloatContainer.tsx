import React, { memo, useContext, useEffect, useState } from 'react'
import { MetaDataContext } from '../global/floating'

// 用于持有浮动的组件（用插槽显示）
// 将全局的metadata(样式）传递给slot外面的div
// div的m-!0是因为margin在offset计算中已经算进去了，如果有的话也不需要添加
const FloatContainer = memo((props: { slot: JSX.Element }) => {
  const { metadata, proxyEl } = useContext(MetaDataContext)
  // 保存真实盒子的偏移量
  const [offset, setOffset] = useState<{
    top?: string
    left?: string
  }>({})
  useEffect(() => {
    // 注意，需要监听proxyEl.current的改变，否则这个副作用不会执行
    const el = proxyEl?.current
    if (el) {
      setOffset({
        top: el.offsetTop + 'px',
        left: el.offsetLeft + 'px',
      })
      console.log(offset)
    }
  }, [proxyEl?.current])
  return (
    <div
      overflow='hidden'
      {...metadata}
      m='!0'
      transition='~ all'
      fixed='~'
      style={offset}
    >
      {props.slot}
    </div>
  )
})

export default FloatContainer
