import { theme } from "../theme";
import styled, { ThemeProvider } from "styled-components";

interface Props {
  src?: string;
  margin?: string;
  padding?: string;
  textAlign?: string;
  maxWidth?: string;
  imageSize?: string;
  children?: React.ReactNode;
}
const Image = (props: Props) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StyledImage {...props}>
          <img src={props.src} />
        </StyledImage>
      </ThemeProvider>
    </>
  );
};

export default Image;
const StyledImage = styled.div`
    text-align: ${(props: Props)=> props.textAlign || "center"};
    max-width: ${(props: Props) => props.maxWidth || "400px"}
    padding: ${(props: Props) => props.padding || "0"};
    img {
    margin: ${(props: Props) => props.margin || "0"};  
    max-width: ${(props: Props) => props.imageSize || "100%"};
    height: auto;
    }
    @media (max-width: 700px) {
    max-width: 100%;
    img {
    max-width: "100%";
    height: auto;
    }
    }
    
`;
