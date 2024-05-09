import { useState } from 'react'
import './App.css'
import ContactList from './components/contactlist';
import SelectedContact from './components/selectedcontact';


function App() {
  //state variables
 const [selectedContactId, setSelectedContactId] = useState(null)


  return (
    <>
    {selectedContactId ? (
      <>
      <SelectedContact selectedContactId={selectedContactId}  />
      {<button className='button' onClick={() => {setSelectedContactId(null)}}>Back</button>}
      </>
    ) : (
      <ContactList  setSelectedContactId={setSelectedContactId}/>
    )}
    </>
  );
}

export default App
