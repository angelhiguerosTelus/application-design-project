import React, { useEffect, useState } from 'react'
import api from '../../api'
import { Menu } from '../ui/menu'
import { PokedexList } from './pokedexList'
import { NavigationBar } from './navigationBar'

export const PokedexScreen = () => {
	// const [filter, setFilter] = useState("");
	const [cards, setCards] = useState([])
	const [offset, setOffset] = useState(0)

	useEffect(() => {
		const fetch = async () => {
			let data = await api.list(offset)
			setCards(data.results)
		}
		fetch()
	}, [offset])

	return (
		<>
			<div className="container container-app">
				<Menu />
				<div className="box mt-5">
					<NavigationBar setOffset={setOffset} />
					<PokedexList cards={cards} />
					<NavigationBar setOffset={setOffset} />
				</div>
			</div>
		</>
	)
}
