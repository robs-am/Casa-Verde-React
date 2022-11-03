import styled from "styled-components";

const menu = styled.menu`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block: 1em;
  padding-inline: 0.6em;

  flex-wrap: wrap;
  flex-direction: column;
`;

const nav = styled.nav`
  margin-top: 1em;
  width: 100%;
  flex: 1;
`;

const navlinks = styled.navlinks`
  display: flex;

  justify-content: space-evenly;
  list-style: none;
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;

  flex-wrap: wrap;
  color: #202020;
  padding-bottom: 0.1em;
  cursor: pointer;
  a {
    text-decoration: none;
  }
`;

const navlink = styled.navlink(a)`
  padding-inline: 0.5em;
  font-weight: 500;

  &:hover {
    color: #4a6f2fe6;
    transition: 0.6s ease-in-out 0.1s;
  }
  a {
    padding-inline: 0.5em;
    font-weight: 500;
  } &:hover {
        color: #4a6f2fe6;
        transition: 0.6s ease-in-out 0.1s;
    }
`;
