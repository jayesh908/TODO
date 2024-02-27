import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import "./auth.css"
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
function Signup({baseurl}) {

    const [data, setdata] = useState({
        email: "",
        password: "",
        address:"",
        city:"",
        state:"",
        UserName : ""
    })

    const handlechange = (e) => {
        const { name, value } = e.target
        setdata({ ...data, [name]: value })
    }
    const handsubmit = async(e) => {
      e.preventDefault();
      
      await axios.post(`${baseurl}/setuser`,data).then((res)=>{console.log(res)})
      console.log(data);

    }   


    return (
        <div className='container'>
            <div className='flex-center'>
                <Form onSubmit={handsubmit}>
                    <Row className="mb-3">
                    <Form.Group className="mb-3" controlId="UserName">
                        <Form.Label>UserName</Form.Label>
                        <Form.Control placeholder="1234 Main St"  value={data.UserName} name='UserName' onChange={handlechange}/>
                    </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={data.email} name='email' onChange={handlechange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="text" placeholder="Password" value={data.password} name='password' onChange={handlechange} />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St"  value={data.address} name='address' onChange={handlechange}/>
                    </Form.Group>


                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control value={data.city} name='city' onChange={handlechange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Select defaultValue="Choose..." value={data.state} name='state' onChange={handlechange}>
                                <option>Choose...</option>
                                <option>Haryana</option>
                                <option>Delhi</option>
                                <option>UP</option>
                                <option>Mathura</option>
                                <option>Agra</option>
                                <option>Haryana</option>
                                <option>Haryana</option>
                            </Form.Select>
                        </Form.Group>

                    </Row>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Link to='/'>SignIn</Link>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Signup;