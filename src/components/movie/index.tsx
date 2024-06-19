import { Movie } from '../../types'
import { MovieItem } from './MovieItem'
import styles from './movie.module.scss'

interface IMovies {
	setId: (id: number) => void
	movies: Movie[] | undefined
}

export const Movies = ({ setId, movies }: IMovies) => {
	return (
		<div className={styles.movieContainer}>
			{
				//@ts-ignore
				movies?.docs?.length &&
					//@ts-ignore
					movies?.docs?.map((movie: Movie) => (
						<MovieItem key={movie.id} setId={setId} movie={movie} />
					))
			}
		</div>
	)
}
