import * as React from 'react'
import styled from 'styled-components'

function HorizonLine() {

	return(
      <StyledLine>
        <div className="line"></div>
      </StyledLine>
		);
}
export default HorizonLine;

const StyledLine = styled.div`
  width: 100%;
   .line {
   	 position: relative;
   	 left: 5%;
     height: 3px;
     animation: line 2s;
     animation-fill-mode: forwards;
   }
   @keyframes line {
   	 from {
   	 	width: 0;
   	 	background-color: #333333;
   	 }
   	 to {
   	 	width: 90%;
   	 	background-color: #af956e;
   	 }
   }
`;

