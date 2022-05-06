import * as React from 'react';
import styled from 'styled-components'
import { about, technologies } from './content';
import Nav from '../components/Nav'
import Container from '../components/Container'
import Image from '../components/Image'
import Form from '../components/Form'
import ContactApps from '../components/ContactApps'
import Footer from '../components/Footer'



function Contact() {
  return (
    <>
      <StyledContact>
       <Nav bg="#3f51b5" color="#ffffff"/>
       <section className="contact">
       <Image>
          <img src="./images/contact.jpg"  alt="face" />
       </Image>
       <h1 className="contact__title">Contact me</h1>
       <Container bg="#ffffff">
           <Form />
       </Container>
       </section>
       <Footer justify >
          <ContactApps height="200px" svgColor="#3f51b5" />
       </Footer>
     </StyledContact> 
    </>
  	);  
}
export default Contact;

const StyledContact = styled.div`
  min-height: 100vh;
  width: 100%;
  text-align: center;
  .contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .contact__title {
    text-transform: uppercase;
    color: #3f51b5;
    margin: 1em 0;
  }
`;

