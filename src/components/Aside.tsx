import * as React from "react";
import styled, { css } from "styled-components";

interface Props {
  children?: React.ReactNode;
  textAlign?: string;
  maxWidth?: string;
  margin?: string;
  padding?: string;
  textColor?: string;
  textPadding?: string;
  textMargin?: string;
  titleColor?: string;
  fontSize?: string;
  fontFamily?: string;
  breakpoint?: string;
  imageSize?: string;
  imagePadding?: string;
  imageMargin?: string;
  boxSize?: string;
  column?: string;
  row?: string;
}

function Aside(props: Props) {
  return (
    <>
      <StyledAside {...props}>{props.children}</StyledAside>
    </>
  );
}

export default Aside;

const StyledAside = styled.aside`
  position: relative;
  display: flex;
  max-width: ${(props: Props) => props.maxWidth};
  margin: ${(props: Props) => props.margin || "0"};
  padding: ${(props: Props) => props.padding || "0"};
  @media (max-width: 700px){
    max-width:100%;
  }
 
  
  img {
    max-width: ${(props: Props) => props.imageSize || "100%"};
    padding: ${(props: Props) => props.imagePadding || "0"};
    margin: ${(props: Props) => props.imageMargin || "0"};
    height: 100%;
    object-fit: cover;
  }

  .aside__grid {
    width: ${(props: Props) => props.boxSize || "50%"};
    text-align: ${(props: Props) => props.textAlign || "left"};
  }

  ${(props: Props) =>
    props.column &&
    css`
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    `};

  ${(props: Props) =>
    props.row &&
    css`
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
    `};
`;
