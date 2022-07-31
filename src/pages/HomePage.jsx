import React from "react";
import styled from "styled-components";
import { GrContactInfo } from "react-icons/gr";

const HomePage = React.memo(() => {
  return (
    <Home>
      <span>
        <p>Welcome! Time to create your contact list</p>
        <GrContactInfo />
      </span>
    </Home>
  );
});

const Home = styled.div`
  span {
    position: absolute;
    top: 40%;
    left: 50%;
    width: 100%;
    padding: 10px;
    transform: translate(-50%, -40%);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    p {
      font-size: 30px;
      font-family: system-ui;
      font-weight: 200;
      letter-spacing: 2px;
      color: #6c757d;
      @media (max-width: 700px) {
        font-size: 20px;
      }
    }
    svg {
      margin-top: 20px;
      font-size: 60px;
      path {
        stroke: #dee2e6;
      }
    }
  }
`;
export default HomePage;
