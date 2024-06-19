import { ChangeEvent } from 'react'
import { Link } from 'react-router-dom'
import { useGetFavoritesMovies } from '../../hooks/useGetFavoritesMovies'
import { Filters } from '../filters'
import styles from './header.module.scss'

interface IHeader {
	index: number
	setIndex: (index: number) => void
	valueGenre: string
	valueYear: string
	valueRaiting: string
	setValueGenre: (value: string) => void
	setValueYear: (value: string) => void
	setValueRaiting: (value: string) => void
}

export const Header = ({
	index,
	valueGenre,
	valueRaiting,
	valueYear,
	setIndex,
	setValueGenre,
	setValueRaiting,
	setValueYear
}: IHeader) => {
	const { data: favorites } = useGetFavoritesMovies()

	const nameFilter = index === 0 ? 'Жанр' : index === 1 ? 'Рейтинг' : 'Год'
	const valueFilter = index === 0 ? 'Жанр' : index === 1 ? 'Рейтинг' : 'Год'

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (index === 0) {
			setValueRaiting('')
			setValueYear('')
			setValueGenre(e.target.value)
		}
		if (index === 1) {
			setValueGenre('')
			setValueYear('')
			setValueRaiting(e.target.value)
		}
		if (index === 2) {
			setValueGenre('')
			setValueRaiting('')
			setValueYear(e.target.value)
		}
	}

	return (
		<header className={styles.header}>
			<h1>Кинопоиск API</h1>
			<Link to={'/favorites'}>избранные</Link>
			<div className={styles.bubble}>{favorites?.length}</div>
			<Filters index={index} setIndex={setIndex} />
			{index >= 0 && (
				<>
					<span>{nameFilter}: </span>
					<input
						value={valueYear || valueGenre || valueRaiting}
						onChange={handleChange}
						type='text'
						placeholder={valueFilter}
					/>
				</>
			)}
		</header>
	)
}
