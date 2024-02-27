import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import ModalComp from './Modal';
import { Link } from 'react-router-dom';
function Nave({ baseurl }) {
  const [view, setview] = useState(false);
  const[signupview,setsignupview]=useState(false)
  const handleShow = () => setview(true);
  const handleClose = () => setview(false);
  const handleShowsign = () => setsignupview(true);
  const handleClosesign = () => setsignupview(false);



  const [data, setdata] = useState({
    email: "",
    password: ""
  })

  const handlechange = (e) => {
    const { name, value } = e.target
    setdata({ ...data, [name]: value })
  }
  const handsubmit = async (e) => {
    e.preventDefault()
    await axios.post(`${baseurl}/setuser`, data).then((res) => { console.log(res) })
    console.log(data)
  }
  const formdata =
   <>
    <Form onSubmit={handsubmit}>
      <Form.Group controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={data.email} name='email' onChange={handlechange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" placeholder="Password" value={data.password} name='password' onChange={handlechange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">

      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form></>
  const formdata1 = <>
    <Form onSubmit={handsubmit}>
      <Form.Group controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={data.email} name='email' onChange={handlechange} />
      </Form.Group>
      <Form.Group controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={data.email} name='email' onChange={handlechange} />
      </Form.Group>
      <Form.Group controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={data.email} name='email' onChange={handlechange} />
      </Form.Group>
      <Form.Group controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={data.email} name='email' onChange={handlechange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" placeholder="Password" value={data.password} name='password' onChange={handlechange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">

      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form></>

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="form1">f1</Link>
              <Button variant="primary" onClick={handleShow}>
                Login
              </Button>
              <Button variant="primary" onClick={handleShowsign}>
                signup
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {view && <ModalComp
        show={view}
        onHide={handleClose}
        Modaldata={formdata}
      />}

      {
        signupview && <ModalComp 
        show={signupview}
        onHide={handleClosesign}
        Modaldata={formdata1}
        />
      }
    </>
  );
}

export default Nave;