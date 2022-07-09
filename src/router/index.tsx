import { useRoutes } from 'react-router-dom'
import Detail from '../pages/detail'
import Home from '../pages/Home'
import None from '../pages/none'
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
