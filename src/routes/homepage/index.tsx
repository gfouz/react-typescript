import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import { about, thought, technologies } from "./content";
import FlexBox from "../../components/FlexBox";
import Box from "../../components/Box";
import Section from "../../components/Section";
import Text from "../../components/Text";
import Image from "../../components/Image";
import HorizonLine from "../../components/HorizonLine";
import SpyGlass from "../../icons/SpyGlass";
import Nav from "../../components/Nav";
import { GlobalStyles } from "../../global";
import Headline from "../../components/Headline";
import Footer from "../../components/Footer";

const maintitle: object = {
	top:"-0.4em",
	text:"Portfolio",
	fontsize:"1.2em",
	position:"relative",
	color:"#e6e6fa",
	space:"5px",
	family:"orangina"  
}

const Homepage = () => {
  return (
	<>
	  <ThemeProvider theme={theme}>
		<GlobalStyles />
		<StyledHome>
		  <Banner>
			<Logo>
			  <Headline tag="h3" color="#ffffff" text="gfouz" />
			  <SpyGlass color="#ffffff" size="1em" />
			</Logo>
			<div className="banner__title">
			  <Headline {...maintitle}/>
			</div>
			<HorizonLine />
			<div className="banner__navbar">
			  <Nav />
			</div>
			<SpyGlass color="#ffffff" size="1.5em" />
		  </Banner>
		  <Section padding="2em 0.5em" justify="space-evenly">
			<FlexBox row max="450px">
			  <Box padding="0.7em">
				<Image src="./images/html.jpg" alt="man" radius="10px" cover />
			  </Box>
			</FlexBox>
			<FlexBox row max="450px">
			  <Box padding="1em">
				<Headline tag="h2" color="#666666" text="A little about me" />
				<Text>{about}</Text>
			  </Box>
			</FlexBox>
		  </Section>
		  <article className="stack">
			<Logo>
			  <Headline tag="h3" color="#444444" text="gfouz" />
			  <SpyGlass color="#444444" size="1.5em" />
			</Logo>
			<Box width="250px">
			  <div className="stack__list">
				<h4 className="stack__title">Modern React State management</h4>
				<h4 className="stack__title">zustang</h4>
				<h4 className="stack__title">react-query</h4>
				<h4 className="stack__title">react-hook-form</h4>
			  </div>
			</Box>
		  </article>
		  <Section
			padding="2em 0"
			bg="#181818"
			align="flex-start"
			justify="space-evenly"
		  >
			<FlexBox row max="450px">
			  <Box padding="2em">
				<Headline tag="h1" color="#999999" text="Technologies" />
				<Text color="#999999">
				  <p>{technologies}</p>
				</Text>
			  </Box>
			</FlexBox>
			<FlexBox row max="450px">
			  <Box padding="2em">
				<Image
				  src="./images/face2.png"
				  alt="man"
				  radius="10px"
				  cover
				  float="left"
				  margin="0 1em"
				/>
				<Headline tag="h1" color="#999999" text="Inspiration" />
				<Text color="#999999">{thought}</Text>
			  </Box>
			</FlexBox>
		  </Section>
		  <Footer bg="#434343" padding="2em 0">
			<FlexBox row>
			  <Box padding="1em" textalign="center">
				<SpyGlass color="#ffffff" size="3em" />
				<Box padding="1em" textalign="left">
				  <Headline color="#666666" text="Always learning " />
				  <Text>
					Having goals and staying committed to them will keep our
					focus on the things that we have identified as essential to
					reaching our desired outcomes.
					<p>
					  <strong>gfouz &copy; {new Date().getFullYear()}</strong>
					</p>
				  </Text>
				</Box>
			  </Box>
			</FlexBox>
		  </Footer>
		</StyledHome>
	  </ThemeProvider>
	</>
  );
};
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
	background-image: url("./images/coffeecup.jpg");
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
	background-image: url("./images/laptop.jpg");
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
  padding: 5em 0;
  background-color: #333333;
  .banner__title {
	animation: title 1s;
	animation-fill-mode: forwards;
  }
  .banner__navbar {
	width: 100%;
	margin: 0 0 2em 0;
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
