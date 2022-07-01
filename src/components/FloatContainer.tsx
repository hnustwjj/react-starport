import React, { memo, useContext, useEffect, useMemo, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useLocation } from 'react-router-dom'
import { StarportContext } from './Starport'

// 用于持有浮动的组件（用插槽显示）
// 将全局的metadata(样式）传递给slot外面的div
// div的m-!0是因为margin在offset计算中已经算进去了，如果有的话也不需要添加
// TODO:研究getBoundingCliengRect()的用法
const FloatContainer = memo((props: { slot: JSX.Element; port: string }) => {
  const location = useLocation()
  const { metadata, proxyElArr } = useContext(StarportContext)
  const divRef = useRef<HTMLElement>({} as HTMLElement)
  //TODO:在有滚动的情况下切换，偏移量出现问题（重大bug）
  function update() {
    if (divRef.current) {
      const rect = proxyElArr[props.port]?.current?.getBoundingClientRect?.()
      if (rect) {
        divRef.current.style.top = (rect?.top ?? -999) + 'px'
        divRef.current.style.left = (rect?.left ?? -999) + 'px'
        //复位
        divRef.current.style.transform = 'translateY(0)'
        divRef.current.style.opacity = '1'
      } else {
        divRef.current.style.transform = 'translateY(-100px)'
        divRef.current.style.opacity = '0'
      }
    }
  }

  useEffect(() => {
    update()
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('resize', update)
    }
  }, [location.pathname, metadata])
  const children = useMemo(() => props.slot, [])
  return (
    <div
      {...metadata[props.port]}
      m='!0'
      duration='500'
      absolute='~'
      ref={divRef}
      style={{
        transition: 'all .5s ease-in-out',
        ...metadata[props.port]?.style,
      }}
    >
      {children}
    </div>
  )
})

export default FloatContainer
