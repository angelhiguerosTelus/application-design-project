import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { RiLockPasswordFill } from 'react-icons/ri'
import { GiSteamBlast } from 'react-icons/gi'
import { MdEmail } from 'react-icons/md'
import { BiWorld } from 'react-icons/bi'
import {
	BsFillBookFill,
	BsGenderAmbiguous,
	BsFillCalendarDateFill,
	BsFillPersonBadgeFill,
} from 'react-icons/bs'

import wallpaper from '../../assets/img/login.jpg'
import { Link } from 'react-router-dom'
import { useSessionStorage } from '../../hooks/useSessionStorage'
import api from '../../api'

export const SingUpScreen = () => {
	const [userData, setUserData] = useState({})
	const [, setIsAuth] = useSessionStorage('isAuth', false)
	const [, setUser] = useSessionStorage('user', {})

	const handleInputChange = e => {
		setUserData(prev => ({
			...prev,
			[e.target.name]: e.target.value,
		}))
	}

	const handleSubmit = async e => {
		e.preventDefault()

		let data = await api.singUp(userData)

		if (data.error !== '') {
			Swal.fire(
				'Incorrect data',
				'Complete all the fields and enter valid data',
				'error'
			)
			setIsAuth(false)
		} else {
			// Swal.fire('Success', 'User was created', 'success')
			setIsAuth(true)
			setUser(data.data)
			window.location.href = '/'
		}
	}

	return (
		<>
			<section
				className="hero is-fullheight"
				style={{
					backgroundImage: `url(${wallpaper})`,
					backgroundSize: 'cover',
				}}
			>
				<div className="hero-body">
					<div className="container">
						<div className="columns is-centered">
							<div className="column is-6-tablet is-6-desktop is-4-widescreen">
								<form onSubmit={handleSubmit} className="box">
									<span className="subtitle is-4 has-text-centered">
										Crear cuenta - Pokedex
									</span>

									<div className="field mt-4">
										<label className="label">Name</label>
										<div className="control has-icons-left">
											<input
												onChange={handleInputChange}
												name="name"
												type="text"
												className="input"
												required
											/>
											<span className="icon is-small is-left">
												<BsFillPersonBadgeFill />
											</span>
										</div>
									</div>

									<div className="field">
										<label className="label">Pokemon trainer nickname</label>
										<div className="control has-icons-left">
											<input
												onChange={handleInputChange}
												name="username"
												type="text"
												className="input"
												required
											/>
											<span className="icon is-small is-left">
												<GiSteamBlast />
											</span>
										</div>
									</div>

									<div className="field">
										<label className="label">Region / origin</label>
										<div className="control has-icons-left">
											<input
												onChange={handleInputChange}
												name="region"
												type="text"
												className="input"
												required
											/>
											<span className="icon is-small is-left">
												<BiWorld />
											</span>
										</div>
									</div>

									<div className="field">
										<label className="label">Gender</label>
										<div className="control has-icons-left">
											<input
												onChange={handleInputChange}
												name="gender"
												type="text"
												className="input"
												required
											/>
											<span className="icon is-small is-left">
												<BsGenderAmbiguous />
											</span>
										</div>
									</div>

									<div className="field">
										<label className="label">Age</label>
										<div className="control has-icons-left">
											<input
												onChange={handleInputChange}
												name="age"
												type="number"
												className="input"
												required
											/>
											<span className="icon is-small is-left">
												<BsFillCalendarDateFill />
											</span>
										</div>
									</div>

									<div className="field">
										<label className="label">Email</label>
										<div className="control has-icons-left">
											<input
												onChange={handleInputChange}
												name="email"
												type="email"
												className="input"
												required
											/>
											<span className="icon is-small is-left">
												<MdEmail />
											</span>
										</div>
									</div>

									<div className="field">
										<label className="label">Trainer class</label>
										<div className="control has-icons-left">
											<select
												onChange={handleInputChange}
												name="trainerclass"
												className="input"
											>
												<option value="battle">Battle</option>
												<option value="battle">Show</option>
											</select>

											<span className="icon is-small is-left">
												<BsFillBookFill />
											</span>
										</div>
									</div>

									<div className="field">
										<label className="label">Password</label>
										<div className="control has-icons-left">
											<input
												onChange={handleInputChange}
												name="password"
												type="password"
												className="input"
												required
											/>
											<span className="icon is-small is-left">
												<RiLockPasswordFill />
											</span>
										</div>
									</div>

									<button className="button is-info is-fullwidth mt-5 mb-5">
										Sing Up
									</button>

									<Link to="/auth">Login.</Link>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
