import React, { useEffect, useState } from 'react'
import api from '../../api'
import { Menu } from '../ui/menu'
import { PokedexList } from './pokedexList'
import { NavigationBar } from './navigationBar'
import { UserInfo } from './userInfo'
import { useSessionStorage } from '../../hooks/useSessionStorage'

export const MyPokedexScreen = () => {
	const [user] = useSessionStorage('user', {})

	const [cards, setCards] = useState([])
	const [offset, setOffset] = useState(0)

	useEffect(() => {
		const fetch = async () => {
			let data = await api.listPokemons({
				user,
				offset,
			})
			setCards(data.data)
		}
		fetch()
	}, [offset])

	return (
		<>
			<div className="container container-app">
				<Menu />
				<UserInfo />
				<div className="box mt-5">
					<NavigationBar setOffset={setOffset} />
					<PokedexList cards={cards} />
					<NavigationBar setOffset={setOffset} />
				</div>
			</div>
		</>
	)
}
