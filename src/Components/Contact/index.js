import React, {Component} from 'react';
import axios from 'axios';
import {Container, Row, Col} from 'react-bootstrap';
import ContactForm from './ContactForm';

class Contact extends Component {
    state = {
        first_name: "",
        last_name: "",
        email: "",
        message: ""
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //captures data and send to endpoint
    onSubmit = (e) => {
        e.preventDefault();
        const {first_name, last_name, email, message} = this.state;
        axios.post('https://formspree.io/xgglpoex', {first_name, last_name, email, message})
        this.setState({
            first_name: "",
            last_name: "",
            email: "",
            message: ""
          })
    }

    render(){

        return(
            <Container fluid={true} id="contact" className="pt-4 scroll-child">
            
            <Row>
            <Col md={4}>
                <h2 className="ml-n4">Contact</h2>
            </Col>

            <Col xs={12} md={8}>
            <ContactForm
            onChange={this.onChange}
            onSubmit={this.onSubmit}
            first_name={this.state.first_name}
            last_name={this.state.last_name}
            email={this.state.email}
            message={this.state.message}
            />
            </Col>
            
            </Row> 
        </Container>
        )
    }
}


export default Contact;