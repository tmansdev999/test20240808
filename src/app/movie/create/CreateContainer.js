"use client";

import FileInput from '@/app/component/common/FileInput';
import SelectInput from '@/app/component/common/SelectInput';
import TextInput from '@/app/component/common/TextInput';
import React, { useState } from 'react';
import { useFormik } from "formik";
import { movieSchema } from '../movieSchema';
import axios from "axios";
import { useRouter } from 'next/navigation';



const CreateContainer = () => {

    const [banner, setBanner] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const router = useRouter();



    const movieCreateForm = useFormik({
        initialValues: {
            title: '',
            publish_year: '',
        },
        enableReinitialize: true,
        validationSchema: movieSchema,
        onSubmit: (values) => {
            if (banner === "") {
                setError("Select movie banner.")
            }
            else {
                createMovie({ ...values, banner })
            }
        }
    })


    const createMovie = (data) => {
        setLoading(true);
        console.log(data);
        axios.post("/api/movie/create", data).then((res) => {
            console.log(res);
            router.push("/");
        }).catch((err) => {
            console.log(err);
            setError(() => {
                return err?.response?.data?.message || "Something went wrong"
            })
        })
    }


    return (
        <div className='w-full '>
            <form className='w-full' onSubmit={movieCreateForm.handleSubmit}>
                <div className='w-full flex xl:gap-20 gap-10'>
                    <div class="w-1/2 ">
                        <FileInput banner={banner} setBanner={setBanner} />
                    </div>
                    <div className='w-1/2 px-10'>
                        <TextInput
                            type="text"
                            placeholder="Title"
                            name="title"
                            error={movieCreateForm.errors["title"]}
                            touched={movieCreateForm.touched["title"]}
                            value={movieCreateForm.values["title"]}
                            onChange={movieCreateForm.handleChange}
                        />
                        <SelectInput
                            name="publish_year"
                            error={movieCreateForm.errors["publish_year"]}
                            touched={movieCreateForm.touched["publish_year"]}
                            value={movieCreateForm.values["publish_year"]}
                            onChange={movieCreateForm.handleChange}
                        />
                        <p className="text-sm text-error">{error}</p>
                        <div className='mt-8 flex items-center gap-6 text-white'>
                            {/* <button className='px-6 py-2 font-medium rounded-md border border-white hover:border-gray-400 hover:text-gray-400'>Cancel</button> */}
                            <button
                                disabled={loading}
                                type='submit'

                                className='px-6 py-2 font-medium rounded-md bg-primary hover:bg-primary/75'>
                                {loading ? "Submitting...." : "Submit"}
                            </button>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default CreateContainer