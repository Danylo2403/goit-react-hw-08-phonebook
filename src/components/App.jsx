import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppLayout } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { fetchContacts } from '../redux/operations';
import { getContacts, getError, getIsLoading } from '../redux/selectors';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const { isLoading, error, contacts } = useSelector((state) => ({
    isLoading: getIsLoading(state),
    error: getError(state),
    contacts: getContacts(state),
  }));

  return (
    <AppLayout>
      <h1 className="app-title">Phonebook</h1>
      <ContactForm />
      <div className="contact-section">
        {!error && contacts.length > 0 && <ContactList />}
        {isLoading && !error && <p className="loading-message">Loading contacts...</p>}
        {error && <p className="error-message">{error}</p>}
      </div>
    </AppLayout>
  );
};