import styled from 'styled-components';

export const AppLayout = styled.div`
  max-width: 1200px;
  min-height: 600px;
  margin: 0 auto;
  padding: 20px;
  outline: 2px solid #3498db;
  background-color: #ecf0f1;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

export const AppTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #2c3e50;
`;

export const ContactSection = styled.div`
  margin-top: 2rem;
`;

export const LoadingMessage = styled.p`
  font-style: italic;
  color: #27ae60;
`;

export const ErrorMessage = styled.p`
  color: #c0392b;
  font-weight: bold;
`;
