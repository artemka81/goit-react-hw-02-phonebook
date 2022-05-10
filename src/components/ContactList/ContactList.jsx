import PropTypes from 'prop-types';
import { ContactItem } from './ContactItem';
export const ContactList = ({ contacts, handleDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <ContactItem
        key={id}
        id={id}
        name={name}
        number={number}
        onDeleteContact={handleDeleteContact}
      />
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array,
  handleDeleteContact: PropTypes.func,
};
