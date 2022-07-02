import React, { memo, PropsWithChildren, useContext, useEffect } from 'react'
import { StarportContext } from './Starport'
// 代理组件，用于修改全局的metaData
// 并且将proxyEl这个ref绑定到div上，以便于获取FloatContainer真实位置
const FloatProxy = memo((props: PropsWithChildren<{ port: string }>) => {
  const { setMetadata, metadata, setProxyElArr, proxyElArr } =
    useContext(StarportContext)
  const ref = React.useRef<HTMLDivElement>(null)
  useEffect(() => {
    setMetadata((pre: any) => ({ ...pre, [props.port]: props }))
    setProxyElArr((pre: any) => ({ ...pre, [props.port]: ref }))
    return () => {
      setProxyElArr((pre: any) => ({ ...pre, [props.port]: null }))
    }
  }, [props])
  // 将metadata传递给这个div，占据原本内容应该占据的面积
  return <div ref={ref} bg='white' {...metadata[props.port]} />
})

export default FloatProxy
