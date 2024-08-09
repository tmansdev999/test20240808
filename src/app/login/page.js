import React from 'react'
import LogInContainer from './LogInContainer'

const page = () => {
  return (
    <div className='w-full bg-bgcolor relative'>
      <div className='w-full h-[100vh]'>
        <div className='w-full h-full flex items-center justify-center'>
          <LogInContainer />
        </div>
      </div>

      <div className='absolute bottom-0 w-full h-20'>
        <img src='/images/ef1.png' className='w-full h-full overflow-hidden bg-cover' />
      </div>
      <div className='absolute bottom-0 w-full h-20'>
        <img src='/images/ef2.png' className='w-full h-full overflow-hidden bg-cover' />
      </div>

    </div>
  )
}

export default page