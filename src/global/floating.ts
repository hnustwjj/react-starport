import { createContext, useState } from 'react'
interface IMetaDataContext {
  metadata?: any
  setMetadata?: any
}
export const MetaDataContext = createContext<IMetaDataContext>({})
// useMetaData的返回数据会作为全局内容共享，并提供setMetadata给useContext的深层组件进行全局更新
export const useMetaData = () => {
  const [metadata, setMetadata] = useState({})
  return [metadata, setMetadata]
}
