import Link from 'next/link'
import React from 'react'

const EmptyState = () => {
    return (
        <div className='w-full h-[100vh] flex items-center justify-center'>
            <div className='flex flex-col items-center'>
                <h2 className='text-4xl mb-4'>Your Movie List is Empty</h2>
                <Link href={"movie/create"} className='px-4 py-2 rounded bg-green-800'>Add a new movie</Link>
            </div>
        </div>
    )
}

export default EmptyState