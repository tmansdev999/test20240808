"use client";

import React from 'react'
import axios from "axios";

const FileInput = ({ banner, setBanner }) => {

    const handleImageOnChange = (e) => {
        console.log(e.target.files);
        const formData = new FormData();
        formData.append("file", e.target.files[0]);

        axios.post("/api/upload/image", formData).then((res) => {
            console.log(res);
            setBanner(res?.data?.filename)
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <div className='w-full h-[480px]'>
            {
                banner === "" && <label
                    className="flex items-center justify-center w-full h-full p-4 transition bg-inputcolor border-[3px] border-white border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">

                    <div className="flex flex-col items-center space-x-2">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 block text-white" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                        </span>
                        <span className="font-medium text-gray-400">
                            Drop An Image Here
                            <span class="text-blue-600 underline">browse</span>
                        </span>
                        <input type="file" name="file_upload" onChange={handleImageOnChange} className="hidden" />
                    </div>

                </label>
            }
            {
                banner !== "" && <div className='w-full h-full relative'>
                    <img src={`/uploads/${banner}`} className='w-full h-full object-cover' />
                    <button type='button' onClick={(e) => {
                        setBanner("")
                    }} className='absolute right-0 top-0 text-error'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            }
        </div>
    )
}

export default FileInput