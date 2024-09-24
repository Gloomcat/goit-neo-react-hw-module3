import css from './Contact.module.css';

import { IoPerson } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';

const Contact = ({ id, name, phone, deleteContact }) => {
  return (
    <div className={css['contact']}>
      <ul>
        <li>
          <IoPerson size={18} />
          <p>{name}</p>
        </li>
        <li>
          <FaPhoneAlt size={18} />
          <p>{phone}</p>
        </li>
      </ul>
      <button
        type="button"
        onClick={() => {
          deleteContact(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
