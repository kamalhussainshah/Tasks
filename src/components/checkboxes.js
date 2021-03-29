import React from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

const CheckBoxes = ({ handleClose, handleChange, handleModalSubmit }) => {
    return(
        <div>
        <Modal.Body>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" name="frontend" label="Frontend Category" onChange={handleChange} />
                <Form.Check type="checkbox" name="backend" label="Backend Category" onChange={handleChange}/>
                <Form.Check type="checkbox" name="devops" label="DevOps Category" onChange={handleChange}/>
            </Form.Group>
        </Modal.Body>
        {/*<Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleModalSubmit}>
                Submit
            </Button>
        </Modal.Footer>*/}
        </div>
    )
}
 export default CheckBoxes;