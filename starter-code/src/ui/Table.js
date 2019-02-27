import React from 'react'

const setRows = (deleteContact, list) =>
  list.map((contact, index) => (
    <tr>
      <td className="container">
        <img className="standar-pic" src={contact.pictureUrl} alt="contact" />
      </td>
      <td className="container">{contact.name}</td>
      <td className="container">{contact.popularity}</td>
      <td className="container">
        <button value={index} onClick={deleteContact}>
          Delete
        </button>
      </td>
    </tr>
  ))

const Table = ({
  addRandomContact,
  sortByName,
  sortByPopularity,
  deleteContact,
  list
}) => (
  <div>
    <h1 className="App">Iron Contacts</h1>
    <button onClick={addRandomContact}>Add Random Content</button>
    <button onClick={sortByName}>Order by name</button>
    <button onClick={sortByPopularity}>Order by popularity</button>
    <tr>
      <td className="container">Picture</td>
      <td className="container">Name</td>
      <td className="container">Popularity</td>
      <td className="container">Action</td>
    </tr>
    <table>{setRows(deleteContact, list)}</table>
  </div>
)

export default Table
