import { useState } from "react"
import Input from "./Input"

const PhonebookForm = ({ handleSubmit }) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const trySubmit = e => {
    e.preventDefault()
    
    if (!newName || newName === '' || !newNumber || newNumber === '') {
      alert('type a name or number')
      return
    }

    handleSubmit({
      newName,
      newNumber
    })
    setNewName('')
    setNewNumber('')
  }

  return (
    <form onSubmit={trySubmit}>
      <Input
        label={'name'}
        value={newName}
        onChange={setNewName}
      />
      <Input
        label={'number'}
        value={newNumber}
        onChange={setNewNumber}
      />
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PhonebookForm