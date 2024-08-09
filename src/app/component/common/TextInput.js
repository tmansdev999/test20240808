import { loginSchema } from '@/app/login/logInSchema'
import React from 'react'

const TextInput = (field) => {
    return (
        <div className='mb-5'>
            <input
                id={field.name}
                className="w-full shadow appearance-none  rounded py-2 bg-inputcolor px-3 text-white leading-tight focus:outline-none focus:shadow-outline placeholder-white"
                type={field.type}
                placeholder={field.placeholder}
                onChange={field.onChange}
                value={field.value}
            />
            {field.touched && <small className="text-sm text-error">{field.error}</small>}
        </div>
    )
}

export default TextInput