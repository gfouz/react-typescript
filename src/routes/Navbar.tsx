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
    &__list {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      height: 100px;
      width: 100%;
      padding: 0;
      background-color: #ffffff;
    }
    &__item {
      list-style-type: none;
    }
    &__link {
      margin: 0 1em;
      text-decoration: none;
      color: #43515a;
      font-weight: bolder;
    }
  }
`;

// npm install react-router-dom@5.3.0
