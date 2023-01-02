import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'
import registerimg from '../../assets/images/register/register.jpg'
import { ToastContainer } from 'react-toastify';
import { useAuth } from '../../utils'
const RegisterForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    const { register } = useAuth('guest')
    const handleSubmit = (e) => {

        e.preventDefault()
        const formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        formData.append('password', password)
        formData.append('password_confirmation', passwordConfirm)
        register(formData)
    }

    return (
        <div className="register-wrapper">
            <Container className="register-container">
                <Row>
                    <Col xs={12} sm={5}>
                        <div className="register-image">
                            <img className="img img-fluid" src={registerimg} alt="register-img" />
                        </div>
                    </Col>
                    <Col xs={12} sm={6}>
                        <form className="form-register" onSubmit={handleSubmit}>
                            <h3 className="form-title">Sign up to <span style={{ color: '#f00' }}>Ecommerce</span></h3>
                            <p className="subtitle">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea</p>
                            <p className="have-account">Already have an account? <Link to="login">Sign In</Link></p>
                            <div className="mb-2">
                                <label className="form-label" htmlFor="name">Name</label>
                                <input className="form-control" id="name" autoComplete='off' onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="mb-2">
                                <label className="form-label" htmlFor="email">E-mail</label>
                                <input className="form-control" id="email" autoComplete='off' onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="mb-2">
                                <label className="form-label" htmlFor="password">Password</label>
                                <input className="form-control" id="password" type="password" autoComplete='off' onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="mb-2">
                                <label className="form-label" htmlFor="password-confirm">Password Confirm</label>
                                <input className="form-control" id="password-confirm" type="password" autoComplete='off' onChange={(e) => setPasswordConfirm(e.target.value)} />
                            </div>
                            <div className="mt-4">
                                <Button type="submit" size="md" className="btn-register">Create an Account</Button>
                            </div>
                        </form>
                    </Col>
                </Row>
                <ToastContainer />
            </Container>
        </div>
    )
}


export default RegisterForm;