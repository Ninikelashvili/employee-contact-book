import React, { useEffect, useState } from "react";
import { IoLogoReact } from "react-icons/io5";
import { AiOutlineRollback } from "react-icons/ai";
import { GrContactInfo } from "react-icons/gr";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Header = React.memo(() => {
  const [active, setActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/create") {
      setActive(true);
    } else if (location.pathname === "/" || location.pathname === "/list") {
      setActive(false);
    }
  }, [location]);

  return (
    <HeaderNav>
      <Link to={"/"}>
        <IoLogoReact />
      </Link>
      {active ? (
        <Link to={"/"}>
          <AiOutlineRollback />
        </Link>
      ) : (
        <span>
          <Link to={"/create"}>
            <button>Add new contact</button>
          </Link>
          <Link to={"/list"}>
            <GrContactInfo />
          </Link>
        </span>
      )}
    </HeaderNav>
  );
});

const HeaderNav = styled.nav`
  position: fixed;
  background: #e9ecef;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 5px 10px #dfe4e8;
  padding: 1.5% 10%;
  min-height: 100px;
  svg {
    color: #6c757d;
    font-size: 25px;
  }
  button {
    padding: 15px 20px;
    margin: 0 15px;
    border: solid 0.5px #fff;
    outline: none;
    background: transparent;
    color: #000;
    font-family: system-ui;
    font-weight: 200;
    cursor: pointer;
    transition: all 0.5s ease;
    :hover {
      box-shadow: 0 0 20px #c3c3c3;
    }
  }
  span {
    display: flex;
    align-items: center;
    svg {
      margin-top: 5px;
      path {
        stroke: #6c757d;
      }
    }
  }
`;
export default Header;
