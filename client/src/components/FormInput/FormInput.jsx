import React from 'react'

const FormInput = ({ type, name, placeholder }) => {
    return (
        <div className="mb-2">
            <label htmlFor="password">{name}</label>
            <input
                type={type}
                placeholder={placeholder}
                className="form-control"
            />
        </div>
    )
}

export default FormInput