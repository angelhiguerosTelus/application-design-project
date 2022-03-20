import React from 'react'
import { useSessionStorage } from '../../hooks/useSessionStorage'

export const UserInfo = () => {
	const [user, ] = useSessionStorage('user', {})

	return (
		<>
			<div className="columns">
				<div className="container">
					<div className="section">
						<div className="columns box is-multiline">
							<div className="column is-4 name">
								<p className="mb-5">
									<span className="title is-bold">Pokedek de {user.username}</span>
								</p>
								<p className="tagline">
									<strong>Name:</strong> {user.name}
								</p>
								<p className="tagline">
									<strong>Region:</strong> {user.region}
								</p>
								<p className="tagline">
									<strong>Trainer class</strong>: {user.class}
								</p>
							</div>
{/* 
							<div className="column has-text-centered">
								<p className="user-number">10</p>
								<p className="user-title">Dias activo</p>
							</div>
							<div className="column has-text-centered">
								<p className="user-number">30</p>
								<p className="user-title">Pokemons registados</p>
							</div>
							<div className="column has-text-centered">
								<p className="user-number">3</p>
								<p className="user-title">Pokemones totales</p>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
