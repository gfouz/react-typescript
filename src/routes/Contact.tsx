import * as React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import Container from "../components/Container";
import Image from "../components/Image";
import Form from "../components/Form";
import ContactApps from "../components/ContactApps";
import Footer from "../components/Footer";
import Flexbox from "../components/Flexbox";
import Heading from "../components/Heading";
function Contact() {
  return (
    <>
      <StyledContact>
        <Nav bg="#3f51b5" color="#ffffff" />
        <section className="contact">
          <Image src="./images/contact.jpg" margin="3em 0 0 0" />
          <h1 className="contact__title">Contact me</h1>
          <Container bg="#ffffff">
            <Form />
          </Container>
        </section>
        <ContactApps height="200px" svgColor="#3f51b5" />
        <Footer height="50px" bg="#3f51b5">
          <Flexbox row>
            <Heading color="#ffffff">
              <h3>gfouz {new Date().getFullYear()}</h3>
            </Heading> 
          </Flexbox>
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
