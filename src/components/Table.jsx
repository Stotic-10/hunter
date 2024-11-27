import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const TableComp = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        getData();
    }, [])


    const getData = async () => {
        try {
            const dataget = await axios.get('http://localhost:3000/data');
            setData(dataget.data);
        } catch (error) {
            console.log(error.message);

        }
    }

    const handleAdd = () => {
        navigate('/');
    }

    const handleDelete = async (id) => {
        try {
            const remove = await axios.delete(`http://localhost:3000/data/${id}`)
            console.log(remove);
            getData();
        } catch (error) {
            console.log(error.message);
        }
    }

    const handleEdit = (id) => {
        navigate(`/${id}`);
    }

    return (
        <div>
            <Button variant='primary' className='mb-3' onClick={handleAdd}>Add Data</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>E-mail</th>
                        <th>Mobile</th>
                        <th>Hobby</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((val, key) => (
                        <tr key={key}>
                            <td>{key + 1}</td>
                            <td>{val.first_name + " " + val.last_name}</td>
                            <td>{val.gender}</td>
                            <td>{val.email}</td>
                            <td>{val.mobile}</td>
                            <td>{val.finalHobby}</td>
                            <Button variant='primary' onClick={() => handleDelete(val.id)}>DELETE</Button>
                            <Button variant='primary' onClick={() => handleEdit(val.id)}>EDIT</Button>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default TableComp
