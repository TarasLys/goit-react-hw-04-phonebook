// import { useEffect, useState } from 'react';
// import { nanoid } from 'nanoid';
// import { ContactForm } from './Forms/ContactForm';
// import { Filter } from './Filter/Filter';
// import data from './data.json';
// import ContactsList from './ContactsList/ContactsList';

// export const App = () => {
//   const [contacts, setContacts] = useState(data);
//   const [filter, setFilter] = useState('');
   
//   useEffect(() => {
    
//       const stringiContacts = localStorage.getItem('contacts');
     
//     const parsedContacts = JSON.parse(stringiContacts) ?? [];
//     setContacts(parsedContacts);
//   }, []);







//   useEffect(() => {
//     const stringiContacts = JSON.stringify(contacts);
//     localStorage.setItem('contacts', stringiContacts);
//   }, [contacts]);


//   const createContacts = data => {
//     const newContacts = {
//       id: nanoid(),
//       ...data,
      
//     };
//     const isDuplicated = contacts.find(el => el.name === data.name);
//     if (isDuplicated) return alert(`${data.name} is already in contact.`);
//     setContacts(prev => [...prev, newContacts]);
//   };

//    const deleteContacts = id => {
//     setContacts(prev => prev.filter(el => el.id !== id));
//   };
  
//  const filteredContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//     return (
//       <>
//         <sector
//           style={{
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             flexDirection: 'column',

//             height: '100vh',
//           }}
//         >
//           <h1>Phonebook</h1>
//           <ContactForm createContacts={createContacts} />
//           <h2>Contacts</h2>
//           <Filter value={filter} onChange={setFilter} />
//           <ContactsList
//             deleteContacts={deleteContacts}
//             contacts={filteredContacts}
//           />
//         </sector>
//       </>
//     );
//   }



import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './Forms/ContactForm';
import { Filter } from './Filter/Filter';
import data from './data.json';
import ContactsList from './ContactsList/ContactsList';

export const App = () => {
  const savedContacts = JSON.parse(localStorage.getItem('contacts'));
  const [contacts, setContacts] = useState(savedContacts || data);
  const [filter, setFilter] = useState('');
   
  useEffect(() => {
    const stringiContacts = JSON.stringify(contacts);
    localStorage.setItem('contacts', stringiContacts);
  }, [contacts]);

  const createContacts = data => {
    const newContacts = {
      id: nanoid(),
      ...data,
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
}


