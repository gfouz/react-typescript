import { theme } from "../theme";
import styled, { ThemeProvider, css } from "styled-components";

interface Props {
  bg?: string;
  padding?: string;
  margin?: string;
  align?: string;
  justify?: string;
  breakpoint?: string;
  children?: React.ReactNode;
}
const Section = (props: Props) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StyledSection {...props}>{props.children}</StyledSection>
      </ThemeProvider>
    </>
  );
};

export default Section;
const StyledSection = styled.section`
  width: 100%;
  display: flex;
  align-items: ${(props: Props)=> props.align || "center"};
  justify-content: ${(props: Props)=> props.justify || "space-evenly"};
  margin: ${(props: Props) => props.margin || "0"};
  padding: ${(props: Props) => props.padding || "0"};
  background-color: ${(props: Props) => props.bg || "transparent"};
  @media (max-width: ${(props: Props) => props.breakpoint || "700px"}) {
    flex-direction: column;
    align-items: center;
  }
  
`;

