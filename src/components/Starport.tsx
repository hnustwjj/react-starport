import React, { memo } from 'react'
export const StarportContext = React.createContext<{
  metadata?: any
  setMetadata?: any
  proxyElArr?: any
  setProxyElArr?: any
}>({})
const Starport = memo((props: { children: any }) => {
  const { children } = props
  const [metadata, setMetadata] = React.useState<any>({})
  const [proxyElArr, setProxyElArr] = React.useState<any>({})
  return (
    <StarportContext.Provider
      value={{ metadata, setMetadata, proxyElArr, setProxyElArr }}
    >
      {Array.isArray(children) ? children?.map(item => item) : children}
    </StarportContext.Provider>
  )
})

export default Starport
