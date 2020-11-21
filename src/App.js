import React, { useState, Fragment, useEffect } from 'react'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'

const LOCAL_STORAGE_KEY = 'userApp.users'

const App = () => {
	// Data
	const usersData = []

	const initialFormState = { id: null, name: '', mail: '', phone: '' }

	// Setting state
	const [users, setUsers] = useState(usersData)
	const [currentUser, setCurrentUser] = useState(initialFormState)
	const [editing, setEditing] = useState(false)

	useEffect(() => {

		const storedusers = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
		if (storedusers) setUsers(storedusers)

	}, [])

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(users))
	}, [users])

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([...users, user])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, mail: user.mail, phone: user.phone })
	}

	return (
		<div className="container">
			<h3>Ant Design X Formik</h3>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Update</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
							<Fragment>
								<h2>Register Here</h2>
								<AddUserForm addUser={addUser} />
							</Fragment>
						)}
				</div>
				<div className="flex-large">
					<h2>Details</h2>
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
		</div>
	)
}

export default App
