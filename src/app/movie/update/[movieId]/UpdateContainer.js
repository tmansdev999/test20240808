"use client"

import FileInput from '@/app/component/common/FileInput'
import SelectInput from '@/app/component/common/SelectInput'
import TextInput from '@/app/component/common/TextInput'
import React, { useEffect, useState } from 'react'
import { movieSchema } from '../../movieSchema'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { useFormik } from 'formik'

const UpdateContainer = ({ movie }) => {

    const [banner, setBanner] = useState(movie?.banner);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const router = useRouter();


    const movieUpdateForm = useFormik({
        initialValues: {
            title: movie?.title,
            publish_year: movie?.publish_year,
        },
        enableReinitialize: true,
        validationSchema: movieSchema,
        onSubmit: (values) => {
            if (banner === "") {
                setError("Select movie banner.")
            }
            else {
                updateMovie({ ...values, banner, movieId: movie?._id })
            }
        }
    })


    const updateMovie = (data) => {
        setLoading(true);
        console.log(data);

        axios.post(`/api/movie/update`, data)
            .then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err);
                setError(() => {
                    return err?.response?.data?.message || "Something went wrong"
                })
            }).finally(() => {
                setLoading(false)
            })
    }


    return (
        <div className='w-full '>
            <form className='w-full' onSubmit={movieUpdateForm.handleSubmit}>
                <div className='w-full flex xl:gap-20 gap-10'>
                    <div className="w-1/2 ">
                        <FileInput banner={banner} setBanner={setBanner} />
                    </div>
                    <div className='w-1/2 px-10'>
                        <TextInput
                            type="text"
                            placeholder="Title"
                            name="title"
                            error={movieUpdateForm.errors["title"]}
                            touched={movieUpdateForm.touched["title"]}
                            value={movieUpdateForm.values["title"]}
                            onChange={movieUpdateForm.handleChange}
                        />
                        <SelectInput
                            name="publish_year"
                            error={movieUpdateForm.errors["publish_year"]}
                            touched={movieUpdateForm.touched["publish_year"]}
                            value={movieUpdateForm.values["publish_year"]}
                            onChange={movieUpdateForm.handleChange}
                        />
                        <p className="text-sm text-error">{error}</p>
                        <div className='mt-8 flex items-center gap-6 text-white'>
                            <button onClick={() => {
                                router.back();
                            }} className='px-6 py-2 font-medium rounded-md border border-white hover:border-gray-400 hover:text-gray-400'>Cancel</button>
                            <button
                                disabled={loading}
                                type='submit'

                                className='px-6 py-2 font-medium rounded-md bg-primary hover:bg-primary/75'>
                                {loading ? "Updating...." : "Update"}
                            </button>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default UpdateContainer