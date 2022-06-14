import { useEffect, useState } from 'react'
import TheImage from './components/TheImage'
import FloatContainer from './components/FloatContainer'
import Router from './router'
import { MetaDataContext, useMetaData } from './global/floating'
function App() {
  const [metaData, setMetaData] = useMetaData()
  useEffect(() => {
    console.log(metaData)
  }, [metaData])
  return (
    <MetaDataContext.Provider
      value={{
        metadata: metaData,
        setMetadata: setMetaData,
      }}
    >
      <div className='w-full  flex flex-col items-center '>
        <Router />
      </div>
      <FloatContainer slot={<TheImage />} />
    </MetaDataContext.Provider>
  )
}

export default App
