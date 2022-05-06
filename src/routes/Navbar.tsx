  import * as React from 'react'
  import styled from 'styled-components'    
  import {Link} from 'react-router-dom';    



function Navbar() {

  return(
          <>
            <StyledNavbar>
            <nav className="navbar">
              <ul className="navbar__list">
                <li className="navbar__item">
                  <Link  to="/contact" className="navbar__link">
                    CONTACT
                  </Link>
                </li>
                <li className="navbar__item">
                  <a href="https://gfouz.github.io/react-workshop/#/work" className="navbar__link">
                    WORK
                  </a>
                </li>
                <li className="navbar__item">
                  <a href="https://gfouz.github.io/react-workshop/#/blog" className="navbar__link">
                    BLOG
                  </a>
                </li>
              </ul>
            </nav>
           </StyledNavbar> 
        </>
    );
}
export default Navbar;
            
const StyledNavbar = styled.div`

.navbar {
    width: 100%;
    position: relative;
    top: -4px;
    background-color: #fe9900;
    &__list {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      height: 30px;
      width: 100%;
      padding: 0;
    
    }
    &__item {
      list-style-type: none;
    }
    &__link {
      margin: 0;
      text-decoration: none;
      color: #ffffff;
      font-weight: bolder;
    }
  }
`;

// npm install react-router-dom@5.3.0
