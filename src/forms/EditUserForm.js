import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser)

  // используем effect-hook
  useEffect(
    () => {
      // вызывай данную функцию
      setUser(props.currentUser)
    },
    [props] // всегда, если изменились props
  )
  //ищменения в списке
  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    if ( !user.name ) return

    props.updateUser(user.id, user)
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
      <button>Update user</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  )
}

export { EditUserForm }
