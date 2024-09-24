import css from './ContactList.module.css';

import Contact from '../Contact/Contact.jsx';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css['contact-list']}>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact
            id={contact.id}
            name={contact.name}
            phone={contact.number}
            onDelete={onDelete}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
