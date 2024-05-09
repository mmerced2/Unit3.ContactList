import React from "react";
import { useState , useEffect} from 'react';


export default function SelectedContact({selectedContactId}) { 
  
  const [contact, setContact] = useState([])
  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
        const result = await response.json();
        console.log(result)
        setContact(result);
       } catch (error) {
        console.error(error);
      }
    }
    fetchContact();
  }, [selectedContactId]);
;

}