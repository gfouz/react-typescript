import * as React from "react";
import styled from "styled-components";
import FlexBox from "../components/FlexBox";
import Headline from "../components/Headline";
import SpyGlass from "../icons/SpyGlass";

const Card = () => {
  return (
    <StyledCard>
      <div className="card">
        <FlexBox
          column
          radius="5px"
          justify="center"
          align="center"
          height="200px"
        >
          <Headline color="#ffffff"  text="Portfolio" />
          <SpyGlass size="2em" color="#ffffff" />
          <Headline color="#ffffff" text="Loading..." />
       </FlexBox>
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

  }
`;
