import { useState } from 'react'
import Find from './components/Find'
import AddPerson from './components/AddPerson'
import ShowPersons from './components/ShowPersons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 

  return (
    <div>
      <h2>Phonebook</h2>
        <Find persons={persons} />
      <h3>Add a new</h3>
        <AddPerson persons={persons} setPersons={setPersons}/>
      <h2>Numbers</h2>
        <ShowPersons persons={persons} />
    </div>
  )
}

export default App