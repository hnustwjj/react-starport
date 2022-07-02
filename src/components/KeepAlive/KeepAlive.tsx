import React, { useRef, useEffect } from 'react'

import { useAliveScope } from './AliveScope'

const KeepAlive = (props: any) => {
  const { id, children } = props
  const getPortalElement = useAliveScope()
  const keepAliveRef = useRef<HTMLDivElement>(null)
  const appendPortalElement = () => {
    // 根据id获取到缓存的element，通过appendChild添加到div中
    const portalElement = getPortalElement(id, children)
    keepAliveRef.current!.appendChild(portalElement)
  }
  useEffect(() => {
    appendPortalElement()
  }, [])

  return <div w='full' h='full' ref={keepAliveRef} />
}

export default KeepAlive
