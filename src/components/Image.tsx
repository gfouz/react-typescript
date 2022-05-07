import { theme } from "../theme";
import styled, { ThemeProvider } from "styled-components";

interface Props {
  src?: string;
  alt?: string;
  margin?: string;
  padding?: string;
  align?: string;
  width?: string;
  maxwidth?: string;
  size?: string;
  height?: string;
  imageheight?: string;
  children?: React.ReactNode;
}
const Image = (props: Props) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StyledImage {...props}>
          <img src={props.src} alt={props.alt}/>
        </StyledImage>
      </ThemeProvider>
    </>
  );
};

export default Image;
const StyledImage = styled.div`
    height: ${(props: Props) => props.height || "100%"};
    text-align: ${(props: Props)=> props.align || "center"};
    max-width: ${(props: Props) => props.maxwidth || "400px"};
    width: ${(props: Props) => props.width || "400px"}
    padding: ${(props: Props) => props.padding || "0"};
    img {
    margin: ${(props: Props) => props.margin || "0"};  
    max-width: ${(props: Props) => props.size || "100%"};
    height: ${(props: Props)=> props.imageheight || "auto"};
    object-fit: ${(props: Props)=> props.fit || "none"};
    }
    
    
`;
