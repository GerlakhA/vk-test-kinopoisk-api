import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

export const useDeleteFavorites = (id: number) => {
	const client = useQueryClient()
	return useMutation({
		mutationKey: ['delete favorite', id],
		mutationFn: async () => {
			const res = await axios.delete(`http://localhost:5500/favorites/${id}`)
			return res.data
		},
		onSuccess: () => {
			client.invalidateQueries({ queryKey: ['favorites'] })
		}
	})
}
