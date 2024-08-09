"use client";
import Link from 'next/link'
import React from 'react'
import axios from "axios";
import { useRouter } from 'next/navigation';


const MovieListHeader = () => {

    const router = useRouter();

    const handleLogOut = () => {
        axios.get("/api/auth/logout").then((res) => {
            router.push("/login")
        }).catch((err) => {
            console.log(err);
        })
    }
    return (
        <div className='w-full flex justify-between items-center'>
            <div className='flex justify-center items-center gap-3'>
                <h2 className='text-4xl font-medium'>My movies</h2>
                <Link href={"/movie/create"} className='text-4xl font-bold flex items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                </Link>
            </div>

            <button onClick={() => {
                handleLogOut();
            }} className='flex items-center justify-center gap-1 font-bold'>
                <span>LogOut</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                </svg>
            </button>
        </div>
    )
}

export default MovieListHeader