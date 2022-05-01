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
       <Section>
       <Figure>
          <img src="../images/face2.jpg"  alt="face" />
       </Figure>
       <Container bg="#ffffff">
           <Form />
       </Container>
       </Section>
     </StyledContact> 
    </>
  	);  
}
export default Contact;

const StyledContact = styled.div`
  min-height: 100vh;
  width: 100%;
  text-align: center;
  background-color: #000000;
`;

