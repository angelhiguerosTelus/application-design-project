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

		// let data = await api.singUp(userData)
		let data = {
			error: '',
			data: {
				_uid: '1',
			},
		}

		if (data.error !== '') {
			Swal.fire(
				'Incorrect data',
				'Complete all the fields and enter valid data',
				'error'
			)
			setIsAuth(false)
		} else {
			Swal.fire('Success', 'User was created', 'success')
			setIsAuth(true)
			setUser({ ...userData, _uid: data.data._uid })
			window.location.href = '/'
		}
	}

	return (
		<>
			<section
				class="hero is-fullheight"
				style={{
					backgroundImage: `url(${wallpaper})`,
					backgroundSize: 'cover',
				}}
			>
				<div class="hero-body">
					<div class="container">
						<div class="columns is-centered">
							<div class="column is-6-tablet is-6-desktop is-4-widescreen">
								<form onSubmit={handleSubmit} class="box">
									<span className="subtitle is-4 has-text-centered">
										Crear cuenta - Pokedex
									</span>

									<div class="field mt-4">
										<label for="" class="label">
											Name
										</label>
										<div class="control has-icons-left">
											<input
												onChange={handleInputChange}
												name="name"
												type="text"
												class="input"
												required
											/>
											<span class="icon is-small is-left">
												<BsFillPersonBadgeFill />
											</span>
										</div>
									</div>

									<div class="field">
										<label for="" class="label">
											Pokemon trainer nickname
										</label>
										<div class="control has-icons-left">
											<input
												onChange={handleInputChange}
												name="username"
												type="text"
												class="input"
												required
											/>
											<span class="icon is-small is-left">
												<GiSteamBlast />
											</span>
										</div>
									</div>

									<div class="field">
										<label for="" class="label">
											Region / origin
										</label>
										<div class="control has-icons-left">
											<input
												onChange={handleInputChange}
												name="region"
												type="text"
												class="input"
												required
											/>
											<span class="icon is-small is-left">
												<BiWorld />
											</span>
										</div>
									</div>

									<div class="field">
										<label for="" class="label">
											Gender
										</label>
										<div class="control has-icons-left">
											<input
												onChange={handleInputChange}
												name="gender"
												type="text"
												class="input"
												required
											/>
											<span class="icon is-small is-left">
												<BsGenderAmbiguous />
											</span>
										</div>
									</div>

									<div class="field">
										<label for="" class="label">
											Age
										</label>
										<div class="control has-icons-left">
											<input
												onChange={handleInputChange}
												name="age"
												type="number"
												class="input"
												required
											/>
											<span class="icon is-small is-left">
												<BsFillCalendarDateFill />
											</span>
										</div>
									</div>

									<div class="field">
										<label for="" class="label">
											Email
										</label>
										<div class="control has-icons-left">
											<input
												onChange={handleInputChange}
												name="email"
												type="email"
												class="input"
												required
											/>
											<span class="icon is-small is-left">
												<MdEmail />
											</span>
										</div>
									</div>

									<div class="field">
										<label for="" class="label">
											Trainer class
										</label>
										<div class="control has-icons-left">
											<select
												onChange={handleInputChange}
												name="class"
												className="input"
											>
												<option value="battle">Battle</option>
												<option value="battle">Show</option>
											</select>

											<span class="icon is-small is-left">
												<BsFillBookFill />
											</span>
										</div>
									</div>

									<div class="field">
										<label for="" class="label">
											Password
										</label>
										<div class="control has-icons-left">
											<input
												onChange={handleInputChange}
												name="password"
												type="password"
												class="input"
												required
											/>
											<span class="icon is-small is-left">
												<RiLockPasswordFill />
											</span>
										</div>
									</div>

									<button class="button is-info is-fullwidth mt-5 mb-5">
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
