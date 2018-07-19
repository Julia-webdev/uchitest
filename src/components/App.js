import React from 'react'
import UsersList from './UsersList'
import users from '../fake-json_2.json'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

function App() {
	return (
		<div className="container">
			<div className="App__title">
				<h1>
					Список пользователей
				</h1>
			</div>
				<UsersList users = {users} />
		</div>
	)
}

export default App