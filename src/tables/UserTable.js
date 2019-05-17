import React from 'react'

const UserTable = props => {
  const handleDeleteUser = id => {
    let answer = window.confirm('Are you sure?')

    if (answer) {
      props.deleteUser(id)
    }
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Имя</th>
          <th>С парой</th>
          <th>Опции</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map(user => (
            <tr key={user.id}>
            {/* добавили обработку на дабл-клик */}
              <td onDoubleClick={() => {
                    props.editRow(user)
                  }}>{user.name}</td>
              <td>{user.checkbox}</td>
              {console.log(user.checkbox)}
              <td>
                <button
                  className="button muted-button"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export { UserTable }