import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useAuth } from '../../utils'
import FormImage from '../../assets/images/login/login.jpg'
import { ToastContainer } from 'react-toastify';
const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, user } = useAuth('guest')

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('email', email)
        formData.append('password', password)
        login(formData)
    }
    return (
        <div className="login-form">
            <Container className="login-wrapper">
                <Row>
                    <Col xs={12} sm={6}>
                        <form className="form mt-5" onSubmit={handleSubmit}>
                            <h4 className="form-title">user sign in</h4>
                            <p className="description text-center">Lorem ipsum dolor sit amet consectetur Lorem ipsum adipisicing elit dolor sit amet consectetur.</p>
                            <div className="mb-4">
                                <input className="form-control" type="email" placeholder="Email address" autoComplete='off' onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="mb-4">
                                <input className="form-control" type="password" placeholder="Password" autoComplete='off' onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <Button type="submit" size="md" variant="primary" className="btn-login">Login</Button>
                        </form>
                    </Col>
                    <Col xs={12} sm={6}>
                        <div className="form-image">
                            <img src={FormImage} alt="form-image" className="img-fluid" />
                        </div>
                    </Col>
                </Row>
                <ToastContainer />
            </Container>
        </div>
    )
}
export default LoginForm