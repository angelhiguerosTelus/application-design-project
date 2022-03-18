import React, { useEffect, useState } from 'react'
import api from '../../api'
import { Modal } from '../ui/modal'
import { PokemonModal } from './pokemonModal'

export const PokedexCard = ({ url }) => {
	const [pokemonData, setPokemonData] = useState({})

	useEffect(() => {
		const fetch = async () => {
			let data = await api.getInfo(url)
			setPokemonData(data)

			let genderData = await api.getInfo(`https://pokeapi.co/api/v2/gender/${data.id}`)
			console.log(genderData)
			setPokemonData(prev => ({...prev, gender: genderData.name}))
		}
		fetch()
	}, [url])

	const [modal, setModal] = useState(false)
	const handleModal = e => {
		e.preventDefault()
		setModal(prev => !prev)
	}

	return (
		<>
			<div className="column is-3">
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
								<p className="subtitle is-6">{pokemonData.gender || "genderless"}</p>
							</div>
						</div>
						<div className="content">
							<ul>
								{pokemonData?.moves?.splice(0, 3).map(pokemon => (
									<li key={pokemon.url}>{pokemon.move.name}</li>
								))}
								<li>
									<a onClick={handleModal}>More moves ...</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			{/* Modal */}
			{modal && (
				<Modal setModal={setModal} title="">
					<PokemonModal pokemonData={pokemonData} />
				</Modal>
			)}
		</>
	)
}
