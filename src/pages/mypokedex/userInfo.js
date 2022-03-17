import React from 'react'

export const UserInfo = () => {
	return (
		<>
			<div class="columns">
				<div class="container">
					<div class="section">
						<div class="columns box is-multiline">
							<div class="column is-4 name">
								<p className="mb-5">
									<span class="title is-bold">Pokedek de AngelHigueros</span>
								</p>
								<p class="tagline">
									<strong>Region:</strong> Guatemala
								</p>
								<p class="tagline">
									<strong>Trainer class</strong>: Battle
								</p>
							</div>

							<div class="column has-text-centered">
								<p class="user-number">10</p>
								<p class="user-title">Dias activo</p>
							</div>
							<div class="column has-text-centered">
								<p class="user-number">30</p>
								<p class="user-title">Pokemons registados</p>
							</div>
							<div class="column has-text-centered">
								<p class="user-number">3</p>
								<p class="user-title">Pokemones totales</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
