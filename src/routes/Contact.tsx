import * as React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import Container from "../components/Container";
import Image from "../components/Image";
import Form from "../components/Form";
import ContactApps from "../components/ContactApps";
import Footer from "../components/Footer";
import Div from "../components/Div";
import Heading from "../components/Heading";
function Contact() {
  return (
    <>
      <StyledContact>
        <Nav bg="#768ded" color="#ffffff" />
        <section className="contact">
          <Image src="./images/contact.jpg" margin="3em 0 0 0" />
          <h1 className="contact__title">Contact me</h1>
          <Container bg="#ffffff">
            <Form />
          </Container>
        </section>
        <ContactApps height="200px" svgColor="#3f51b5" />
        <Footer padding="3em 0">
            <Div row justify="flex-end">
             <Image src="./images/mount.jpg" />
            </Div> 
            <h2 className="footer__title">gfouz {new Date().getFullYear()}</h2>
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
    padding: 2em 0;
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
  .footer__title {
    position: absolute;
    text-shadow: 1px 1px 10px #ffffff;
    top: 50%;
    left: 50%;
    color: #0000ff;
    font-family: literata;
    transform: translate(-50%, -50%);
  }
`;
