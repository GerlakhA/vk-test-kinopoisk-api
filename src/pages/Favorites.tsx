import { Link } from 'react-router-dom'
import { FavoriteItem } from '../components/favorite/FavoriteItem'
import { useGetFavoritesMovies } from '../hooks/useGetFavoritesMovies'
import styles from './pages.module.scss'

interface IFavorites {
	setId: (id: number) => void
}

export default function Favorites({ setId }: IFavorites) {
	const { data: favorites } = useGetFavoritesMovies()

	return (
		<>
			<div className={styles.linkHome}>
				<Link to={'/'}>На главную</Link>
			</div>
			<div className={styles.favoritesContainer}>
				{favorites?.length &&
					favorites.map(favorite => (
						<FavoriteItem key={favorite.id} setId={setId} favorite={favorite} />
					))}
			</div>
		</>
	)
}
