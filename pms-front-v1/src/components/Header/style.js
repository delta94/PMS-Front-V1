import styled from "styled-components";

const Header = styled.div`
  top: 0;
  position: fixed;
  width: 100%;
  height: 60px;
  background-color: rgba(1, 4, 3, 0.27);
  z-index: 1;
`;

const Nav = styled.ul`
  margin: 0 auto;
  width: 34%;
  height: 100%;
  float: right;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  margin-right: 9%;

  a {
    text-decoration: none;
    color: white;
    font-size: 16px;
  }
`;

export { Header, Nav };
