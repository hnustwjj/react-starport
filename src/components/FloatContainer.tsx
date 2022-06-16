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
// TODO:研究getBoundingCliengRect()的用法
const FloatContainer = memo((props: { slot: JSX.Element }) => {
  const { metadata, proxyEl } = useContext(MetaDataContext)

  const divRef = useRef<HTMLElement>({} as HTMLElement)
  function update() {
    // 暂时只能找到用延时的方法获取偏移量（不然会因为proxyEl的动画导致获取不到正确的偏移量）
    divRef.current.style.top =
      (proxyEl?.current as HTMLElement).getBoundingClientRect().top +
      'px'
    divRef.current.style.left =
      (proxyEl?.current as HTMLElement).getBoundingClientRect().left +
      'px'
  }

  useEffect(() => {
    // 注意，需要监听proxyEl.current的改变，否则这个副作用不会执行
    //TODO:计算偏移量的函数
    update()
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('resize', update)
    }
  }, [proxyEl?.current, metadata.style])

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
