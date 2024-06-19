export interface Movie {
	id: number
	name?: string
	year?: number
	description?: string
	poster?: {
		url: string
		previewUrl: string
	}
	genres?: [
		{
			name: string
		}
	]
	rating?: {
		imdb: number
	}
	countries?: [
		{
			name: string
		}
	]
}
