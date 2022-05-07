import * as React from 'react';
import styled from 'styled-components'

interface Props {
    top?: string
    left?: string
	color?: string
    width?: string
	margin?: string
	padding?: string
	align?: string
	font?: string
	size?: string
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
    width: ${(props: Props)=> props.width || "fit-content"};
    top:${(props: Props)=> props.top};
    left: ${(props: Props)=> props.left};
    text-align: ${(props: Props)=> props.align || "left"};
    padding: ${(props: Props)=> props.padding};
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
    color: ${(props: Props)=> props.color || "#444444"};
    margin: ${(props: Props)=> props.margin};
    font-family: ${(props: Props)=> props.font || "calibri"};
    font-size: ${(props: Props)=> props.size};
    text-transform: ${(props: Props)=> props.transform};
    letter-spacing: ${(props: Props)=> props.letterSpacing};
    }
`;