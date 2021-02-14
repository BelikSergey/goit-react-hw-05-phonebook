import React, { Component } from "react";
import { nanoid } from "nanoid";
import s from "./ContactForm.module.css";
// import PropTypes from 'prop-types';

export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmitForm = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    // this.props.onSubmit(this.state)
    const isValidForm = this.validateForm();
    if (isValidForm) {
      this.props.onSubmit({ id: nanoid(), name, number });
    } else return;
    this.reset();
  };
  validateForm = () => {
    const { name, number } = this.state;
    const { onChekunike } = this.props;
    if (!name || !number) {
      alert("Empty fields!!! Please fill");
      return false;
    }
    return onChekunike(name);
  };
  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={s.form} onSubmit={this.handleSubmitForm}>
        <p>Name</p>
        <input className={s.FormInput}
          type="text"
          name="name"
          // id={this.nameId}
          placeholder="Enter name"
          value={name}
          onChange={this.handleInputChange}
        ></input>

        <p>Number</p>
        <input className={s.FormInput}
          type="tel"
          name="number"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
          placeholder="345-67-89"
          value={number}
          onChange={this.handleInputChange}
        ></input>
        <button className={s.buttonForm} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
