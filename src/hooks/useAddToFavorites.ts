import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { toast } from 'sonner'
import { Movie } from '../types'

export const useAddToFavorites = () => {
	return useMutation({
		mutationKey: ['addToFavorites'],
		mutationFn: async (data: Movie) => {
			const res = await axios.post('http://localhost:5500/favorites', data)
			return res.data
		},
		onSuccess: () => {
			toast.success('Фильм добавлен в избранные!')
		}
	})
}
