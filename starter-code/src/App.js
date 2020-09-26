import React from "react";
import "./App.css";
import ContactList from "./components/ContactList";
import contacts from "./contacts.json";

function App() {
  return (
    <div className="App">
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
