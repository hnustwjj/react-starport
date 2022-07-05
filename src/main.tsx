import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import 'virtual:windi.css'
import 'uno.css'
export {default as Starport} from './components/StarPort/Starport'
export {default as FloatProxy} from './components/StarPort/FloatProxy'
export {default as FloatContainer} from './components/StarPort/FloatContainer'
import App from './App'
//TODO: 根据proxyEl获取到FloatContainer应该所在的位置

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <App />
  </HashRouter>
)
