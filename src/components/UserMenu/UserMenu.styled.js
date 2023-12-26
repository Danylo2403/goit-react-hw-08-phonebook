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
