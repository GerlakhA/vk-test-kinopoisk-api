import { Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useDeleteFavorites } from '../../hooks/useDeleteFavorites'
import { Movie } from '../../types'
import styles from './favorite.module.scss'

interface IFavoriteItem {
	favorite: Movie
	setId: (id: number) => void
}

export const FavoriteItem = ({ favorite, setId }: IFavoriteItem) => {
	const { mutate: deleteFavorite } = useDeleteFavorites(favorite.id)
	return (
		<div className={styles.favoriteContainer}>
			<Link to={`/${favorite.id}`} onClick={() => setId(favorite.id)}>
				<img src={favorite.poster?.url} />
			</Link>
			<p>{favorite.name}</p>
			<Trash2 onClick={() => deleteFavorite()} className={styles.trash} />
		</div>
	)
}
