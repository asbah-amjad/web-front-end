import React, { useState } from 'react'
import blogService from './services'

export const Togglable = (props) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  return (
    <div>
      <div style={hideWhenVisible}>
        <button onClick={toggleVisibility}>{props.buttonLabel}</button>
      </div>
      <div style={showWhenVisible}>
        {props.children}
        <button onClick={toggleVisibility}>cancel</button>
      </div>
    </div>
  )
}

export const Blog = ({ blog }) => (
  <div>
    {blog.title} {blog.author}
  </div>
)

export const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className="error">
      {message}
    </div>
  )
}

const InputField = ({ text, value, setValue }) =>
  <div>
    {text} <input value={value} onChange={(event) => setValue(event.target.value)} />
  </div>

export const LoginForm = ({ username, setUserName, password, setPassword, handleLogin }) =>
  <form>
    <InputField text={'username: '} value={username} setValue={setUserName} />
    <InputField text={'password: '} value={password} setValue={setPassword} />
    <button type="submit" onClick={handleLogin}>login</button>
  </form>


export const BlogForm = ({ createBlog }) => {
  const [blogs, setBlogs] = useState([])
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [successMessage, setSuccessMessage] = useState(null)

  const addBlog = (event) => {
    event.preventDefault()

    const blogObject = {
      title: title,
      author: author,
    }

    blogService
      .create(blogObject)
      .then(returnedBlog => {
        setBlogs(blogs.concat(returnedBlog))

        setSuccessMessage(
          `a new blog '${blogObject.title}' by '${blogObject.author}' added`)
        setTimeout(() => {
          setSuccessMessage(null)
        }, 5000)

        setTitle('')
        setAuthor('')
      })
  }

  return (
    <div>
      <form onSubmit={addBlog}>
        <input text='title'
          value={title}
          onChange={(event) => setTitle(event.target.value)} />
        <input text='author'
          value={author}
          onChange={(event) => setAuthor(event.target.value)} />
        <button type="submit">save</button>
      </form>
    </div>
  )
}
