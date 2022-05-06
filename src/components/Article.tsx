import { theme } from "../theme";
import styled, { ThemeProvider } from "styled-components";
interface Props {
  maxWidth?: string;
  align?: string;
  justify?: string;
  direction?: string;
  margin?: string;
  padding?: string;
  gridSize?: string
  children?: React.ReactNode;
}
const Article = (props: Props) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StyledArticle {...props}>{props.children}</StyledArticle>
      </ThemeProvider>
    </>
  );
};

export default Article;
const StyledArticle = styled.article`
  position: relative;
  display: flex;
  align-items: ${(props: Props)=> props.align || "center"};
  justify-content: ${(props: Props)=> props.justify || "flex-start"};
  flex-direction: ${(props: Props)=> props.direction || "column"};
  max-width: ${(props: Props) => props.maxWidth || "400px"};
  margin: ${(props: Props) => props.margin || "0"};
  padding: ${(props: Props) => props.padding || "0"};
  @media (max-width: 700px){
    max-width:100%;
  }
  .article__grid {
    width: ${(props: Props) => props.gridSize || "50%"};
  }
`;
