import { useRoutes } from 'react-router-dom'
import Index from '../pages/Home'
import Foo from '../pages/foo'
import Bar from '../pages/bar'
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
    {
      path: 'bar',
      element: <Bar />,
    },
  ])
  return routes
}
