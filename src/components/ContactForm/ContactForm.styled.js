import styled from 'styled-components';
import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikErrorMessage,
} from 'formik';

export const Form = styled(FormikForm)`
  max-width: 300px; /* Увеличил максимальную ширину формы */
  gap: 15px; /* Увеличил расстояние между элементами */
  display: flex;
  flex-direction: column;
`;

export const Field = styled(FormikField)`
  padding: 10px;
  border: 1px solid #ccc; /* Легкая серая граница */
  border-radius: 5px;
  &:focus {
    border: 1px solid lightskyblue; /* Граница при фокусе */
    outline: none;
  }
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  color: #f96722;
  font-size: 14px;
  margin-top: 5px; /* Добавил небольшой отступ сверху */
`;
