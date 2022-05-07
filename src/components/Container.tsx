import * as React from 'react'
import styled from 'styled-components'

interface Props {
	bg?: string;
	width?: string;
	margin?: string;
	padding?: string;
	children?: React.ReactNode;
	
}

function Container(props: Props) {

	return(
       <>
         <StyledContainer {...props}>
              {props.children}
         </StyledContainer>
       </>
		);
}
export default Container;

const StyledContainer = styled.article`
display: flex;
max-width: ${(props: Props)=> props.width || "400px"};
margin: ${(props: Props)=> props.margin || "0"};
padding: ${(props: Props)=> props.padding || "0"};
background-color: ${(props: Props)=> props.bg || "transparent"};
 .container__image {
	width: 50%;
	text-align: center;
	img {
		max-width: 100%;
		height: 100%;
		object-fit: cover;
	}
}
.container__text {
	width: 50%;
	text-align: left;
}
@media (max-width: 820px) {
		max-width: 100%;
	}
`;
