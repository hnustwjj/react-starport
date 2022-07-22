import React, { useContext, createContext, useState, ReactElement } from 'react'
import ReactDOM from 'react-dom'

const AliveScopeContext = createContext<any>({})

// 用于缓存children，
export const AliveScope = (props: any) => {
  const [nodes, setNodes] = useState<any>({})
  const { children } = props
  const getPortalElement = (id: any, children: ReactElement) => {
    if (!nodes[id]) {
      // 传送children到element
      const element = document.createElement('div')
      element.style.width = '100%'
      element.style.height = '100%'

      setNodes((prevNodes: any) => ({
        ...prevNodes,
        [id]: { children, element },
      }))
      return element
    }
    return nodes[id].element
  }

  return (
    <AliveScopeContext.Provider value={getPortalElement}>
      {children}
      {Object.entries<any>(nodes).map(([id, { children, element }]) => (
        <React.Fragment key={id}>
          {ReactDOM.createPortal(children, element)}
        </React.Fragment>
      ))}
    </AliveScopeContext.Provider>
  )
}

export const useAliveScope = () => useContext(AliveScopeContext)
