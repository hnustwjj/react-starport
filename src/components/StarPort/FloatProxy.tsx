import React, { memo, useContext, useEffect } from 'react'
import { StarportContext } from './Starport'
const resolvedPromise = Promise.resolve()
// 代理组件，用于修改全局的metaData
// 并且将proxyEl这个ref绑定到div上，以便于获取FloatContainer真实位置
const FloatProxy = memo((props: any) => {
  const { setMetadata, setProxyElArr, landedMap } =
    useContext(StarportContext)

  const ref = React.useRef<HTMLDivElement>(null)
  const update = () => {
    const { width, height } = ref.current?.getBoundingClientRect() as any
    const style = {
      height,
      width,
    }
    setMetadata((pre: any) => ({
      ...pre,
      [props.port]: {
        ...props,
        style,
      },
    }))
  }
  useEffect(() => {
    // 每次props发生变化时，重新起飞
    landedMap[props.port] && landedMap[props.port](false)
    update()
    window.addEventListener('resize', update)
    setProxyElArr((pre: any) => ({ ...pre, [props.port]: ref }))
    return () => {
      // 在设置Metadata前先让Container重新获取slot，防止Proxy重新渲染完成后Container重新获取slot导致跳变
      // 放在微任务中，解决在同一个页面中跳变的问题
      resolvedPromise.then(
        () => landedMap[props.port] && landedMap[props.port](false)
      )
      setProxyElArr((pre: any) => ({ ...pre, [props.port]: null }))
      window.removeEventListener('resize', update)
    }
  }, [props])

  // 将metadata传递给这个div，占据原本内容应该占据的面积
  return <div ref={ref} {...props} />
})

export default FloatProxy
