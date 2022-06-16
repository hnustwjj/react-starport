import {
  createContext,
  MutableRefObject,
  useRef,
  useState,
} from 'react'
interface IMetaDataContext {
  metadata?: any
  proxyEl?: MutableRefObject<HTMLElement>
  setMetadata?: any
}
// 分享给子组件的上下文对象，用于提供metadata数据并且给子组件修改全局metadata的能力
export const MetaDataContext = createContext<IMetaDataContext>({})

// useMetaData的返回数据会作为全局内容共享，并提供setMetadata给useContext的深层组件进行全局更新
export const useMetaData = () => {
  const [metadata, setMetadata] = useState({})
  const proxyEl = useRef<HTMLElement>({} as HTMLElement)
  return { metadata, setMetadata, proxyEl }
}
