import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import api from '../../api'
import { useSessionStorage } from '../../hooks/useSessionStorage'
import { Modal } from '../ui/modal'
import { PokemonModal } from './pokemonModal'

export const PokedexCard = ({ url }) => {
	const [user] = useSessionStorage('user', {})

	const [pokemonData, setPokemonData] = useState({})

	useEffect(() => {
		const fetch = async () => {
			let data = await api.getInfo(url)
			setPokemonData(data)

			let genderData = await api.getInfo(
				`https://pokeapi.co/api/v2/gender/${data.id}`
			)

			let alreadyOwned = await api.getPokemon(user._uid, data.id)
			console.log(alreadyOwned.data.length)

			setPokemonData(prev => ({
				...prev,
				gender: genderData.name,
				pokedex: alreadyOwned.data.length === 0 ? false : true,
			}))
		}

		fetch()
	}, [url])

	const [modal, setModal] = useState(false)
	const handleModal = e => {
		e.preventDefault()
		setModal(prev => !prev)
	}

	const handleAddPokemon = async pokemon => {
		const { value: nickname } = await Swal.fire({
			title: 'New pokemon',
			input: 'text',
			inputLabel: 'Pokemon nickname',
			inputPlaceholder: 'Enter pokemon nickname',
		})

		if (nickname) {
			let data = await api.addPokemon({
				_uid: user._uid,
				pokemon: pokemon.id,
				nickname,
			})

			if (data.error !== '') {
				Swal.fire(`Pokemon wasn't added to pokedex`, '', 'error')
			} else {
				Swal.fire('Pokemon was added to pokedex', '', 'success').then(res => {
					window.location.href = '/mypokedex'
				})
			}
		}
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
								<p className="subtitle is-6">
									{pokemonData.gender || 'genderless'}
								</p>
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

							{pokemonData ? (
								<button
									onClick={() => handleAddPokemon(pokemonData)}
									className="button is-success is-fullwidth"
								>
									Add to pokedex
								</button>
							) : (
								<span>This pokemon is in your pokedex</span>
							)}
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
