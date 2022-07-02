import React, { useRef, useEffect } from 'react'

import { useAliveScope } from './AliveScope'

const KeepAlive = (props: any) => {
  const { id, children } = props
  const getPortalElement = useAliveScope()
  const keepAliveRef = useRef<HTMLDivElement>(null)
  const appendPortalElement = () => {
    const portalElement = getPortalElement(id, children)
    keepAliveRef.current!.appendChild(portalElement)
  }
  useEffect(() => {
    appendPortalElement()
  }, [])

  return <div w='full' h='full' ref={keepAliveRef} />
}

export default KeepAlive
