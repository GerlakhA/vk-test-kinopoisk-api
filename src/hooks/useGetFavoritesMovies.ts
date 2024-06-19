import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Movie } from '../types'

export const useGetFavoritesMovies = () => {
	return useQuery({
		queryKey: ['favorites'],
		queryFn: async () => {
			const res = await axios.get<Movie[]>('http://localhost:5500/favorites')
			return res.data
		}
	})
}
