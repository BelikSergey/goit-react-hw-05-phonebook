import PropTypes from "prop-types";
import s from "./ContactsList.module.css";
import ContactListItem from './ContactListItem'


function ContactsList({ contacts, onRemove }) {
  if (contacts.length === 0) return null;
  // console.log(contacts);
  return (
      <div >
      <ul className={s.UlList}>
      {/* <h3>Contacts</h3> */}
      {contacts.map((contact) => (
        <ContactListItem key={contact.id} {...contact} onRemove={onRemove} />
      ))}
    </ul>
      </div>
    
  );
}

ContactsList.propTypes = {
  onRemove: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};


export default ContactsList;
