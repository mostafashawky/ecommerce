import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import siteInfoApi from '../../api/siteinfo'
import parseHTML from 'html-react-parser'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const About = () => {
    const [about, setAbout] = useState('')
    useEffect(() => {
        let aboutContent = window.sessionStorage.getItem('about')
        if (!aboutContent) {
            siteInfoApi().then((response) => {
                if (response.status === 200) {
                    setAbout(response.data[0].about)
                    window.sessionStorage.setItem('about', response.data[0].about)
                }
            }).catch((error) => toast.error('There are error with fetching data'))
        } else {
            setAbout(aboutContent)
        }
    }, [])
    return (
        <div className="about-wrapper">
            <Container className="about">
                <h3 className="title">About Us Page</h3>
                <div>
                    {parseHTML(about)}
                </div>
                <ToastContainer />
            </Container>
        </div>
    )
}
export default About