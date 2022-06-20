import React, {
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { createPortal } from 'react-dom'
import { useLocation } from 'react-router-dom'
import { MetaDataContext } from '../global/floating'

// 用于持有浮动的组件（用插槽显示）
// 将全局的metadata(样式）传递给slot外面的div
// div的m-!0是因为margin在offset计算中已经算进去了，如果有的话也不需要添加
// TODO:研究getBoundingCliengRect()的用法
let timer: any
const FloatContainer = memo((props: { slot: JSX.Element }) => {
  const location = useLocation()
  const { metadata, proxyEl } = useContext(MetaDataContext)
  const [landed, setLanded] = useState(false)
  // 起飞
  const liftOff = function () {
    setLanded(false)
  }
  // 落地
  const land = function () {
    clearTimeout(timer)
    timer = setTimeout(() => {
      setLanded(true)
    }, 500)

    // divRef.current.style.pointerEvents = 'none'
  }
  //TODO:解决dom操作是异步的问题，研究portal的用法（到底会不会渲染新的children）
  useEffect(() => {
    // 起飞
    if (landed === false) {
      const proxyList = proxyEl.current.children
      console.log('代理组件的子元素：', proxyList, proxyList.length)
      if (proxyList.length !== 0) {
        // 起飞的时候将proxyEl的子元素插入到divRef中
        const slot = proxyEl.current.removeChild(proxyList[0])
        console.log('开始起飞：', slot)
        divRef.current.appendChild(slot)
      }
      divRef.current.style.pointerEvents = 'auto'
    } else {
      // 下落
      const divList = divRef.current.children
      console.log('container的子元素', divList, divList.length)
      if (divList.length !== 0) {
        //落地之后将元素插入到浮动容器中
        const slot = divRef.current.removeChild(divList[0])
        console.log('开始下落：', slot)
        proxyEl.current.appendChild(slot)
      }
      divRef.current.style.pointerEvents = 'none'
    }
  }, [landed])

  const divRef = useRef<HTMLElement>({} as HTMLElement)
  function update() {
    liftOff()
    if (divRef.current) {
      const rect = proxyEl.current?.getBoundingClientRect?.()
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
    land()
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
      {children}
    </div>
  )
})

export default FloatContainer
