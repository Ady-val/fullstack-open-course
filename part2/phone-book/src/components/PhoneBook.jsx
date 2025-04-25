import Person from "./Person"

const PhoneBook = ({ persons, onDeletePerson }) => {
  return (
    <>
      {persons.length === 0 && (
        <div>Contacts Not Found!!!!</div>
      )}
      {persons.map(person => {
        return <Person key={person.name} name={person.name} number={person.number} onDeletePerson={() => onDeletePerson(person.id)} />
      })}
    </>
  )
}

export default PhoneBook;