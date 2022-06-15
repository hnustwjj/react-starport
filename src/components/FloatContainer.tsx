import React, {
  memo,
  useContext,
  useEffect,
  useState,
  useRef,
} from 'react'
import { MetaDataContext } from '../global/floating'

// 用于持有浮动的组件（用插槽显示）
// 将全局的metadata(样式）传递给slot外面的div
// div的m-!0是因为margin在offset计算中已经算进去了，如果有的话也不需要添加
const FloatContainer = memo((props: { slot: JSX.Element }) => {
  const { metadata, proxyEl } = useContext(MetaDataContext)
  // 保存真实盒子的偏移量
  // const [offset, setOffset] = useState<{
  //   top?: string
  //   left?: string
  // }>({})

  const divRef = useRef<HTMLElement>(null)
  useEffect(() => {
    // 注意，需要监听proxyEl.current的改变，否则这个副作用不会执行

    //TODO:计算偏移量的函数
    // setOffset({
    //   top: proxyEl?.current?.offsetTop + 'px',
    //   left: proxyEl?.current?.offsetLeft + 'px',
    // })
    if (divRef.current) {
      divRef.current.style.top = proxyEl?.current?.offsetTop + 'px'
      divRef.current.style.left = proxyEl?.current?.offsetLeft + 'px'
      console.log(proxyEl?.current, proxyEl?.current?.offsetTop)
    }
  }, [proxyEl?.current])

  // FIXME:setState好像很浪费性能，目前先用这种方法
  window.addEventListener('resize', () => {
    if (divRef.current) {
      divRef.current.style.top = proxyEl?.current?.offsetTop + 'px'
      divRef.current.style.left = proxyEl?.current?.offsetLeft + 'px'
    }
  })
  return (
    <div
      {...metadata}
      m='!0'
      duration='500'
      fixed='~'
      ref={divRef}
      style={{
        transition: 'all .5s ease-in-out',
        ...metadata?.style,
      }}
    >
      {props.slot}
    </div>
  )
})

export default FloatContainer
