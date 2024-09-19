import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';

const Popup = () => {

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Welcome</Modal.Title>
            </Modal.Header>
    
            <Modal.Body>
                <p> <strong>Note ❗ </strong> Info loading may take 2 mins because it uses FREE hosting at RENDER.com</p>
                <p><strong>Refresh if needed</strong></p>
            </Modal.Body>
        </Modal>
      );

}

export default Popup