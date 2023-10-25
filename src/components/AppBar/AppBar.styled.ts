import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavigationStyled = styled.div`
  display: flex;
  padding: 20px 10px 20px 10px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e1e1e1;
`;

const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
`;

const NavItem = styled.li`
  margin-right: 25px;
`;

const LinkStyled = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  font-size: 24px;
  color: #ff6b08;
  &.active {
    color: white;
  }
`;

export { NavigationStyled, NavList, NavItem, LinkStyled };
