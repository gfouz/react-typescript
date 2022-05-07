import * as React from 'react'
import styled, { ThemeProvider } from "styled-components"
import { theme } from "../theme"
import { about, technologies } from './content'
import ContactApps from '../components/ContactApps'
import Div from '../components/Div'
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
            <SpyGlass color="#ffffff" size="1.5em"/>
          </Banner>
          <Section padding="2em 0" align="flex-start">
            <Article padding="0.5em">
              <Heading color="#666666" padding="0 0.5em" width="100%"><h3>A little about me</h3></Heading>
              <Text padding="0 0.5em">
                <p>{about}</p>
              </Text>
            </Article>
             <Container padding="0.5em">
              <div className="container__image">
                <Image 
                  src= "./images/thinking.jpg" 
                  alt="man" 
                  height="100%"
                  fit="cover"
                  padding="2em"
                />
              </div>
              <div className="container__text">
                <Heading color="#666666" padding="0.8em 0 0 0.5em"><h3>Did you know?</h3></Heading>
                <Text padding="0 0.7em">
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
            <Div row>
            <div className="stack__list">
              <h4 className="stack__title">Modern React State management</h4>
              <h4 className="stack__title">zustang</h4>
              <h4 className="stack__title">react-query</h4>
              <h4 className="stack__title">react-hook-form</h4>
            </div>
            </Div>
          </article>
          <Section padding="2em 0" bg="#181818">
            <Article padding="0.1em 1em">
              <Heading color="#666666" width="100%"><h3>Latest technologies</h3></Heading>
              <Text><p>{technologies}</p></Text>
            </Article>
            <Article padding="0.1em 1em">
              <Heading color="#666666" width="100%"><h3>Latest technologies</h3></Heading>
              <Text><p>{technologies}</p></Text>
            </Article>
          </Section> 
          <Footer bg="#434343">
          <Div row justify="space-evenly" width="100%">
            <Div width="50%" row justify="flex-start">
             <Image src="./images/footer.jpg" />
            </Div>
            <Div width="50%" row height="100%">
             <Text padding="1em" color="#ffffff">
                 <p> 
                  React hydration is a technique used that is similar to rendering, 
                  but instead of having an empty DOM to render all of our react components into, 
                  we have a DOM that has already been built, with all our components rendered as HTML.
                 </p> 
             </Text>
            </Div> 
           </Div>
          </Footer>
        </StyledHome>
      </ThemeProvider>
    </>

  );
}
export default Homepage;

const StyledHome = styled.div`
  min-height: 100vh;
  font-family: calibri;
  .notfinished {
    text-align: center;
    color: #ffffff;
    line-height: 400px;
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
    padding: 5em;
    background-color: #333333;
    .banner__title {
    animation: title 1s;
    animation-fill-mode: forwards;
    }
    .banner__navbar {
    width: 100%; 
    margin:0 0 2em 0; 
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