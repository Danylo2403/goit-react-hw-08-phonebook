// import styled from 'styled-components';
// import {
//   Form as FormikForm,
//   Field as FormikField,
//   ErrorMessage as Error,
// } from 'formik';

// export const Form = styled(FormikForm)`
//   max-width: 200px;
//   gap: 10px;
//   display: flex;
//   flex-direction: column;
// `;

// export const Field = styled(FormikField)`
//   &:focus-visible {
//     box-shadow: 0 0 0 3px lightskyblue;
//   }
// `;

// export const ErrorMessage = styled(Error)`
//   color: #f96722;
//   font-size: 14px;
// `;
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
