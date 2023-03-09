import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Contact() {
    return (
        <>
            <FloatingLabel
                controlId="floatingInput"
                label="Name"
                className="mb-3"
            >
                <Form.Control
                    type="text"
                    placeholder="Your name" />
            </FloatingLabel>
            <FloatingLabel
                controlId="floatingInput"
                label="Your email address"
                className="mb-3"
            >
                <Form.Control
                    type="email"
                    placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
                controlId="floatingInput"
                label="Message">
                <Form.Control
                    type="text"
                    placeholder="Enter your message here" />
            </FloatingLabel>
        </>
    );
}

export default Contact;