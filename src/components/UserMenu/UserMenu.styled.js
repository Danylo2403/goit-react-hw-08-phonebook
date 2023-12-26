// import styled from 'styled-components';

// export const UserMenuWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 24px;
// `;

// export const Text = styled.p`
//   text-align: center;
//   font-size: 16px;
// `;

// export const Button = styled.button`
//   color: whitesmoke;
//   font-size: 16px;
//   border-radius: 6px;
//   border: none;
//   padding: 4px 6px;
//   background: #1976d2;
//   transition: all 200ms ease-in;
//   &:hover,
//   :focus {
//     background: #1565c0;
//   }
// `;
import styled from 'styled-components';

export const UserMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  background-color: #333; /* Темный фон */
  padding: 10px; /* Добавил отступы для контейнера пользователя */
`;

export const Text = styled.p`
  text-align: center;
  font-size: 16px;
  color: #fff; /* Белый цвет текста */
`;

export const Button = styled.button`
  color: #fff; /* Белый цвет текста */
  font-size: 16px;
  border-radius: 6px;
  border: none;
  padding: 8px 12px; /* Увеличил отступы */
  background: #4CAF50; /* Зеленый фон */
  transition: background 200ms ease-in;
  &:hover,
  :focus {
    background: #45a049; /* Темно-зеленый фон при наведении */
  }
`;
