import * as React from "react";
import styled, { css } from "styled-components";

interface Props {
  bg?: string;
  color?: string;
  itemOne?: string;
  itemTwo?: string;
  height?: string;
  simple?: string;
  textAlign?: string;
  children?: React.ReactNode;
}

function Footer(props: Props) {
  return (
    <>
      <StyledFooter {...props}>{props.children}</StyledFooter>
    </>
  );
}
export default Footer;

const StyledFooter = styled.footer`
  height: ${(props: Props) => props.height};
  color: ${(props: Props)=> props.color};
  background-color: ${(props: Props)=> props.bg};
  ${(props: Props) =>
    props.simple &&
    css`
      --full-height: ${(props: Props) => props.height}
      width: 100%;
      position: relative;
      height: var(--full-height);
      line-height: var(--full-height);
      text-align: ${(props: Props) => props.textAlign || "center"};
    `};
`;
