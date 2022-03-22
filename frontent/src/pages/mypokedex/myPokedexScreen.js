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

	const handleOffsetNext = () => {
		setOffset(prev => prev + 100)
	}

	const handleOffsetPrev = () => {
		setOffset(prev => prev - 100)
	}

	useEffect(() => {
		const fetch = async () => {
			let data = await api.listPokemons(user._uid)
			setCards(data.data.slice(0, offset))
		}
		fetch()
	}, [offset])

	return (
		<>
			<div className="container container-app">
				<Menu />
				<UserInfo />
				<div className="box mt-5">
					<NavigationBar setOffset={handleOffsetNext} />
					<PokedexList cards={cards} />
					<NavigationBar setOffset={handleOffsetPrev} />
				</div>
			</div>
		</>
	)
}
