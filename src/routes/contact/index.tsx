import * as React from "react";
import {breakpoint} from  '../../mixins';
import styled from "styled-components";
import Box from "../../components/Box";
import Nav from "../../components/Nav";
import Section from "../../components/Section";
import Image from "../../components/Image";
import SpyGlass from "../../icons/SpyGlass";
import Form from "../../components/Form";
import ContactApps from "../../components/ContactApps";
import Headline from "../../components/Headline";
import {
  title,
  contactme,
  contactImage,
  subtitle,
  navbar,
  contactApps,
} from "./constants";

function Contact() {
  return (
    <>
      <StyledContact>
        <Section>
          <div className="main">
            <Box column>
              <Nav {...navbar} />
              <Headline {...title} />
              <Headline {...subtitle}/>
              <div className="message__bottom">
               <p className="message__md">
                 "El tiempo es el único capital de las personas 
                 que no tienen más que su inteligencia por fortuna." 
                 <p>Honoré de Balzac.</p>
               </p>
               <div className="message__sm">
                   <Image src="./images/contact.png"/>
                   <h6>WRITE ME BELOW</h6>
               </div>
              </div> 
            </Box>
          </div>
          <Box height="100vh">
           <div className="message__md">
            <Image {...contactImage} centered />
           </div> 
           <div className="message__top">
             <SpyGlass color="#3c5fbd" size="3em" />
           </div> 
            <Box column>
              <Headline {...contactme} />
              <Form />
            </Box>
            <ContactApps {...contactApps} />
          </Box>
        </Section>
      </StyledContact>
    </>
  );
}
export default Contact;
const StyledContact = styled.div`
  width: 100%;
  .main {
    position: relative;
    width: 100%;
    height: 100vh;
    background-image: url("./images/space.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .message__top {
    position: relative;
    top: 6em;
    text-align: center;
    @media (min-width: ${breakpoint.xmd}){
      display: none;
   }
  }
  .message__bottom {
    position: absolute;
    left: 50%;
    bottom: 4em;
    font-family: calibri;
    transform: translate(-50%);
  }
  .message__sm {
   color: #ffffff; 
   text-align: center;
   @media (min-width: ${breakpoint.xmd}){
      display: none;
   }
  }
  .message__md {
   color: #ffffff; 
   @media (max-width: ${breakpoint.xmd}){
    display: none;
  }
`;
