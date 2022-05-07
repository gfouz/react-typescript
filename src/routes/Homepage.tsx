import * as React from 'react'
import styled, { ThemeProvider } from "styled-components"
import { theme } from "../theme"
import { about, technologies } from './content'
import ContactApps from '../components/ContactApps'
import Section from '../components/Section'
import Article from '../components/Article'
import Container from '../components/Container'
import Text from '../components/Text'
import Image from '../components/Image'
import Aside from '../components/Aside'
import Heading from '../components/Heading'
import HorizonLine from '../components/HorizonLine'
import SpyGlass from '../icons/SpyGlass'
import GitAlt from '../icons/GitAlt'
import Navbar from './Navbar'
import Footer from '../components/Footer'


const Homepage = () => {

  return (
    <>
      <ThemeProvider theme={theme}>
        <StyledHome>
          <Banner>
            <Logo>
              <Heading color="#ffffff"><h3>gfouz</h3></Heading>
              <SpyGlass color="#ffffff" size="1em" />
            </Logo>
            <div className="banner__title">
              <Heading 
                top="-1em"
                fontSize="2.5em" 
                color="#e6e6fa" 
                font="literata">
                <h1>Portfolio</h1>
              </Heading>
            </div>
            <HorizonLine />
            <div className="banner__navbar">
              <Navbar />
            </div> 
          </Banner>
          <Section padding="3em 0" align="flex-start">
            <Article padding="0 0.5em">
              <Heading color="#666666" padding="0 0.5em"><h3>A little about me</h3></Heading>
              <Text padding="0 0.5em">
                <p>{about}</p>
              </Text>
            </Article>
             <Container>
              <div className="container__grid">
                <img src= "./images/thinking.jpg" alt="woman" />
              </div>
              <div className="container__grid">
                <Heading color="#666666" padding="0 0.5em"><h3>Did you know?</h3></Heading>
                <Text padding="0 0.5em">
                 <p> 
                  React hydration is a technique used that is similar to rendering, 
                  but instead of having an empty DOM to render all of our react components into, 
                  we have a DOM that has already been built, with all our components rendered as HTML.
                 </p> 
                </Text>
              </div>
            </Container>
          </Section>
          <article className="stack">
            <Logo>
              <Heading color="#444444"><h3>gfouz</h3></Heading>
              <SpyGlass color="#444444" size="1.5em" />
            </Logo>
            <div className="stack__list">
              <h4 className="stack__title">Modern React State</h4>
              <h4 className="stack__title">zustang</h4>
              <h4 className="stack__title">react-query</h4>
              <h4 className="stack__title">react-hook-form</h4>
            </div>
          </article>
          <Section padding="2em 0" bg="#181818">
            <Article padding="0.1em 1em">
              <Heading color="#666666"><h3>I use the latest technologies</h3></Heading>
              <Text><p>{technologies}</p></Text>
            </Article>
            <Image src="./images/face.jpg" margin="2em 0 0 0" />
          </Section>
          <div className="contact"> 
              
          </div>
        </StyledHome>
      </ThemeProvider>
    </>

  );
}
export default Homepage;

const StyledHome = styled.div`
  min-height: 100vh;
  font-family: calibri;
  .contact {
    width: 100%;
    height: 400px;
    background-image: url('./images/coffeecup.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .stack {
    ${({ theme }) => theme.centered()}
    position: relative;
    text-align: center;
    width: 100%;
    height: 400px;
    background-image: url('./images/laptop.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .stack__image {
    max-width: 100%;
    height: auto;
  }
  .stack__list {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0.5em;
    border-radius: 5px;
    background-color: #22222290;
    box-shadow: 1px 1px 10px #222222;
  }
  .stack__title {
    ${({ theme }) => theme.reset()};
    color: ${({ theme }) => theme.white};
    text-shadow: 1px 1px 10px #000000;
    text-transform: uppercase;
  }
  
`;
const Banner = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 350px;
    background-color: #333333;
    .banner__title {
    animation: title 1s;
    animation-fill-mode: forwards;
    }
    .banner__navbar {
    width: 100%;  
    animation: navbar 6s;
    animation-fill-mode: forwards;
    }
    @keyframes title {
      from {
        transform: rotateY(180deg);
      }
      to {
        transform: rotateY(0);

      }
    }
    @keyframes navbar {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
`; 

const Logo = styled.div`
   position: absolute;
   text-align: center;
   top: 5px;
   left: 5px;
   .logo__title {
   color: #444444;
   margin: 5px;
  }
`;
//https://github.com/gfouz/react-tsx.git
//You can also disable this overlay by setting server.hmr.overlay to false in vite.config.js.