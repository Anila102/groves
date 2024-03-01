import React from 'react'
import Slider from './components/Slider'
import Carousel from 'react-bootstrap/Carousel';

const MainSection = () => {
    return (
        <div className='row col-lg-6'>
            <Carousel style={{height:'650px'}}>
                <Carousel.Item className='d-flex justify-content-center align-items-center' style={{height:'650px'}}>
                    <Slider />

                </Carousel.Item>
                <Carousel.Item className='d-flex justify-content-center align-items-center' style={{height:'650px'}}>
                    <Slider />

                </Carousel.Item>
                <Carousel.Item className='d-flex justify-content-center align-items-center' style={{height:'650px'}}>
                    <Slider />

                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default MainSection