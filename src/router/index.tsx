import { useRoutes } from 'react-router-dom'
import Index from '../pages/index'
import Foo from '../pages/foo'
export default () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Index />,
    },
    {
      path: 'foo',
      element: <Foo />,
    },
  ])
  return routes
}
