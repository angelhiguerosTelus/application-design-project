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

		// let data = await api.singUp(userData)
		let data = {
			error: '',
			data: 'Usuario actualizado',
		}

		if (data.error !== '') {
			Swal.fire(
				'Incorrect data',
				'Complete all the fields and enter valid data',
				'error'
			)
		} else {
			setUser(userData)
			Swal.fire('Success', 'User was updated', 'success')
      .then(res => {
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
								<div class="field">
									<label class="label">Name</label>
									<div class="control">
										<input
											class="input is-small"
											type="text"
											name="name"
											value={userData.name}
											onChange={handleInputChange}
										/>
									</div>
								</div>

								<div class="field">
									<label class="label">Pokemon trainer nickname</label>
									<div class="control">
										<input
											value={userData.username}
											onChange={handleInputChange}
											name="username"
											class="input is-small"
											type="text"
										/>
									</div>
								</div>

								<div class="field">
									<label class="label">Region of origin</label>
									<div class="control">
										<input
											value={userData.region}
											onChange={handleInputChange}
											name="region"
											class="input is-small"
											type="text"
										/>
									</div>
								</div>

								<div class="field">
									<label class="label">Gender</label>
									<div class="control">
										<input
											name="gender"
											value={userData.gender}
											onChange={handleInputChange}
											class="input is-small"
											type="text"
										/>
									</div>
								</div>

								<div class="field">
									<label class="label">Age</label>
									<div class="control">
										<input
											name="age"
											value={userData.age}
											onChange={handleInputChange}
											class="input is-small"
											type="text"
										/>
									</div>
								</div>

								<div class="field">
									<label class="label">Email</label>
									<div class="control">
										<input
											name="email"
											value={userData.email}
											onChange={handleInputChange}
											class="input is-small"
											type="email"
										/>
									</div>
								</div>

								<div class="field">
									<label class="label">Trainer class</label>
									<div class="control">
										<select
											name="class"
											value={userData.class}
											onChange={handleInputChange}
											className="input is-small"
										>
											<option value="battle">Battle</option>
											<option value="show">Show</option>
										</select>
									</div>
								</div>

								<div class="field">
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
