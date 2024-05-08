import React, { useRef, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import berlin from '../assets/dj.jpg'
import gsap from 'gsap';
import { ScrollTrigger} from 'gsap/all';
import { delay, startOptimizedAppearAnimation } from 'framer-motion';
function Contain4() {

  const countryRef = useRef(null)
  const triggerRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(countryRef.current, {
      x: 800,
      duration: 1,
      scrollTrigger: {
        trigger: countryRef.current,
        start: "bottom center",
        end: "top 10%",
        toggleActions:"restart pause reverse pause",
      }
    });

  }, []);

  return (
    <div>
      <div style={{ marginTop: '19em' }}>
        <h1 className='text-center' style={{ fontSize: '7em', fontWeight: '700', color: '#fc1c14' }}>Our Upcoming Tours</h1>
      </div>

      <Row style={{marginTop:'6em'}}>
        <Col lg={6} >


          <div>
            <div ref={countryRef}  className='d-flex align-items-center justify-content-center'>
              <h1  style={{ fontSize: '5em', fontWeight: '800',color:'#fc1c14' }}>Berlin</h1>
            </div>
            <div style={{marginTop:'7em'}} className='d-flex flex-column align-items-center justify-content-center container'>
              <h1 style={{fontSize:'4em',fontWeight:'bold'}}>Grab Your Tickets</h1>
              <button style={{outline:'none',border:'none',padding:'10px',backgroundColor:'#fc1c14',fontWeight:'600',color:'white'}}>Buy Ticket</button>
            </div>
          </div>
          </Col>

      <Col lg={6}>
        <img style={{ width: '36em', height: '40em', borderRadius: '15px' }} src={berlin} alt="" />
      </Col>
    </Row>
    </div >
  )
}

export default Contain4