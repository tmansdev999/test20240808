import React from 'react'

const SelectInput = (field) => {
    return (
        <div className='mb-5 text-gray-100'>
            <select
                id={field.name}
                onChange={field.onChange}
                value={field.value}
                name={field.name}
                className="w-4/5 block shadow appearance-none rounded py-2 px-3 bg-inputcolor text-white  leading-tight focus:outline-none focus:shadow-outline">
                <option value={""} >Select Publishing Year</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
            </select>
            {field.touched && <small className="text-sm text-error">{field.error}</small>}

        </div>
    )
}

export default SelectInput