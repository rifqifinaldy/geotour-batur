import React, { useState } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';
import TinySlider from "tiny-slider-react";
import { DataOurDestination } from './DataOurDestination';
const OurDestination = () => {
    const settings = {
        "container": "#autoplay",
        "autoplayText": [
            " asd",
            "asdasd "
        ],
        axis: 'vertical',
        gutter: 5,
        autoplay: true,
        mouseDrag: true,
        loop: true,
        items: 1,
        controls: false,
        center:true,
        swipAngle: true

    }

    return (
        <>
            <div className='destination mb-3'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#ffffff" fillOpacity="1" d="M0,96L80,90.7C160,85,320,75,480,96C640,117,800,171,960,170.7C1120,171,1280,117,1360,90.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
                </svg>
                <Container>
                    <h3 className="text-muted">Destination</h3>
                    <h1 className='text-white'>MOUNT BATUR</h1>
                    <p className='text-white'> Mount Batur has 3 crater peaks, where this crater was formed from the side eruption of Mount Batur. Mount Batur is estimated to have formed 5000 years ago with its highest peak reaching an altitude of 1,717 masl. At the top we will find fumaroles (gas vapor) that come out from rock fracture. Nearly more than 26 eruptive events were recorded from Batur Volcano from 1804.This mountain is perfect for both beginner and professional climbers to enjoy the beautiful sunrise in Bali.</p>
                    <Button className="shadow btn-custom px-4">Explore Now</Button>
                </Container>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#ffff" fillOpacity="1" className='border-0' d="M0,96L80,90.7C160,85,320,75,480,96C640,117,800,171,960,170.7C1120,171,1280,117,1360,90.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
            </div>
            <h4 className='text-center'>Explore Our Destination</h4>
            <small className='text-info d-block text-center'>Swip Up/Down</small>
            <div className='mb-5 p-5 our-destinations'>
                    <TinySlider settings={settings}>
                        {DataOurDestination.map((item, i) => (
                            <Row key={i} className='shadow-sm my-1 align-items-center'>
                                <Col sm="4" className='our-destination-img p-3'>
                                    <img src={item.img} />
                                </Col>
                                <Col>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </Col>
                            </Row>
                        ))}
                    </TinySlider>
            </div>

        </>
    )
}

export default OurDestination
