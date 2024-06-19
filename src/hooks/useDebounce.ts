import { useEffect, useState } from 'react'

export const useDebounce = <T>(value: T, delay?: number): T => {
	const [debouncedValue, setDeboucedValue] = useState(value)

	useEffect(() => {
		const timer = setTimeout(() => {
			setDeboucedValue(value)
		}, delay ?? 1000)

		return () => clearTimeout(timer)
	}, [value])

	return debouncedValue
}
