import React, {
  memo,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { createPortal } from 'react-dom'
import { useLocation } from 'react-router-dom'
import KeepAlive from './KeepAlive'
import { StarportContext } from './Starport'

// 用于持有浮动的组件（用插槽显示）
// 将全局的metadata(样式）传递给slot外面的div
// div的m-!0是因为margin在offset计算中已经算进去了，如果有的话也不需要添加
// TODO:研究getBoundingCliengRect()的用法
// TODO:研究onTransitionEnd()的用法
let timer = {} as any
const FloatContainer = memo(
  (props: { slot: () => JSX.Element; port: string }) => {
    const location = useLocation()
    const { metadata, proxyElArr, setLandedMap, landedMap } =
      useContext(StarportContext)
    const [landed, setLanded] = useState(false)
    const divRef = useRef<HTMLElement>({} as HTMLElement)
    // 将landedSet函数保存到context中，在路由跳转前使用
    useEffect(() => {
      setLandedMap({ ...landedMap, [props.port]: setLanded })
      return () => {
        setLandedMap({ ...landedMap, [props.port]: null })
      }
    }, [])
    //TODO:在有滚动的情况下切换，偏移量出现问题（重大bug）
    function update() {
      setLanded(false)
      if (divRef.current) {
        const rect = proxyElArr[props.port]?.current?.getBoundingClientRect?.()
        if (rect && proxyElArr[props.port]?.current) {
          divRef.current.style.top = rect?.top + 'px'
          divRef.current.style.left = rect?.left + 'px'
          divRef.current.style.opacity = '1'
          divRef.current.style.transform = 'translateY(0px)'
        } else {
          divRef.current.style.opacity = '0'
          divRef.current.style.transform = 'translateY(-50px)'
          divRef.current.style.pointerEvents = 'none'
        }
      }
      clearTimeout(timer[props.port])
      timer[props.port] = setTimeout(() => {
        setLanded(true)
        console.log('动画结束')
      }, 900)
    }
    useEffect(() => {
      console.log(!landed ? '起飞' : '落地')
    }, [landed])
    useEffect(() => {
      update()
      window.addEventListener('resize', update)
      return () => {
        window.removeEventListener('resize', update)
      }
    }, [location.pathname, metadata])
    return (
      <div
        {...metadata[props.port]}
        m='!0'
        absolute='~'
        transition='all'
        duration='900'
        ref={divRef}
        style={{
          ...metadata[props.port]?.style,
        }}
      >
        {landed && proxyElArr[props.port]?.current ? (
          createPortal(
            <KeepAlive id={props.port}>
              <props.slot />
            </KeepAlive>,
            proxyElArr[props.port]?.current
          )
        ) : (
          <KeepAlive id={props.port}>
            <props.slot />
          </KeepAlive>
        )}
      </div>
    )
  }
)

export default FloatContainer
