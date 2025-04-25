const Person = ({ name, number, onDeletePerson }) => {
  return <div>{name}{' '}{number}{' '}<button onClick={onDeletePerson}>delete</button></div>
}

export default Person;