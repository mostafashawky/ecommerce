import React, { useState, useEffect, useRef } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import sendMessageApi from '../../api/sendMessage'
import { ToastContainer, toast } from 'react-toastify';

const ContactForm = () => {
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [errors, setErrors] = useState({})
    const contactForm = useRef(null)
    const btnSendMessage = useRef(null)

    const handleSubmit = (e) => {

        e.preventDefault()
        const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        const phonePattern = /^\d{11}$/

        let valid = true
        if (!emailPattern.test(email)) {
            valid = false
            toast.error('Email not valid')
        }
        if (!phonePattern.test(phone)) {
            valid = false
            toast.error('phone not valid')
        }

        if (message.trim().length < 5 || message.trim().length > 30) {
            valid = false
            toast.error('message must be between 5 and 30 characters')
        }

        if (valid) {
            // no validation error found
            const formData = new FormData(contactForm.current)
            btnSendMessage.current.innerHTML = 'Sending...'
            sendMessageApi(formData)
                .then((data) => {
                    if (data.status === 200) {
                        toast.success('Message Send Successfully')
                        contactForm.current.reset()
                        btnSendMessage.current.innerHTML = 'Send Message'
                        setErrors({})
                        setEmail('')
                        setPhone('')
                        setMessage('')
                    }
                }).catch((error) => {
                    if (error.response?.status === 442) {
                        btnSendMessage.current.innerHTML = 'Send Message'
                        setErrors(error.response.data.errors)
                    } else {
                        toast.error('error sending email')
                    }
                })
        }
    }
    return (
        <div className="contact-form">
            <Container>
                <Row>
                    <Col xs={12} sm={6}>
                        {Object.values(errors).length ?
                            Object.values(errors).map((error) => (
                                <div className="alert alert-danger">{error[0]}</div>
                            )) : ""
                        }
                        <form className="form mt-5" onSubmit={handleSubmit} ref={contactForm}>
                            <h4 className="form-title">Contact with us</h4>
                            <div className="mb-4">
                                <input name="email" className="form-control" type="email" placeholder="Email address" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="mb-4">
                                <input name="phone" type="number" className="form-control" placeholder="Phone number" onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <div className="mb-4">
                                <textarea name="message" className="form-control message" type="text" placeholder="Message" onChange={(e) => setMessage(e.target.value)} ></textarea>
                            </div>
                            <Button ref={btnSendMessage} type="submit" size="lg" className="btn-send-meesage">Send Message</Button>
                            <ToastContainer />
                        </form>
                    </Col>
                    <Col xs={12} sm={6}>
                        <div className="location">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27349.368282153744!2d31.40567667963984!3d31.035413758472504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79daec39dd347%3A0x1e86074b651b494e!2z2LPYqtin2K8g2KfZhNmF2YbYtdmI2LHYqSDYp9mE2LHZitin2LbZig!5e0!3m2!1sar!2seg!4v1668338453793!5m2!1sar!2seg"
                                width="600"
                                height="450"
                                styles="border:0;"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default ContactForm