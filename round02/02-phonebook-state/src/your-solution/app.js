import { useState } from 'react'
// ------------------------------------------------------------ //
// ENTER COMMIT SHA OF YOUR REPO IN HERE                        //
// ------------------------------------------------------------ //
export const commitSHA = '1ca2c5f';
// ------------------------------------------------------------ //

const Persons = ({ persons }) => {
  return (
    <p>{persons.name}</p>
  )
}

export const App = () => {
  const [ persons, setPersons ] = useState([{ name: 'Arto Hellas' }]) 
  const [ newName, setNewName ] = useState('Ada Lovelace')

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
    }
    if (persons.includes(nameObject.name) === false){
      setPersons(persons.concat(nameObject))
      setNewName('')
    }
    else{
      window.alert(`${newName} is already added to phonebook`)
    }   
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameChange}
                />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map(persons => 
            <Persons key={persons.name} persons={persons} />
        )}
    </div>
  )
}

