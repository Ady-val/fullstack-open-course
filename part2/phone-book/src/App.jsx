import { useState } from 'react'
import PhoneBook from './components/PhoneBook'
import Filter from './components/Filter'
import PhonebookForm from './components/PhonebookForm'
import { useEffect } from 'react'
import personsService from '../services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [nameFilter, setNameFilter] = useState('')

  useEffect(() => {
    personsService.getAll().then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])

  const refreshPersons = () => {
    personsService.getAll().then(initialPersons => {
      setPersons(initialPersons)
    })
  }

  const filteredPersons = data => {
    if (!nameFilter) return data;
    return data.filter(item => item.name.includes(nameFilter))
  }

  const handleSubmit = ({newName, newNumber}) => {

    const nameAlreadyExist = persons.find(item => item.name === newName)
    const numberAlreadyExist = persons.find(item => item.number === newNumber)

    if (numberAlreadyExist) {
      alert(`${newNumber} is already added to phonebook`)
      return
    }

    if (nameAlreadyExist) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        personsService
          .update(nameAlreadyExist.id, { name: newName, number: newNumber })
          .then(() => {
            refreshPersons()
            window.alert('Person updated')
          })
      }
      return
    }

    personsService
      .create({ name: newName, number: newNumber })
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
      })
  }

  const handleDeletePerson = (id) => {
    const deletePerson = persons.find(item => item.id === id)
    if (window.confirm(`Seguro que quieres borrar al contacto ${deletePerson.name}`)) {
      personsService
        .deletePerson(id)
        .then(() => {
          setPersons(persons.filter(item => item.id !== id))
          window.alert('Contacto eliminado')
        })
    }
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
      <PhoneBook persons={filteredPersons(persons)} onDeletePerson={handleDeletePerson} />
    </div>
  )
}

export default App