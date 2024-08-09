import FileInput from '@/app/component/common/FileInput'
import SelectInput from '@/app/component/common/SelectInput'
import TextInput from '@/app/component/common/TextInput'
import React from 'react'
import CreateContainer from './CreateContainer'
import Heading from '@/app/component/common/Heading'

const page = () => {
    return (
        <div className='w-full pb-20 relative'>
            <div className='w-full min-h-[100vh] pt-16'>
                <div className='lg:w-4/5 md:w-[90%] w-full mx-auto'>
                    <div>
                        <Heading text={"Create A Movie"} />
                        <CreateContainer />
                    </div>
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