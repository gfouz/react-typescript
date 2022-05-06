import * as React from 'react'
import styled from 'styled-components'

interface Props {
   color?: string
   fontFamily?: string
   fontSize?: string
   maxWidth?: string
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
  max-width: ${(props: Props) => props.maxWidth || "100%"};
  padding: ${(props: Props)=> props.padding};
  margin: ${(props: Props)=> props.margin};
  p {
    color: ${(props: Props) => props.color || "#777777"};
    font-family: ${(props: Props) => props.fontFamily || "calibri"};
    font-size: ${(props: Props) => props.fontSize};
  }
  @media (min-width: 700px) {
    max-width: ${(props: Props) => props.maxWidth || "400px"};
  }
`;