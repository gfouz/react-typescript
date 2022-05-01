import * as React from 'react'
import styled from 'styled-components'

interface Props {
	children?: React.ReactNode;
	bg?: string;
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
width: 50%;
height: 500px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: ${(props: Props)=> props.bg || "transparent"};

`;
