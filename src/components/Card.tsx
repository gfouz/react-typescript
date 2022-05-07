import * as React from "react";
import styled from "styled-components";
import Div from "../components/Div";
import Heading from "../components/Heading";
import SpyGlass from "../icons/SpyGlass";

const Card = () => {
  return (
    <StyledCard>
      <div className="card">
        <Div
          column
          radius="5px"
          justify="center"
          align="center"
          width="400px"
          height="200px"
        >
          <Heading color="#ffffff" padding="2em 0" size="2em">
            <h1>Portfolio</h1>
          </Heading>
          <div>
            <SpyGlass size="2em" color="#ffffff" />
          </div>
          <Heading color="#ffffff" padding="2em 0">
            <h1>Loading...</h1>
          </Heading>
        </Div>
      </div>
    </StyledCard>
  );
};
export default Card;
const StyledCard = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  .card {
    padding: 1em;
    text-align: center;
    background-color: #333333;
    border-radius: 8px;
    h1 {
      font-family: literata;
    }
  }
`;
