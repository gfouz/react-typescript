import * as React from "react";
import styled, {css} from 'styled-components';
import { useLocation, Link } from "react-router-dom";

interface Props {
  color?: string;
  bg?: string;
  mixed?: any;
  fontFamily?: string;
  fontweight?: string;
  position?: string;
  height?: string;
  margin?: string;
  logo?: string;
  display?:string;
  children?: React.ReactNode;
}

function Header(props: Props) {
  const links = ["/contact", "/work", "/blog", "/"];
  const router = useLocation();
  const { pathname } = router;
  const currentlinks = links.filter((link) => link !== pathname);

  return (
    <>
      <StyledHeader {...props}>
        <div className="links">
          <div className="logo">{props.children}</div>
          {currentlinks.map((link, index) => (
            <div key={link + index}>
              <Link className="links__item" to={`${link}`}>
                {link === "/" ? "home" : link.slice(1)}
              </Link>
            </div>
          ))}
        </div>
      </StyledHeader>
    </>
  );
}
export default Header;
const StyledHeader = styled.div`
  --tallness: ${(props: Props) => props.height || "60px"};

  width: 100%;
  height: var(--tallness);
  top: 0;
  left: 0;
  right: 0;
  margin: ${(props: Props) => props.margin || "margin: 0"};
  background-color: ${(props: Props) => props.bg || "#444444"};
  position: ${(props: Props) => props.position};
  font-weight: ${(props: Props) => props.fontweight || "normal"};

  .links {
    display: flex;
    justify-content: space-evenly;
    a {
      color: ${(props: Props) => props.color || "#ffffff"};
      text-decoration: none;
      text-transform: uppercase;
      line-height: var(--tallness);
      @media (max-width: 500px) {
        display: ${(props: Props) => props.display};
      }
    }
  }
  .logo {
    width: var(--tallness);
    height: var(--tallness);
    display: ${(props: Props) => props.logo || "none"};
    justify-content: center;
    align-items: center;
    place-items: center;
    img {
      width: calc(var(--tallness) - 40%);
      display: block;
    }
  }
  .hidden {
    display: none;
  }
  .visible {
    font-family: inherit;
  }

 
  ${(props: Props) =>
    props.mixed &&
    css`
      background-image: linear-gradient(#808080, #000000);
      .navbar-links {
        a {
          color: #ffffff;
        }
      }
    `}

`;
