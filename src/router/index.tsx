import { useRoutes } from 'react-router-dom'
import Detail from '../pages/Detail'
import Home from '../pages/Home'
import None from '../pages/None'
import TransferList from '../pages/TransferList'
export default () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: 'detail/:id',
      element: <Detail />,
    },
    {
      path: 'none',
      element: <None />,
    },
    {
      path: 'transfer-list',
      element: <TransferList />,
    },
  ])
  return routes
}
