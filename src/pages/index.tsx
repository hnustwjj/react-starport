import { Link } from 'react-router-dom'
import FloatProxy from '../components/FloatProxy'

function App() {
  return (
    <>
      <div className='w-full flex flex-col items-center '>
        <div className='py-50px'>index</div>
        <Link
          to='/foo'
          className='bg-[#bfa] px-10px py-5px rounded-md text-black'
        >
          foo
        </Link>
      </div>
      <FloatProxy w='50' h='50' m='50' rounded='xl' />
    </>
  )
}

export default App
