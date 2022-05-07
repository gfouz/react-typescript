import * as React from "react";
import { row, column } from "../mixins";
import styled, { css } from "styled-components";
interface Props {
  row?: boolean;
  column?: boolean;
  justify?: string;
  align?: string;
  children?: React.ReactNode;
}
let justifyContent: string = "";
let alignItems: string = "";

function Flexbox(props: Props) {
  justifyContent = props.justify || "center";
  alignItems = props.align || "center";
  return <StyledBox {...props}>{props.children}</StyledBox>;
}
export default Flexbox;

const StyledBox = styled.div`
  width: 100%;
  height: 100%;
  ${(props: Props) =>
    props.row &&
    css`
      ${row(justifyContent, alignItems)};
    `};
  ${(props: Props) =>
    props.column &&
    css`
      ${column(justifyContent, alignItems)};
    `};
`;
