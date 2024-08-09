import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MovieCard = ({ movie }) => {
    return (
        <Link href={`/movie/update/${movie._id}`} className='w-full p-2 bg-cardcolor rounded'>
            <div className='w-full' style={{ aspectRatio: "0.8" }}>
                <img src={`/uploads/${movie.banner}`} className='w-full h-full overflow-hidden object-cover rounded' />
            </div>
            <div className='mt-3'>
                <h2 className='text-md font-medium'>{movie.title}</h2>
                <h3 className='text-sm font-normal text-gray-400'>{movie.publish_year}</h3>
            </div>
        </Link>
    )
}

export default MovieCard