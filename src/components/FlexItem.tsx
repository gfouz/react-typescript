import * as React from 'react'
import styled, { css } from "styled-components";
import { row, column, breakpoint } from '../mixins';

interface Props {
  row?: boolean;
  column?: boolean;
  justify?: string;
  align?: string;
  wrap?: string;
  width?: string;
  max?: string;
  height?: string;
  padding?: string;
  border?: string;
  radius?: string;
  resize?: string;
  children?: React.ReactNode;
}

function FlexItem(props: Props) {
  return <StyledFlexItem {...props} >{props.children}</StyledFlexItem>;
}

export default FlexItem;

const StyledFlexItem = styled.div`
  flex-wrap: ${(props: Props)=> props.wrap || "nowrap"};
  border: ${(props: Props) => props.border || "none"};
  border-radius: ${(props: Props) => props.radius || "0"};
  width: ${(props: Props) => props.width || "100%"};
  max-width: ${(props: Props) => props.max};
  height: ${(props: Props) => props.height};
  padding: ${(props: Props) => props.padding || "0"};
  @media (max-width: ${(props: Props) => props.resize || breakpoint.md}){
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
