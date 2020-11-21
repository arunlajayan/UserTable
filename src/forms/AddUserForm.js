import React, { useState } from 'react'
import { Formik } from 'formik'
import { Form, Button } from 'antd'



const AddUserForm = props => {
	const initialFormState = { id: null, name: '', mail: '', phone: '' }
	const [user, setUser] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.mail || !user.phone) return
				props.addUser(user)
				setUser(initialFormState)
			}}>
			<div>
				<p><label>Name:</label></p>
				<input type="text" name="name" value={user.name} onChange={handleInputChange} />
				<p><label>mail:</label></p>
				<input type="text" name="mail" value={user.mail} onChange={handleInputChange} />
				<p><label>Phone:</label></p>
				<input type="number" name="phone" value={user.phone} onChange={handleInputChange} />
				<p>Button:<button>Add new user</button></p>
			</div>




		</form>
	)
}

export default AddUserForm
