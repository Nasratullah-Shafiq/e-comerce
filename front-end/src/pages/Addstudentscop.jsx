import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function PostForm(){
    const url = 'http://localhost:8000/api/students'
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        course: "",

    })
    function submit(e){
        e.preventDefault();
        axios.post(url, {
            name: data.name,
            email: data.email,
            phone: data.phone,
            course: data.course,
        })
        .then(res => {
            console.log(res.data)
        })
    }
    function handle(e){
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    return(
        <div>
            <form onSubmit={(e) => submit(e)}>
                <input onChange={(e) => handle(e)} id="name" value={data.name} placeholder="name" type="text"></input>
                <input onChange={(e) => handle(e)} id="email" value={data.email} placeholder="email" type="email"></input>
                <input onChange={(e) => handle(e)} id="phone" value={data.phone} placeholder="phone" type="text"></input>
                <input onChange={(e) => handle(e)} id="course" value={data.course} placeholder="course" type="text"></input>
                <button>Submit </button>
            </form>
        </div>
    );
}


export default PostForm;


import React, { useState } from 'react';
import axios from 'axios';

const AddStudentForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        course: '',
        email: '',
        phone: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/students', formData);
            console.log(response.data);
            // Handle success or redirect to a new page
        } catch (error) {
            console.error('Error creating student:', error.message);
            // Handle error
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" onChange={handleChange} required />

            <label>Course:</label>
            <input type="text" name="course" onChange={handleChange} required />

            <label>Email:</label>
            <input type="email" name="email" onChange={handleChange} required />

            <label>Phone:</label>
            <input type="text" name="phone" onChange={handleChange} required />

            <button type="submit">Add Student</button>
        </form>
    );
};

export default AddStudentForm;
