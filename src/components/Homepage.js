import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Container,  Col, Row } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import {Animated} from "react-animated-css";

export default function Home() {
  return (
    <div>
        <Carousel showThumbs={false} showStatus={false} showArrows={false} autoPlay renderIndicator={(clickHandler, isSelected,i) =>
                (<div className="custom_indicators ZINDEX">
                    {i===0&& (
                        <div>
                            {isSelected?
                            <div className="indicatorMARGIN">
                    <button style={{border:'none', backgroundColor:'transparent', cursor:'pointer'}} onClick={clickHandler}>
                        <img src="assets/images/01.png" className="singleINDICATOR" onClick={clickHandler}  alt="..."/>
                    </button>
                    <span>01</span>
                    </div>
                    :
                    <div>

                    <button style={{border:'none', backgroundColor:'transparent', cursor:'pointer'}} onClick={clickHandler}>
                        <img src="assets/images/00.png" className="singleINDICATOR" onClick={clickHandler}   alt="..."/>
                    </button>  
                    </div>                          
                    }
                    </div>
                     )}
                     {i===1&& (
                       <div>
                        {isSelected?
                        <div className="indicatorMARGIN">
                <button style={{border:'none', backgroundColor:'transparent', cursor:'pointer'}} onClick={clickHandler}>
                    <img src="assets/images/01.png" className="singleINDICATOR" onClick={clickHandler}   alt="..."/>
                </button>
                <span>02</span>
                </div>
                :
                <div>
                <button style={{border:'none', backgroundColor:'transparent', cursor:'pointer'}} onClick={clickHandler}>
                    <img src="assets/images/00.png" className="singleINDICATOR" onClick={clickHandler}   alt="..."/>
                </button>
                </div>                            
                }
                </div>
                 )}
                 
                 {i===2&& (
                   <div>
                       {isSelected?
                       <div className="indicatorMARGIN">
               <button style={{border:'none', backgroundColor:'transparent', cursor:'pointer'}} onClick={clickHandler}>
                   <img src="assets/images/01.png" className="singleINDICATOR" onClick={clickHandler}   alt="..."/>
               </button>
               <span>03</span>
               </div>
               :
               <div>
               <button style={{border:'none', backgroundColor:'transparent', cursor:'pointer'}} onClick={clickHandler}>
                   <img src="assets/images/00.png" className="singleINDICATOR" onClick={clickHandler}   alt="..."/>
                </button>    
                </div>                        
                }
                </div>
                )}
                    </div>
                )
            }>
          <Container fluid>
          <div className="carouselDIV">
          <Animated animationIn="bounceInLeft" isVisible={true}>
            <div>
              <h1><span>get right</span> to the good parts</h1>
              <h3>Head lines goes here</h3>
              <p>Con periore iunturi con cusdanducit ut experioris et unt volupta sitatemped quam est, aligent laboriorem. Oribusa pictur alique qui doloribeatus ad que consecumquam estrum verit facia num rem commolore, sae maionsed</p>
            </div> 
            </Animated>
          <Row className="rowWIDTH">
            <Col><img src="assets/images/icon1.png" className="iconWIDTH" alt=".."/></Col>
            <Col><img src="assets/images/icon2.png" className="iconWIDTH icon2" alt=".."/></Col>
            <Col><img src="assets/images/icon3.png" className="iconWIDTH icon3" alt=".."/></Col>
            <Col><img src="assets/images/icon4.png" className="iconWIDTH icon4" alt=".."/></Col>
          </Row>
            {/* <a href="/">Explore More Items</a> */}
            <h4>Explore More Items</h4>
            <div>
            <a href="/" className="contact-us">contact us <img src="assets/images/arrow.png" className="arrowWIDTH" alt="..." /> </a>
            </div>
            <div>
              <img src="assets/images/slider1.png" alt=".." className="sliderWIDTH d-none-sm" />
              </div>
          </div>
          </Container>
          <Container fluid>
          <div className="carouselDIV">
              <h1><span>Value is</span> to  <br/>the good parts</h1>
              <h3>Head lines goes here</h3>
              <p>Con periore iunturi con cusdanducit ut experioris et unt volupta sitatemped quam est, aligent laboriorem. Oribusa pictur alique qui doloribeatus ad que consecumquam estrum verit facia num rem commolore, sae maionsed</p>
          <Row className="rowWIDTH">
            <Col><img src="assets/images/icon1.png" className="iconWIDTH" alt=".."/></Col>
            <Col><img src="assets/images/icon2.png" className="iconWIDTH icon2" alt=".."/></Col>
            <Col><img src="assets/images/icon3.png" className="iconWIDTH icon3" alt=".."/></Col>
            <Col><img src="assets/images/icon4.png" className="iconWIDTH icon4" alt=".."/></Col>
          </Row>
            {/* <a href="/" className="explore">Explore More Items</a> */}
            <h4>Explore More Items</h4>
            <a href="/" className="contact-us">contact us <img src="assets/images/arrow.png" className="arrowWIDTH" alt="..." /> </a>
          
          <img src="assets/images/slider2.png" alt=".." className="sliderWIDTH" />
          </div>
          </Container>
          <Container fluid>
          <div className="carouselDIV">
              <h1><span>Whatever</span> your car needs</h1>
              <h3>Head lines goes here</h3>
              <p>Con periore iunturi con cusdanducit ut experioris et unt volupta sitatemped quam est, aligent laboriorem. Oribusa pictur alique qui doloribeatus ad que consecumquam estrum verit facia num rem commolore, sae maionsed</p>
          <Row className="rowWIDTH">
            <Col><img src="assets/images/icon1.png" className="iconWIDTH" alt=".."/></Col>
            <Col><img src="assets/images/icon2.png" className="iconWIDTH icon2" alt=".."/></Col>
            <Col><img src="assets/images/icon3.png" className="iconWIDTH icon3" alt=".."/></Col>
            <Col><img src="assets/images/icon4.png" className="iconWIDTH icon4" alt=".."/></Col>
          </Row>
            {/* <a href="/" className="explore">Explore More Items</a> */}
            <h4>Explore More Items</h4>
            <a href="/" className="contact-us">contact us <img src="assets/images/arrow.png" className="arrowWIDTH" alt="..." /> </a>
          
          <img src="assets/images/slider3.png" alt=".." className="sliderWIDTH" />
          </div>
          </Container>
       </Carousel>
      
    </div>
  );
}

