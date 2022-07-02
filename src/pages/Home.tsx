import { Link } from 'react-router-dom'
import FloatProxy from '../components/StarPort/FloatProxy'
import { useState } from 'react'
import React, { memo } from 'react'

const Home = memo(() => {
  const [size, setSize] = useState(200)
  return (
    <>
      <div className='w-full flex flex-col items-center '>
        <div className='py-50px'>current:index</div>
        <nav>
          <Link
            to='/foo'
            className='no-underline px-10px py-5px rounded-md text-white'
          >
            go:foo
          </Link>
          <button
            className='px-10px py-5px rounded-md text-white'
            onClick={() => setSize(size + 30)}
          >
            enlarge
          </button>
        </nav>
        <div className='mt-10 flex <md:(flex-col items-center) md:(justify-center w-[60%] items-center)'>
          <p flex='1' className='m-10'>
            现代多使用于魔兽世界中，戏称死了以后尸体躺在地上长期不消失的现象。而游戏职业术士作为最容易集火导致死亡的目标，被玩家戏称为“躺尸术”。
            《魔兽世界》中有一位术士ID为爱你就这样，其于游戏版本5.4初期为了去金团消费而买空淘宝金币，因此其得以红极一时。引申意：在集体宿舍中被人吵得睡不着觉，在床上干躺着，也称为躺尸，可见宿舍之吵环境之差。
            其它引申意：形容睡觉睡的死，一动不动的，不管外边有什么情况也不会有什么反应了！
          </p>
          <FloatProxy
            port='1'
            style={{ width: size + 'px', height: size + 'px' }}
            rounded='1/2'
            overflow='hidden'
          />
        </div>
        <div className='mt-10 flex <md:(flex-col items-center) md:(justify-center w-[60%] items-center)'>
          <FloatProxy
            port='2'
            style={{ width: size + 'px', height: size + 'px' }}
            rounded='1/2'
            overflow='hidden'
          />
          <p flex='1' className='m-10'>
            现代多使用于魔兽世界中，戏称死了以后尸体躺在地上长期不消失的现象。而游戏职业术士作为最容易集火导致死亡的目标，被玩家戏称为“躺尸术”。
            《魔兽世界》中有一位术士ID为爱你就这样，其于游戏版本5.4初期为了去金团消费而买空淘宝金币，因此其得以红极一时。引申意：在集体宿舍中被人吵得睡不着觉，在床上干躺着，也称为躺尸，可见宿舍之吵环境之差。
            其它引申意：形容睡觉睡的死，一动不动的，不管外边有什么情况也不会有什么反应了！
          </p>
        </div>
        <div className='mt-10 flex <md:(flex-col items-center) md:(justify-center w-[60%] items-center)'>
          <p flex='1' className='m-10'>
            现代多使用于魔兽世界中，戏称死了以后尸体躺在地上长期不消失的现象。而游戏职业术士作为最容易集火导致死亡的目标，被玩家戏称为“躺尸术”。
            《魔兽世界》中有一位术士ID为爱你就这样，其于游戏版本5.4初期为了去金团消费而买空淘宝金币，因此其得以红极一时。引申意：在集体宿舍中被人吵得睡不着觉，在床上干躺着，也称为躺尸，可见宿舍之吵环境之差。
            其它引申意：形容睡觉睡的死，一动不动的，不管外边有什么情况也不会有什么反应了！
          </p>
          <FloatProxy
            port='3'
            style={{ width: size + 'px', height: size + 'px' }}
            rounded='1/2'
            overflow='hidden'
          />
        </div>
        <div className='mt-10 flex <md:(flex-col items-center) md:(justify-center w-[60%] items-center)'>
          <FloatProxy
            port='4'
            style={{ width: size + 'px', height: size + 'px' }}
            rounded='1/2'
            overflow='hidden'
          />
          <p flex='1' className='m-10'>
            现代多使用于魔兽世界中，戏称死了以后尸体躺在地上长期不消失的现象。而游戏职业术士作为最容易集火导致死亡的目标，被玩家戏称为“躺尸术”。
            《魔兽世界》中有一位术士ID为爱你就这样，其于游戏版本5.4初期为了去金团消费而买空淘宝金币，因此其得以红极一时。引申意：在集体宿舍中被人吵得睡不着觉，在床上干躺着，也称为躺尸，可见宿舍之吵环境之差。
            其它引申意：形容睡觉睡的死，一动不动的，不管外边有什么情况也不会有什么反应了！
          </p>
        </div>
        <div className='mt-10 flex <md:(flex-col items-center) md:(justify-center w-[60%] items-center)'>
          <p flex='1' className='m-10'>
            现代多使用于魔兽世界中，戏称死了以后尸体躺在地上长期不消失的现象。而游戏职业术士作为最容易集火导致死亡的目标，被玩家戏称为“躺尸术”。
            《魔兽世界》中有一位术士ID为爱你就这样，其于游戏版本5.4初期为了去金团消费而买空淘宝金币，因此其得以红极一时。引申意：在集体宿舍中被人吵得睡不着觉，在床上干躺着，也称为躺尸，可见宿舍之吵环境之差。
            其它引申意：形容睡觉睡的死，一动不动的，不管外边有什么情况也不会有什么反应了！
          </p>
          <FloatProxy
            port='5'
            style={{ width: size + 'px', height: size + 'px' }}
            rounded='1/2'
            overflow='hidden'
          />
        </div>
        <div className='mt-10 flex <md:(flex-col items-center) md:(justify-center w-[60%] items-center)'>
          <FloatProxy
            port='6'
            style={{ width: size + 'px', height: size + 'px' }}
            rounded='1/2'
            overflow='hidden'
          />
          <p flex='1' className='m-10'>
            现代多使用于魔兽世界中，戏称死了以后尸体躺在地上长期不消失的现象。而游戏职业术士作为最容易集火导致死亡的目标，被玩家戏称为“躺尸术”。
            《魔兽世界》中有一位术士ID为爱你就这样，其于游戏版本5.4初期为了去金团消费而买空淘宝金币，因此其得以红极一时。引申意：在集体宿舍中被人吵得睡不着觉，在床上干躺着，也称为躺尸，可见宿舍之吵环境之差。
            其它引申意：形容睡觉睡的死，一动不动的，不管外边有什么情况也不会有什么反应了！
          </p>
        </div>
      </div>
    </>
  )
})

export default Home
