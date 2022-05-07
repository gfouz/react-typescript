import * as React from 'react'
import styled from 'styled-components'

interface Props {
   color?: string
   fontFamily?: string
   fontSize?: string
   width?: string
   maxwidth?: string
   padding?: string
   margin?: string
   children?: React.ReactNode
}

const Text = (props: Props)=> {

	return(
		    <>
           <StyledText {...props}>{props.children}</StyledText>
        </>
		);
}
export default Text;

const StyledText = styled.article`
  width: ${(props: Props)=> props.width};
  max-width: ${(props: Props)=> props.maxwidth || "400px"};
  padding: ${(props: Props)=> props.padding};
  margin: ${(props: Props)=> props.margin};
  p {
    color: ${(props: Props) => props.color || "#777777"};
    font-family: ${(props: Props) => props.fontFamily || "calibri"};
    font-size: ${(props: Props) => props.fontSize};
  }
  @media (max-width: 820px) {
    max-width: 100%;
  }
`;