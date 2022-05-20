import * as React from "react";
import { row, column, breakpoint } from '../mixins';
import styled, {css} from "styled-components";

interface Props {
  bg?: string;
  max?: string;
  row?: boolean;
  wrap?: string;
  align?: string;
  width?: string;
  border?: string;
  radius?: string;
  resize?: string;
  height?: string;
  column?: boolean;
  justify?: string;
  padding?: string;
  

  children?: React.ReactNode;
}

function FlexBox(props: Props) {
  return <StyledBox {...props}>{props.children}</StyledBox>;
}

export default FlexBox;

const StyledBox = styled.div`
background-color: ${(props: Props)=> props.bg};
flex-wrap: ${(props: Props)=> props.wrap || "nowrap"};
border: ${(props: Props) => props.border || "none"};
border-radius: ${(props: Props) => props.radius || "0"};
width: ${(props: Props) => props.width};
max-width: ${(props: Props) => props.max};
height: ${(props: Props) => props.height || "100%"};
padding: ${(props: Props) => props.padding || "0"};
@media (max-width: ${(props: Props) => breakpoint.xmd}){
    ${(props: Props) => column(props.justify, props.align)};
  }
@media (max-width: ${(props: Props) => breakpoint.xmd}){
     max-width: 100%;
  }  
${(props: Props) =>
  props.row &&
  css`
    ${row(props.justify, props.align)};
  `};
${(props: Props) =>
  props.column &&
  css`
    ${column(props.justify, props.align)};
  `};
`;
