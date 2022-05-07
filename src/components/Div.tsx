import * as React from "react";
import { row, column } from "../mixins";
import styled, { css } from "styled-components";
interface Props {
  row?: boolean;
  column?: boolean;
  justify?: string;
  align?: string;
  wrap?: string;
  width?: string;
  maxwidth?: string;
  height?: string;
  padding?: string;
  border?: string;
  radius?: string;
  children?: React.ReactNode;
}

function Div(props: Props) {
  return <StyledDiv {...props}>{props.children}</StyledDiv>;
}
export default Div;

const StyledDiv = styled.div`
  flex-wrap: ${(props: Props)=> props.wrap || "nowrap"};
  border: ${(props: Props) => props.border || "none"};
  border-radius: ${(props: Props) => props.radius || "0"};
  width: ${(props: Props) => props.width };
  max-width: ${(props: Props) => props.maxwidth };
  height: ${(props: Props) => props.height};
  padding: ${(props: Props) => props.padding || "0"};
  ${(props: Props) =>
    props.row &&
    css`
      ${row(props.justify || "center", props.align || "center")};
    `};
  ${(props: Props) =>
    props.column &&
    css`
      ${column(props.justify || "center", props.align || "center")};
    `};
`;
