import { useState, useEffect } from 'react'
import { Persons, Filter, Form } from './components'
import personService from './person-service'
import './styles.css'

// ------------------------------------------------------------ //
// ENTER COMMIT SHA OF YOUR REPO IN HERE                        //
// ------------------------------------------------------------ //
export const commitSHA = '1ca2c5f';
// ------------------------------------------------------------ //

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className="successful">
      {message}
    </div>
  )
}

export const App = () => {
  const [ persons, setPersons ] = useState([{ name: 'Arto Hellas', number: '040-123456' }]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch ] = useState('')
  const [successMessage, setSuccessMessage] = useState(null)

  useEffect(()=>{
    personService
    .getAll()
    .then(response => {
      setPersons(response.data)
    })
  })

  const addName = (event) => {
    event.preventDefault()
    let obj = persons.find( person => person.name === newName);
    if(obj != null && obj.number == newNumber){
      window.alert(`${newName} is already added to phonebook`)
      setNewName('')
      setNewNumber('')
      return
    }
    else if(obj != null && obj.number != newNumber){
      window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
      const id = obj.id
      const changeNumber = {...obj, name: obj.name, number : newNumber}
      personService
      .update(id, changeNumber)
      .then(response => {
        setPersons(persons)
        setNewName('')
        setNewNumber('')
        return
      })  
    }
    else {
      const newObj = {
        name: newName,
        number: newNumber,
      }
    
      personService
      .create(newObj)
      .then(response => {
        setSuccessMessage(
          `Added '${newObj.name}'`
        )
        setTimeout(() => {
          setSuccessMessage(null)
        }, 5000)
        setPersons(persons.concat(newObj))
        setNewName('')
        setNewNumber('')
      })
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
    setNewSearch(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={successMessage} />
      <Filter search={handleSearch} />
      <h2>add a new</h2>
      <Form addName={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber}
      handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons persons={persons} newSearch={newSearch} setPersons={setPersons}/>
          
    </div>
  )
}

