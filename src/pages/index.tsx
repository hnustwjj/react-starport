import { Link } from 'react-router-dom'
import FloatProxy from '../components/FloatProxy'

function App() {
  return (
    <>
      <div className='w-full flex flex-col items-center '>
        <div className='py-50px'>current:index</div>
        <Link
          to='/foo'
          className='no-underline px-10px py-5px rounded-md text-white'
        >
          go:foo
        </Link>
        <div className='mt-10 flex <md:(flex-col items-center) md:(justify-center w-[60%] items-center)'>
          <FloatProxy w='50' h='50' rounded='1/2' overflow='hidden' />
          <p flex='1' className='m-10'>
            现代多使用于魔兽世界中，戏称死了以后尸体躺在地上长期不消失的现象。而游戏职业术士作为最容易集火导致死亡的目标，被玩家戏称为“躺尸术”。
            《魔兽世界》中有一位术士ID为爱你就这样，其于游戏版本5.4初期为了去金团消费而买空淘宝金币，因此其得以红极一时。引申意：在集体宿舍中被人吵得睡不着觉，在床上干躺着，也称为躺尸，可见宿舍之吵环境之差。
            其它引申意：形容睡觉睡的死，一动不动的，不管外边有什么情况也不会有什么反应了！
          </p>
        </div>
      </div>
    </>
  )
}

export default App
