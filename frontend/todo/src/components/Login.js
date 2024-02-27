import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./auth.css"
import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import axios from 'axios'
function Login({baseurl}) {
console.log(baseurl);
    const [data, setdata] = useState({
        email: "",
        password: ""
    })
    const handlechange = (e) => {
        const { name, value } = e.target
        setdata({ ...data, [name]: value })
    }
    const handsubmit = async(e) => {
        e.preventDefault();
        // await axios.post(url,datavariable)
        await axios.post(`${baseurl}/setuser`,data).then((res)=>{console.log(res)})
    }
    return (
        <div className='container'>
            <div className='flex-center'>
                <Form onSubmit={handsubmit} className='shadow-lg ' style={{border:"1px solid black",padding:"60px"}}>
                    <Form.Group  controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={data.email} name='email' onChange={handlechange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="text" placeholder="Password" value={data.password} name='password' onChange={handlechange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Link to="/signup">SignUp</Link>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Login;