import React from 'react'

export const Blog = ({blog}) => (
  <div>
    {blog.title} {blog.author}
  </div>  
);

export const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className="error">
      {message}
    </div>
  )
};

const InputField = ({text, value, setValue}) =>
  <div>
    {text} <input value={value} onChange={(event) => setValue(event.target.value)}/>
  </div>

export const LoginForm = ({username, setUserName, password, setPassword, handleLogin}) =>
  <form>
    <InputField text={'username: '} value={username} setValue={setUserName}/>
    <InputField text={'password: '} value={password} setValue={setPassword}/>
    <button type="submit" onClick={handleLogin}>login</button>
  </form>

export const BlogForm = ({title, setTitle, author, setAuthor, addBlog}) =>
<form>
  <InputField text={'title: '} value={title} setValue={setTitle}/>
  <InputField text={'author: '} value={author} setValue={setAuthor}/>
  <button type="submit" onClick={addBlog}>add</button>
</form>
