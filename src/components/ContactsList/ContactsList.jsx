import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import s from "./ContactsList.module.css";
import ContactListItem from './ContactListItem'


function ContactsList({ contacts, onRemove }) {
  if (contacts.length === 0) return null;
  // console.log(contacts);
  return (
      <div >
      <TransitionGroup component="ul" className={s.UlList}>
      {/* <h3>Contacts</h3> */}
      {contacts.map((contact) => (
        <CSSTransition key={contact.id} timeout={250} classNames={s}>
          <ContactListItem  {...contact} onRemove={onRemove} />
          </CSSTransition>
      ))}
    </TransitionGroup>
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
