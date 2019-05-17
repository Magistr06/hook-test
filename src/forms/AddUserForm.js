import React, { useState } from 'react'

const AddUserForm = props => {
 
  const initialFormState = { id: null, name: '', checkbox: true }
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = event => {
    const { name } = event.currentTarget
    const value = event.currentTarget.type === 'checkbox' || event.currentTarget.type === 'text' ? event.currentTarget.value : event.currentTarget.name;
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (!user.name) return

    // вызываем addUser из хука из App
    props.addUser(user)
    // обнуляем форму, с помощью setUser функции
    // которая у нас взята из хука в данном компоненте [1]
    setUser(initialFormState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Имя</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
       <label>С парой
      <input             
        type="checkbox"
        name="checkbox"
        value={user.checkbox}
        onChange={handleInputChange} 
      /></label>
      <button>Add new user</button>
    </form>
  )
}

export { AddUserForm }