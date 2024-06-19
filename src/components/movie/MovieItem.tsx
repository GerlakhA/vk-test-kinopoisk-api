import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Movie } from '../../types'
import styles from './movie.module.scss'

interface MovieItemProps {
	movie: Movie | undefined
	setId: (id: number) => void
}

export const MovieItem: FC<MovieItemProps> = ({ movie, setId }) => {
	return (
		<Link to={`/${movie?.id}`} onClick={() => setId(movie?.id ?? 0)} className={styles.movie}>
			<div className={styles.movieItem}>
				{movie?.poster ? <img src={movie.poster.previewUrl} alt='previewImage' /> : null}
				<span className={styles.name}>{movie?.name}</span>
				<div className={styles.movieItemFooter}>
					<span>год выпуска: {movie?.year}</span>
					<span>рейтинг: {movie?.rating?.imdb}</span>
				</div>
			</div>
			{/* <span>{movie?.}</span> */}
		</Link>
	)
}
