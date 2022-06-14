import { useRoutes } from 'react-router-dom'
import App from '../App'
import Foo from '../view/foo'
export default () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <App />,
    },
    {
      path: 'foo',
      element: <Foo />,
    },
  ])
  return routes
}
