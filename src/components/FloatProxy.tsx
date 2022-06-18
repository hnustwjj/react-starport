import React, { memo, useContext, useEffect } from 'react'
import { MetaDataContext } from '../global/floating'
function areEqual(prevProps: any, nextProps: any) {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps)
}
// 代理组件，用于修改全局的metaData
// 并且将proxyEl这个ref绑定到div上，以便于获取FloatContainer真实位置
const FloatProxy = memo((props: any) => {
  const { setMetadata, metadata, proxyEl } =
    useContext(MetaDataContext)
  useEffect(() => {
    setMetadata(props)
  })
  // 将metadata传递给这个div，占据原本内容应该占据的面积
  // TODO:监听Proxy盒子的位置改变，不然duration会导致container中获取的高度出现问题
  return <div ref={proxyEl} {...metadata} />
}, areEqual)

export default FloatProxy
