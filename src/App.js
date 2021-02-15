import { Component } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { CSSTransition } from 'react-transition-group';
import styles from './App.module.css';
import ContactsList from "./components/ContactsList";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import LogoPhoneBook from './components/LogoPhoneBook';
import Container from './UI/Container/Container';


class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: "",
  };

  componentDidMount() {
    // console.log("компонент смонтирован");
    // console.log(localStorage.getItem("contacts"));
    if (localStorage.getItem("contacts") !== null) {
      const contacts = JSON.parse(localStorage.getItem("contacts"));
      // console.log(contacts);
      this.setState({ contacts: contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('компонент обновился');
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  handleSubmitForm = (newContact) => {
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };

  handleUniceContact = (name) => {
    const { contacts } = this.state;
    const isContactThere = contacts.find((contact) => contact.name === name);
    if (isContactThere) {
      toast.error('Contact is exist', {
        autoClose: 2000,
        position: "top-right",
    })
      // alert("Contact is exist");
      return;
    }
    //  else {
    //     alert('Add contact')
    // }
    return !isContactThere;
  };
  handleRemoveContact = (id) =>
    this.setState(({ contacts }) => ({
      contacts: contacts.filter((contact) => contact.id !== id),
    }));

  handleFilterSearch = (filter) => this.setState({ filter });

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = this.filterContacts();
    return (
      <>
        <Container>
          {/* <CSSTransition
          appear
          in={true}
          className={styles}
          timeout={500}

          > */}
          <LogoPhoneBook/>
          {/* </CSSTransition> */}
        
        <ContactForm
          onSubmit={this.handleSubmitForm}
          onChekunike={this.handleUniceContact}
        />
          </Container>
          <Container>
        {contacts.length > 1 &&
           <CSSTransition timeout={5000} classNames={styles}>
             <div className={styles.SearchForm}>
             <p>Find contacts by name</p>
             <Filter filter={filter} onChange={this.handleFilterSearch} />
             </div>
           </CSSTransition>
         }
        <ContactsList
          contacts={filteredContacts}
          onRemove={this.handleRemoveContact}
        />
        </Container>
         <ToastContainer position="top-left" autoClose={2000} />
      </>
    );
  }
}

export default App;
