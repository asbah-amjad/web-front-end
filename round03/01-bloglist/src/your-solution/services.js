import axios from 'axios'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = () => {
  const baseUrl = '/api/blogs'
  const request = axios.get(baseUrl)
  return request.then(response =>  response.data)
}

const create = async newObject => {
  const baseUrl = '/api/blogs'
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const login = async credentials => {
  const baseUrl = '/api/login'
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

export default { getAll, login, create, setToken }
