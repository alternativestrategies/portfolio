import React, { Component } from 'react';
import {OverlayTrigger} from 'react-bootstrap';
import 'aos/dist/aos.css';
import AOS from 'aos';

class About extends Component {
    componentDidMount(){
        AOS.init({
          duration: 1000,
          startEvent: 'scroll',
          once: false
        })
      }
    render(){
        return(
            <React.Fragment>
            <div id="about" className="pt-4 scroll-child">
              <h2 className="sr-only">About</h2>
             <div data-aos='fade-up' className="about-text">
                <p>Hi, I'm <OverlayTrigger
                  placement='start'
                  overlay={<img src='./img/profile.jpg' alt='Arely Guevara'
                  className='tooltip-img'/>}
                  popperConfig={{
                    modifiers: {
                      preventOverflow: {
                        enabled: false
                      }
                    }}}>
                <span className='tooltip-text'>Arely Guevara</span></OverlayTrigger>, a web developer from Charlotte, NC.
                I have experience with HTML, CSS, Javascript, React and Node.js.
                </p>
                </div>
         
            </div>
            </React.Fragment>
        );
    }
    
}

export default About;