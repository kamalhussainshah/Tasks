import React from 'react';
import { Form, Modal } from 'react-bootstrap';

const Groups = ({ handleGroups }) => {
    return (
        <div>
            <Modal.Body>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" name ="alpha" label="Alpha Group" onChange={handleGroups} />
                <Form.Check type="checkbox" name ="bravo" label="Bravo Group" onChange={handleGroups} />
                <Form.Check type="checkbox" name ="charlie" label="Charlie Group" onChange={handleGroups} />
            </Form.Group>
            </Modal.Body>
            
        </div>
    )
}

export default Groups;