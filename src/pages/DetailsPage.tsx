import { Link } from 'react-router-dom'
import { useAddToFavorites } from '../hooks/useAddToFavorites'
import { Movie } from '../types'
import styles from './pages.module.scss'

interface IFavorites {
	moveById: Movie | null | undefined
}

export default function DetailsPage({ moveById }: IFavorites) {
	const { mutate: addToFavorites, isPending } = useAddToFavorites()

	const handleClick = () => {
		if (!moveById) return

		addToFavorites(moveById)
	}

	return (
		<>
			<div className={styles.linkHome}>
				<Link to={'/'}>На главную</Link>
			</div>
			<div className={styles.detailsContainer}>
				<div className={styles.detailsItem}>
					{moveById?.poster ? (
						<img src={moveById.poster.previewUrl} alt='previewImage' width={420} height={550} />
					) : null}
					<div className={styles.detailsMovie}>
						<h1 className={styles.name}>{moveById?.name}</h1>
						<span className={styles.desc}> {moveById?.description}</span>
						<span className={styles.year}>Дата выпуска: {moveById?.year}</span>
						<span className={styles.year}>Рейтинг: {moveById?.rating?.imdb}</span>
						<div className={styles.genre}>
							Жанр:
							{moveById?.genres?.map((genre, index) => (
								<div key={index}>
									{moveById?.genres?.length && index !== moveById?.genres.length - 1 ? (
										<span>{genre.name},</span>
									) : (
										<span>{genre.name}</span>
									)}
								</div>
							))}
						</div>
						{/* mutation fn for favorites page */}
						<button onClick={handleClick} disabled={isPending} className={styles.favoriteBtn}>
							Добавить в избранное
						</button>
					</div>
				</div>
			</div>
		</>
	)
}
