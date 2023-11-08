import React from 'react'

const Button = ({ type, name }) => {
    return (
        <button className="btn btn-primary">{name}</button>
    )
}

export default Button