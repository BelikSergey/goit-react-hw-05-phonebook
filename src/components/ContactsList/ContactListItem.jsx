import PropTypes from "prop-types";
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { CgClose } from "react-icons/cg";
import s from "./ContactsList.module.css";

export default function ContactListItem({ id, name, number, onRemove }) {
    // console.log(name, number);
    return (
      // <CSSTransition
      // classNames={s}
      //   in={true} 
      //   appear={true}
      //   timeout={250}
      //   unmountOnExit>
          
        <li className={s.Item}>
        <span>{name}</span><span>{number}</span> 
        <button className={s.buttonDelete} onClick={() => onRemove(id)}>
          <CgClose/>
        </button>
      </li>
      // </CSSTransition>
      
    );
  }
  ContactListItem.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      })
    ),
  };