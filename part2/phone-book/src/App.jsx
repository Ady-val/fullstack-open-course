import { useState } from 'react'
import axios from 'axios'
import PhoneBook from './components/PhoneBook'
import Filter from './components/Filter'
import PhonebookForm from './components/PhonebookForm'
import { useEffect } from 'react'

const App = () => {
  const [persons, setPersons] = useState([])
  const [nameFilter, setNameFilter] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

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