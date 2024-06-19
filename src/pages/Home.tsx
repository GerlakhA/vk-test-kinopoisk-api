import { Typography } from '@mui/material'
import Pagination from '@mui/material/Pagination'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState } from 'react'
import { Header } from '../components/header'
import { Movies } from '../components/movie'
import { useDebounce } from '../hooks/useDebounce'
import { Movie } from '../types'
import styles from './pages.module.scss'

interface IHome {
	setId: (id: number) => void
}

function Home({ setId }: IHome) {
	const [page, setPage] = useState(1)
	const [valueGenre, setValueGenre] = useState('')
	const [valueYear, setValueYear] = useState('')
	const [valueRaiting, setValueRaiting] = useState('')
	const [index, setIndex] = useState(-1)

	const debouncedGenre = useDebounce(valueGenre)
	const debouncedRaiting = useDebounce(valueRaiting)
	const debouncedYear = useDebounce(valueYear)

	const yearQuery = valueYear !== '' ? `?year=1990&year=${debouncedYear}` : ''
	const genreQuery = valueGenre !== '' ? `?genres.name=${debouncedGenre}` : ''
	const ratingQuery =
		valueRaiting !== '' ? `?rating.imdb=${Math.round(Number(debouncedRaiting))}` : ''

	const QueryParam = valueYear ? yearQuery : valueGenre ? genreQuery : ratingQuery

	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setPage(value)
	}

	const { data: movies, isLoading } = useQuery({
		queryKey: ['movies', page, debouncedYear, debouncedRaiting, debouncedGenre],
		queryFn: async () => {
			const res = await axios.get<Movie[]>(`https://api.kinopoisk.dev/v1.4/movie${QueryParam}`, {
				headers: { 'X-API-KEY': 'Q0EQ552-QACMZKM-HXP8YXY-2EDF90T' },
				params: { accept: 'application/json', page: page.toString(), limit: '50' }
			})
			return res.data
		}
	})

	if (isLoading) return <h2>Loading...</h2>

	console.log(movies)
	console.log(index)

	return (
		<main>
			<Header
				index={index}
				valueGenre={valueGenre}
				valueYear={valueYear}
				valueRaiting={valueRaiting}
				setIndex={setIndex}
				setValueGenre={setValueGenre}
				setValueYear={setValueYear}
				setValueRaiting={setValueRaiting}
			/>
			<div className={styles.pagination}>
				<Typography>Page: {page}</Typography>
				<Pagination count={10} page={page} onChange={handleChange} color='secondary' />
			</div>
			<Movies movies={movies} setId={setId} />
		</main>
	)
}

export default Home
