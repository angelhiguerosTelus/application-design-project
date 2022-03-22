import React, { useState } from 'react'
import api from '../../api'
import { useSessionStorage } from '../../hooks/useSessionStorage'
import Swal from 'sweetalert2'

export const UpdateUserInfo = ({ view }) => {
	const [user, setUser] = useSessionStorage('user', {})
	const [userData, setUserData] = useState(user)

	const handleInputChange = e => {
		setUserData(prev => ({
			...prev,
			[e.target.name]: e.target.value,
		}))
	}

	const handleSubmit = async e => {
		e.preventDefault()

		let data = await api.update(userData)

		if (data.error !== '') {
			Swal.fire(
				'Incorrect data',
				data.error,
				'error'
			)
		} else {
			setUser(userData)
			Swal.fire('Success', 'User was updated', 'success').then(res => {
				window.location.href = '/'
			})
		}
	}

	return (
		<>
			{view && (
				<>
					<form onSubmit={handleSubmit}>
						<div className="columns is-centered">
							<div className="column is-5">
								<div className="field">
									<label className="label">Name</label>
									<div className="control">
										<input
											className="input is-small"
											type="text"
											name="name"
											value={userData.name}
											onChange={handleInputChange}
										/>
									</div>
								</div>

								<div className="field">
									<label className="label">Pokemon trainer nickname</label>
									<div className="control">
										<input
											value={userData.username}
											onChange={handleInputChange}
											name="username"
											className="input is-small"
											type="text"
										/>
									</div>
								</div>

								<div className="field">
									<label className="label">Region of origin</label>
									<div className="control">
										<input
											value={userData.region}
											onChange={handleInputChange}
											name="region"
											className="input is-small"
											type="text"
										/>
									</div>
								</div>

								<div className="field">
									<label className="label">Gender</label>
									<div className="control">
										<input
											name="gender"
											value={userData.gender}
											onChange={handleInputChange}
											className="input is-small"
											type="text"
										/>
									</div>
								</div>

								<div className="field">
									<label className="label">Age</label>
									<div className="control">
										<input
											name="age"
											value={userData.age}
											onChange={handleInputChange}
											className="input is-small"
											type="text"
										/>
									</div>
								</div>

								<div className="field">
									<label className="label">Email</label>
									<div className="control">
										<input
											name="email"
											value={userData.email}
											onChange={handleInputChange}
											className="input is-small"
											type="email"
										/>
									</div>
								</div>

								<div className="field">
									<label className="label">Trainer class</label>
									<div className="control">
										<select
											name="class"
											value={userData.class}
											onChange={handleInputChange}
											className="input is-small"
										>
											<option value="Battle">Battle</option>
											<option value="Show">Show</option>
										</select>
									</div>
								</div>

								<div className="field">
									<button
										type="submit"
										className="button is-info is-fullwidth mt-4"
									>
										Save
									</button>
								</div>
							</div>
						</div>
					</form>
				</>
			)}
		</>
	)
}
