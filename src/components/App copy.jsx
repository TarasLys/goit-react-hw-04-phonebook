import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './Forms/ContactForm';
import data from './data.json';
import { Filter } from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const stringiContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(stringiContacts) ?? data;
    setContacts(parsedContacts);
  }, []);

  useEffect(() => {
    const stringiContacts = JSON.stringify(contacts);
    localStorage.setItem('contacts', stringiContacts);
  }, [contacts]);

  const createContacts = data => {
    const newContacts = {
      ...data,
      id: nanoid(),
    };
    const isDuplicated = contacts.find(el => el.name === data.name);
    if (isDuplicated) return alert(`${data.name} is already in contact.`);
    setContacts(prev => [...prev, newContacts]);
  };

  const deleteContacts = id => {
    setContacts(prev => prev.filter(el => el.id !== id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <sector
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm createContacts={createContacts} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={setFilter} />
        <ContactsList
          deleteContacts={deleteContacts}
          contacts={filteredContacts}
        />
      </sector>
    </>
  );
};
