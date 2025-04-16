import { useState } from 'react'
import PhoneBook from './components/PhoneBook'
import Input from './components/Input'
import Filter from './components/Filter'
import PhonebookForm from './components/PhonebookForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '555-555-5555' }
  ])
  const [nameFilter, setNameFilter] = useState('')

  const filteredPersons = data => {
    if (!nameFilter) return data;
    return data.filter(item => item.name.includes(nameFilter))
  }

  const handleSubmit = ({newName, newNumber}) => {

    const nameAlreadyExist = persons.find(item => item.name === newName)
    const numberAlreadyExist = persons.find(item => item.number === newNumber)

    if (nameAlreadyExist) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    if (numberAlreadyExist) {
      alert(`${newNumber} is already added to phonebook`)
      return
    }

    setPersons(persons.concat({ name: newName, number: newNumber }))
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter
          value={nameFilter}
          onChange={setNameFilter}
        />
      <h2>Add a new</h2>
      <PhonebookForm
        handleSubmit={handleSubmit}
      />
      <h2>Numbers</h2>
      <PhoneBook persons={filteredPersons(persons)} />
    </div>
  )
}

export default App