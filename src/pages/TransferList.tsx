import React, { memo, useState } from 'react'
import { Link } from 'react-router-dom'
import FloatProxy from '../components/StarPort/FloatProxy'

const TransferList = memo(() => {
  const [listA, setListA] = useState(['1', '2', '3'])
  const [listB, setListB] = useState(['4', '5', '6'])
  const [mode, setMode] = useState(false)
  return (
    <div className='w-full flex flex-col items-center '>
      <div className='py-50px'>Current:TransferList</div>
      <nav flex='~' gap='2'>
        <Link
          to='/'
          className='no-underline px-10px py-5px rounded-md text-white'
          bg='[#4074ba]'
        >
          back
        </Link>
        <button
          className='px-10px py-5px rounded-md text-white'
          bg='[#4074ba]'
          onClick={() => setMode(!mode)}
        >
          Toggle
        </button>
      </nav>
      <div className='my-5'> 试试看点击图片会发生什么</div>
      <div flex='~'>
        <div className='flex flex-col items-center w-60 mr-5'>
          <span>ListA</span>
          {listA.map(item => (
            <FloatProxy
              onClick={() => {
                setListA(listA.filter(i => i !== item))
                setListB([...listB, item])
              }}
              key={item}
              port={item}
              className={`m-5 rounded-xl overflow-hidden ${
                mode ? 'w-60 h-50' : 'w-60 h-30'
              }`}
            />
          ))}
        </div>
        <div className='flex flex-col items-center w-60'>
          <span>ListB</span>
          {listB.map(item => (
            <FloatProxy
              onClick={() => {
                setListB(listB.filter(i => i !== item))
                setListA([...listA, item])
              }}
              key={item}
              port={item}
              className={`m-5 rounded-xl overflow-hidden ${
                mode ? 'w-60 h-50' : 'w-60 h-30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
})

export default TransferList
