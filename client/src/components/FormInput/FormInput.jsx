import React from 'react'

const FormInput = ({ type, name, title, placeholder, value, onChange }) => {
    return (
        <div className="mb-2">
            <label htmlFor="password">{title}</label>
            <input
                type={type}
                placeholder={placeholder}
                className="form-control"
                defaultValue={value}
                onChange={onChange}
                name={name}
            />
        </div>
    )
}

export default FormInput