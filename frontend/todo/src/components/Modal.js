import React from 'react'

// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const ModalComp = ({show,onHide,Modaldata}) => {

    return (
        <div>
            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Login Account</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {Modaldata}
                </Modal.Body>
               
            </Modal>
        </div>
    )
}

export default ModalComp
