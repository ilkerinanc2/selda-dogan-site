import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import image1 from "../images/carousel/1.jpg";
import image2 from "../images/carousel/2.jpg";
import image3 from "../images/carousel/3.jpg";
import image4 from "../images/carousel/4.jpg";

export class SiteCarousel extends Component {
    render() {
        return (
            <div style={{ margin:'auto', marginTop:'50px',marginBottom:'0px', width:'60%'}} >
                <Carousel fade>
                    <Carousel.Item>                        
                        <img
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                        />
                        <Carousel.Caption>                        
                        <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={image2}
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={image4}
                        alt="Fourth slide"
                        />
                        <Carousel.Caption>
                        <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>            
        );
    }
}
