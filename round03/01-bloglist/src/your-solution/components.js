import React, { useState } from 'react'
import blogService from './services'
import PropTypes from 'prop-types'

export const Blog = ({ blog }) => {
  const [blogs, setBlogs] = useState([])
  const [blogVisible, setBlogVisible] = useState(false)

  const hideWhenVisible = { display: blogVisible ? 'none' : '' }
  const showWhenVisible = { display: blogVisible ? '' : 'none' }

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const blogObject = {
    title: blog.title,
    author: blog.author,
    url: blog.url,
    likes: blog.likes + 1,
  }
  const handleLike = () => {
    blogService.update(blog.id, blogObject)
      .then(blogs => setBlogs(blogs))
  }

  return (
    <div style={blogStyle}>
      <div>
        {blog.title} {blog.author}
      </div>
      <div style={hideWhenVisible}>
        <button onClick={() => setBlogVisible(true)}>view</button>
      </div>
      <div style={showWhenVisible}>
        <p>{blog.url}</p>
        <p>
          likes {blog.likes}
          <button onClick={handleLike}>like</button>
        </p>
        <p>{blog.userId}</p>
        <button onClick={() => setBlogVisible(false)}>hide</button>
      </div>
    </div>
  )
}

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

LoginForm.propTypes = {
  username: PropTypes.string.isRequired,
  setUserName: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired
}

export const BlogForm = ({ createBlog }) => {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')


  const addBlog = (event) => {
    event.preventDefault()

    createBlog({
      title: title,
      author: author,
    })

    setTitle('')
    setAuthor('')
  }

  return (
    <div>
      <form onSubmit={addBlog}>
        <label>Title:</label>
        <input text='title'
          value={title}
          onChange={(event) => setTitle(event.target.value)} />
        <label>Author:</label>
        <input text='author'
          value={author}
          onChange={(event) => setAuthor(event.target.value)} />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

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
