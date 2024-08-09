"use client";
import React, { useState } from 'react';
import Heading from '../component/common/Heading';
import TextInput from '../component/common/TextInput';
import { useFormik } from "formik"
import { loginSchema } from './logInSchema';
import axios from "axios";
import { useRouter } from 'next/navigation';


const logInInput = [
    {
        name: "email",
        placeholder: "Email",
        type: "text"
    },
    {
        name: "password",
        placeholder: "Password",
        type: "password"
    }
]

const LogInContainer = () => {

    const [loading, setLoading] = useState(false);
    const [commonError, setCommonError] = useState("");
    const router = useRouter();

    const logInForm = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        enableReinitialize: true,
        validationSchema: loginSchema,
        onSubmit: (values) => {
            setLoading(true);
            makeLogInRequest(values)
        }
    })

    const makeLogInRequest = (data) => {
        axios.post("/api/auth/login", data)
            .then((res) => {
                router.push("/");
                console.log(res);
            }).catch((err) => {
                console.log(err);
                setCommonError(() => {
                    return err?.response?.data?.message ? err?.response?.data?.message : "Something went wrong"
                })
            }).finally(() => {
                setLoading(false)
            })
    }

    return (
        <div className='min-w-[300px]'>

            <div className='text-center'>
                <Heading text={"SignIn"} />
            </div>

            <form onSubmit={(e) => logInForm.handleSubmit(e)} >
                <div className='w-[340px]'>
                    {
                        logInInput.map((field, index) => {
                            return <TextInput
                                key={index}
                                name={field.name}
                                type={field.type}
                                placeholder={field.placeholder}
                                value={logInForm.values[field.name]}
                                onChange={logInForm.handleChange}
                                touched={logInForm.touched[field.name]}
                                error={logInForm.errors[field.name]}
                            />
                        })
                    }
                </div>
                <p className="text-sm text-error">{commonError}</p>
                <button
                    disabled={loading}
                    type='submit' className='text-center w-full py-2 bg-primary rounded hover:bg-primary/70 mt-4'>
                    {loading ? "Processing..." : "LogIn"}
                </button>
            </form>




        </div>
    )
}

export default LogInContainer