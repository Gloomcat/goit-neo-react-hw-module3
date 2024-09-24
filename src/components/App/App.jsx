import css from './App.module.css';

import initialContacts from '../contacts.json';

import ContactForm from '../ContactForm/ContactForm.jsx';
import ContactList from '../ContactList/ContactList.jsx';
import SearchBox from '../SearchBox/SearchBox.jsx';

import { useEffect, useState } from 'react';

import { nanoid } from 'nanoid';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return initialContacts.map(contact => {
      return {
        ...contact,
        id: nanoid(),
      };
    });
  });

  const addContact = newContact => {
    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = id => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== id);
    });
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={contacts} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
