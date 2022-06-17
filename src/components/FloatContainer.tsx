import React, {
  memo,
  useContext,
  useEffect,
  useState,
  useRef,
} from 'react'
import { useLocation } from 'react-router-dom'
import { MetaDataContext } from '../global/floating'

// 用于持有浮动的组件（用插槽显示）
// 将全局的metadata(样式）传递给slot外面的div
// div的m-!0是因为margin在offset计算中已经算进去了，如果有的话也不需要添加
// TODO:研究getBoundingCliengRect()的用法
const FloatContainer = memo((props: { slot: JSX.Element }) => {
  const location = useLocation()
  const { metadata, proxyEl } = useContext(MetaDataContext)

  const divRef = useRef<HTMLElement>({} as HTMLElement)
  function update() {
    const rect = proxyEl.current?.getBoundingClientRect?.()
    divRef.current.style.top = (rect?.top ?? -999) + 'px'
    divRef.current.style.left = (rect?.left ?? -999) + 'px'
  }

  useEffect(() => {
    console.log(proxyEl.current)
    // 注意，需要监听proxyEl.current的改变，否则这个副作用不会执行
    //TODO:计算偏移量的函数
    update()
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('resize', update)
    }
  }, [location.pathname, metadata])

  return (
    <div
      {...metadata}
      m='!0'
      duration='500'
      absolute='~'
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
