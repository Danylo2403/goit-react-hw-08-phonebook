import { ListItem as MuiListItem } from '@mui/material';
import styled from 'styled-components';

export const ListItem = styled(MuiListItem)`
  justify-content: space-between !important;
  max-width: 400px !important;
  background-color: #f0f0f0; /* Светло-серый фон */
  padding: 10px; /* Добавил отступы */
  margin-bottom: 10px; /* Добавил отступ снизу */
  border-radius: 8px; /* Закруглил углы */
  transition: background-color 200ms ease-in;
  
  &:hover {
    background-color: #e0e0e0; /* Измененный цвет фона при наведении */
  }
`;
