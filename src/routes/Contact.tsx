import * as React from 'react';
import styled from 'styled-components'
import { about, technologies } from './content';
import Section from '../components/Section'
import Container from '../components/Container'
import Figure from '../components/Figure'
import Form from '../components/Form'



function Contact() {
  return (
    <>
      <StyledContact>
       <section className="contact">
       <Figure>
          <img src="./images/form.jpg"  alt="face" />
       </Figure>
       <h1 className="contact__title">Contact me</h1>
       <Container bg="#ffffff">
           <Form />
       </Container>
       </section>
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
    color: #444444;
  }
`;

