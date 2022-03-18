import React from 'react'

export const PokemonModal = ({ pokemonData }) => {
	return (
		<>
			<div className="columns">
				<div className="column is-5">
					<div className="card">
						<div className="card-image">
							<figure className="image is-16by9">
								<img src={pokemonData.sprites?.front_shiny} alt="temp" />
							</figure>
						</div>
						<div className="card-content">
							<div className="media">
								<div className="media-content">
									<p className="title is-4">{pokemonData.name}</p>
									<p className="subtitle is-5">Nickname</p>
									<p className="subtitle is-5">{pokemonData.gender || "genderless"}</p>

								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="column is-7">
					<span className="subtitle is-4">Moves</span>

					<div className="content content-modal">
						<div className="columns is-multiline">
							{pokemonData?.moves?.map(pokemon => (
								<div className="column is-3" key={pokemon.url}>
									{pokemon.move.name}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
