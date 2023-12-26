// import styled from 'styled-components';

// export const StyledNav = styled.nav`
//   display: flex;
//   gap: 24px;
// `;
import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  gap: 24px;
  
  padding: 10px; /* Добавил отступы для контента навигации */
  
`;

// Пример стилизованного NavLink внутри навигации
export const StyledNavLink = styled.a`
  text-decoration: none;
  color: #fff; /* Белый текст */
  padding: 8px 12px;
  border-radius: 6px;
  transition: background-color 200ms ease-in;
  
  &:hover,
  &:focus {
    background-color: #555; /* Темный фон при наведении */
  }
`;
