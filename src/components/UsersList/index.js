import React from 'react'
import User from '../User'
import './style.css'

export default function UsersList({ users }) {
	const userElements = users.map(user =>
		<li key = {user.id} className="user-list__li">
			<User user = {user}/>
		</li>
	)
	return (
		<ul className="user-list__ul">
			{userElements}
		</ul>
	)
}