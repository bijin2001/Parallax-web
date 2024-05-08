import React from 'react'
import Vid from '../assets/Video.mp4'
import '../App.css'

function Content1() {
    return (
        <div>
            <div className='container MT-5'>
                <h1 style={{ fontSize: '8em', fontWeight: '700',marginTop: '92px' }}>WE ARE</h1>

            </div>
            <div className='Cont'>
                <video style={{width:'100%'}} autoPlay loop muted src={Vid}></video>
                <div className='txt d-flex flex-column justify-content-center align-items-center' style={{position:'absolute',top:'0',left:'0',background:'#fff',width:'100%',height:'100%',color:'#000'}}>
                    <h1 style={{fontSize:'23em',fontWeight:'700',marginTop:'-1em'}}>CUBE</h1>
                </div>
            </div>
        </div>
    )
}

export default Content1