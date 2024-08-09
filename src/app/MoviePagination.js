"use client";

import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation'

const MoviePagination = ({ movies }) => {


  const [page, setPage] = useState(1);
  const searchParams = useSearchParams()

  const search = searchParams.get('search')


  useEffect(() => {
    console.log(searchParams.get("page"));
    setPage(() => {
      return Number(searchParams.get("page")) || 1
    })
  }, [searchParams])

  console.log(process.env.NEXT_PUBLIC_LIMIT_PAGINATION)


  return (
    <div className='w-full mt-12 flex items-center justify-center'>
      {
        !(page == 1 && movies?.length < process.env.NEXT_PUBLIC_LIMIT_PAGINATION) && <div className='flex gap-4 justify-center items-center'>
          {
            page > 1 && <Link href={`?page=${Math.max(page - 1, 1)}`} className='text-md font-semibold'>Prev</Link>
          }
          <Link href={`?page=${page}`} className={`p-2 px-4 text-md font-semibold rounded bg-primary`}>{page}</Link>
          {
            movies?.length == process.env.NEXT_PUBLIC_LIMIT_PAGINATION && <>
              {/* <Link href={`?page=${page}`} className='p-2 px-4 text-md font-semibold rounded  bg-cardcolor'>{page + 1}</Link> */}
              <Link href={`?page=${page + 1}`} className='text-md font-semibold'>Next</Link>

            </>
          }

        </div>
      }
    </div>
  )
}

export default MoviePagination