import React from 'react'
import { Parallax} from 'react-scroll-parallax';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import '../App.css'
function AboutUs() {
    return (
        <div>

            <Container fluid>
                <Row className='container mx-5 mb-5'>
                    <Col lg={6} >
                        <Parallax translateY={[-10,30]}>
                            <Row>

                                <Col lg={6}>
                                    <div className='g-4 d-flex flex-column'>

                                        <div>

                                            <img style={{ width: '16em', height: '20em', borderRadius: '20px' }} src={img1} alt="" />
                                        </div>
                                        <div className='mt-3'>
                                            <img style={{ width: '16em', height: '20em', borderRadius: '20px' }} src={img2} alt="" />

                                        </div>
                                    </div>

                                </Col>
                                <Col lg={6} className='mt-5'>
                                    <div className='g-4 d-flex flex-column'>
                                        <div className='crd' style={{ width: '16em', height: '20em', borderRadius: '20px' }}>

                                        </div>
                                        <div className='mt-3'>
                                            <img style={{ width: '16em', height: '20em', borderRadius: '20px' }} src={img3} alt="" />

                                        </div>
                                    </div>

                                </Col>
                            </Row>
                        </Parallax>
                    </Col>
                    <Col lg={6}>
                        <div>
                            <h1 style={{ fontWeight: '500', color: '#fc1c14' }}>About Us</h1>
                            <div>
                                <p className='mt-5' style={{ textAlign: 'justify', lineHeight: '2em', fontWeight: '600' }} >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex recusandae omnis eum doloremque consequuntur in nam mollitia repudiandae, quas dignissimos cupiditate architecto perferendis ea modi minima tempora officiis impedit! Debitis.
                                    Dicta, mollitia incidunt! Quaerat aspernatur odio perferendis aperiam? Earum nam illum quod atque vel culpa dicta blanditiis ratione unde aliquid fugiat, velit minima non porro pariatur veniam magnam nihil id. <br /><br />

                                    <span className='mt-5'>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt expedita debitis ut minus officiis, atque qui eos perferendis culpa explicabo quae eligendi? Fugit saepe ipsa repellendus modi vitae! Consectetur, tenetur?
                                        Perspiciatis consequatur assumenda pariatur vitae harum illum maxime velit tempora perferendis ea distinctio, consectetur consequuntur ut aspernatur praesentium, veritatis repudiandae eligendi. Neque, ea nulla. Animi error dolorum perferendis distinctio commodi?
                                        Provident, alias laborum. Inventore rerum cum aliquam ut, eum quod magnam! Minima nesciunt voluptas necessitatibus itaque nam optio velit nostrum ea consectetur aut sequi ullam cupiditate provident, quia dolorem. Similique?
                                    </span></p>

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutUs