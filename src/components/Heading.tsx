import * as React from 'react';
import styled from 'styled-components'

interface Props {
	color?: string
	margin?: string
	padding?: string
	textAlign?: string
	fontFamily?: string
	fontSize?: string
  transform?: string
  children?: React.ReactNode
}

function Heading(props: Props) {

	return(
      <StyledHeading {...props}>{props.children}</StyledHeading>
		);
}

export default Heading;

const StyledHeading = styled.article`
    width: 100%;
    text-align: ${(props: Props)=> props.textAlign || "left"};
    margin: ${(props: Props)=> props.margin};
    padding: ${(props: Props)=> props.padding};
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
    color: ${(props: Props)=> props.color || "#444444"};
    font-family: ${(props: Props)=> props.fontFamily};
    text-transform: ${(props: Props)=> props.transform};
    }
`;