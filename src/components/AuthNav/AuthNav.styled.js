import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavWrapper = styled.div`
  display: flex;
  gap: 16px;
  padding: 10px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #fff; /* Белый текст */
  border-radius: 8px;
  padding: 8px 12px;
  background: rgba(41, 128, 185, 0.8); /* Светло-синий фон */
  transition: all 200ms ease-in;
  &:hover,
  :focus {
    background: rgba(33, 97, 140, 0.8); /* Темно-синий фон при наведении */
  }
`;
