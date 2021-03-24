import { useState } from 'react'
// ------------------------------------------------------------ //
// ENTER COMMIT SHA OF YOUR REPO IN HERE                        //
// ------------------------------------------------------------ //
export const commitSHA = '1ca2c5f';
// ------------------------------------------------------------ //

const Persons = ({ persons }) => {
  return (
    <p>{persons.name} {persons.number}</p>
  )
}

const PersonsInfo = ({ persons }) => {
  const personsList = persons.map((persons => 
    <Persons key={persons.name} persons={persons} /> ));

  return <div>{personsList}</div>  
}

export const App = () => {
  const [ persons, setPersons ] = useState([{ name: 'Arto Hellas', number: '040-123456' }]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ search, setSearch ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
    }
    
    if (persons.find(({ name }) => name === undefined)){
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    }
    else{
      window.alert(`${newName} is already added to phonebook`)
    } 
 
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSearch = (event) => {
    console.log(event.target.value)
    setSearch(event.target.value)
  }

  const dynamicSearch = () => {
    return persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with 
        <input value={search} onChange={handleSearch} />
      </div>
      <h2>add a new</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <PersonsInfo persons={dynamicSearch()}/>
       
        
    </div>
  )
}

