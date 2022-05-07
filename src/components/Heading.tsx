import * as React from 'react';
import styled from 'styled-components'

interface Props {
    top?: string
    left?: string
	color?: string
	margin?: string
	padding?: string
	textAlign?: string
	font?: string
	fontSize?: string
    transform?: string
    letterSpacing?: string
    children?: React.ReactNode
}

function Heading(props: Props) {

	return(
      <StyledHeading {...props}>{props.children}</StyledHeading>
		);
}

export default Heading;

const StyledHeading = styled.article`
    position: relative;
    width: 100%;
    top:${(props: Props)=> props.top};
    left: ${(props: Props)=> props.left};
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
    font-family: ${(props: Props)=> props.font || "calibri"};
    font-size: ${(props: Props)=> props.fontSize};
    text-transform: ${(props: Props)=> props.transform};
    letter-spacing: ${(props: Props)=> props.letterSpacing};
    }
`;