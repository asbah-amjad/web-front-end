import React, { useState } from 'react'

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


export const BlogForm = ({ title, setTitle, author, setAuthor, addBlog }) =>
  <form>
    <InputField text={'title: '} value={title} setValue={setTitle} />
    <InputField text={'author: '} value={author} setValue={setAuthor} />
    <button type="submit" onClick={addBlog}>add</button>
  </form>
