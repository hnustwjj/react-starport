import { LinkProps, useNavigate, useRoutes } from 'react-router-dom'
import Index from '../pages/Home'
import Foo from '../pages/foo'
import Bar from '../pages/bar'
import { useContext, useEffect } from 'react'
import { StarportContext } from '../components/Starport'
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

export const MyLink = (props: LinkProps) => {
  const { to, children } = props
  const navigator = useNavigate()
  const { landedMap } = useContext(StarportContext)
  const transparent = async () => {
    for (const key in landedMap) {
      if (landedMap.hasOwnProperty(key) && landedMap[key] instanceof Function) {
        landedMap[key](false)
        console.log('执行了set')
      }
    }
    // await Promise.resolve().then(() => {})
    navigator(to)
  }
  return (
    <a onClick={() => transparent()}>
      {Array.isArray(children) ? children.map(item => item) : children}
    </a>
  )
}
