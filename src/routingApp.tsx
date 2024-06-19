import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DetailsPage from './pages/DetailsPage'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { Movie } from './types'

const RoutingApp = () => {
	const [id, setId] = useState(0)

	const { data: moveById } = useQuery({
		queryKey: ['movies', id],
		queryFn: async () => {
			if (id === 0) {
				return null
			}
			const res = await axios.get<Movie>(`https://api.kinopoisk.dev/v1.4/movie/${id}`, {
				headers: { 'X-API-KEY': 'Q0EQ552-QACMZKM-HXP8YXY-2EDF90T' }
			})
			return res.data
		}
	})

	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Home setId={setId} />} path='/' />
				<Route element={<Favorites setId={setId} />} path={`/favorites`} />
				<Route element={<DetailsPage moveById={moveById} />} path={`/${id}`} />
				<Route element={<NotFound />} path='*' />
			</Routes>
		</BrowserRouter>
	)
}

export default RoutingApp
