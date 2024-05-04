import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { ContactList } from "./ContactList/ContactList";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";

export class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const persistedTasks = localStorage.getItem("contacts");
    if (persistedTasks) {
      this.setState({
        contacts: JSON.parse(persistedTasks),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.conacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  changeFilter = (filter) => {
    this.setState({ filter });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.text.toLowerCase().includes(filter.toLowerCase())
    );
  };
  handleAddContact = (name, number) => {
    const contactObj = {
      id: uuidv4(),
      text: name,
      number: number,
    };

    let checkedArr = this.state.contacts.find(
      (contact) => contact.text === name
    );

    if (checkedArr) {
      return alert(`${name} is already in contacts`);
    } else {
      this.setState((prev) => ({
        contacts: [...prev.contacts, contactObj],
      }));
    }
  };

  handlerRemoveContact = (idContact) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((contact) => contact.id !== idContact),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.handleAddContact} />

        <h2>Contacts</h2>
        {contacts.length > 1 && (
          <Filter value={filter} changeFilter={this.changeFilter} />
        )}

        {contacts.length > 0 && (
          <ContactList
            contacts={visibleContacts}
            onRemoveContact={this.handlerRemoveContact}
          />
        )}
      </>
    );
  }
}
