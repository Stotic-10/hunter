import React from 'react'
import { Form } from 'react-bootstrap'

const Input = ({ type, name, label, value, edit, onChange }) => {
    return (
        <Form.Group controlId={`form${name}${value}`} className='mb-3'>
            <Form.Label className={type === 'radio' || type === 'checkbox' ? 'mx-3' : 'mx-0'}>{label}</Form.Label>
            {
                type === 'radio' || type === 'checkbox' ? (
                    <Form.Check
                        type={type}
                        name={name}
                        value={value}
                        checked={edit}
                        className='text-center mx-3'
                        onChange={onChange}
                    />
                ) : (
                    <Form.Control type={type} name={name} className='text-center' onChange={onChange} value={edit || ''} />
                )
            }
        </Form.Group>
    )
}

export default Input;
