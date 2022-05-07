import * as React from 'react';
import {row, column} from '../mixins';
import styled from "styled-components";

interface Props {
  bg?: string;
  padding?: string;
  margin?: string;
  align?: string;
  justify?: string;
  direction?: string;
  children?: React.ReactNode;
}
const Section = (props: Props) => {
  return (
    <>
        <StyledSection {...props}>{props.children}</StyledSection>
    </>
  );
};

export default Section;
const StyledSection = styled.section`
  width: 100%;
  flex-wrap: wrap;
  ${row("space-evenly", "center")};
  margin: ${(props: Props) => props.margin || "0"};
  padding: ${(props: Props) => props.padding || "0"};
  background-color: ${(props: Props) => props.bg || "transparent"};
`;

