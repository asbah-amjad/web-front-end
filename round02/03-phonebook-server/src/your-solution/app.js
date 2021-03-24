import { useState, useEffect } from 'react'
import { Persons, Filter, Form } from './components'
import axios from 'axios'

// ------------------------------------------------------------ //
// ENTER COMMIT SHA OF YOUR REPO IN HERE                        //
// ------------------------------------------------------------ //
export const commitSHA = '1ca2c5f';
// ------------------------------------------------------------ //


export const App = () => {
  const [ persons, setPersons ] = useState([{ name: 'Arto Hellas', number: '040-123456' }]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch ] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  const addName = (event) => {
    event.preventDefault()
    let obj = persons.find( personObj => personObj.name === newName);
    if(obj != null && obj.number == newNumber){
      window.alert(`${newName} is already added to phonebook`);
      return
    }else if(obj != null && obj.number != newNumber){
      persons.map(person => person.number == obj.number ? person.number = newNumber : person.number);
      setPersons(persons)
      setNewName('')
      setNewNumber('')
      return
    }
    const namebject = {
      name: newName,
      number: newNumber,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: persons.length + 1,
    }
  
    setPersons(persons.concat(namebject))
    setNewName('')
    setNewNumber('')
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
    setNewSearch(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={handleSearch} />
      <h2>add a new</h2>
      <Form addName={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber}
      handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons persons={persons} newSearch={newSearch} setPersons={setPersons}/>
          
    </div>
  )
}

