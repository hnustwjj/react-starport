import TheImage from './components/TheImage'
import FloatContainer from './components/FloatContainer'
import Router from './router'
import Starport from './components/Starport'
function App() {
  return (
    <Starport>
      <Router />
      <FloatContainer slot={<TheImage />} port='1' />
      <FloatContainer slot={<TheImage />} port='2' />
    </Starport>
  )
}

export default App
