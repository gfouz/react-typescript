import * as React from 'react'
import styled from 'styled-components'

interface Props {
	bg?: string;
	maxWidth?: string;
	margin?: string;
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

const StyledContainer = styled.div`
max-width: ${(props: Props)=> props.maxWidth || "400px"};
@media (max-width: 820px) {
		max-width: 100%;
	}
margin: ${(props: Props)=> props.margin || "0"};
display: flex;
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
`;
