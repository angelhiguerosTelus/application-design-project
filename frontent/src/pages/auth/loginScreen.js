import React, { useState } from 'react'
import { useSessionStorage } from '../../hooks/useSessionStorage'

import { RiLockPasswordFill } from 'react-icons/ri'
import { GiSteamBlast } from 'react-icons/gi'
import Swal from 'sweetalert2'

import wallpaper from '../../assets/img/login.jpg'
import { Link } from 'react-router-dom'
import api from '../../api'

export const LoginScreen = () => {
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

		let data = await api.login(userData)

		if (data.error !== '') {
			Swal.fire('Incorrect username or password', '', 'error')
			setIsAuth(false)
		} else {
			setIsAuth(true)
			setUser(data.data)
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
							<div class="column is-5-tablet is-4-desktop is-3-widescreen">
								<form class="box" onSubmit={handleSubmit}>
									<span className="subtitle is-4 has-text-centered">
										Pokedex
									</span>
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
										Login
									</button>

									<Link to="/auth/singup">Create an account</Link>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
