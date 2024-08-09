import React from 'react'
import UpdateContainer from './UpdateContainer'
import Heading from '@/app/component/common/Heading'
import axios from 'axios'


const getMovie = async (movieId) => {
    try {
        const response = await axios.get(`http://localhost:3000/api/movie/get?movieId=${movieId}`);
        return response.data.movie
    } catch (err) {
        return {};
    }
}


export default async function ({ params }) {
    const movie = await getMovie(params.movieId)
    return (
        <div className='w-full relative pb-20 bg-bgcolor'>
            <div className='w-full h-[100vh] pt-16'>
                <div className='lg:w-4/5 md:w-[90%] w-full mx-auto'>
                    <div>
                        <Heading text={"Update Movie"} />
                        <UpdateContainer movie={movie} />
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
