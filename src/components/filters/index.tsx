import styles from './filters.module.scss'

interface IFilters {
	index: number
	setIndex: (index: number) => void
}

const filters = [
	{ id: 0, name: 'По жанру' },
	{ id: 1, name: 'По рейтенгу' },
	{ id: 2, name: 'По году выпуска' }
]

export const Filters = ({ index, setIndex }: IFilters) => {
	const handleClick = (idx: number) => {
		//@ts-ignore
		setIndex(idx)
	}

	return (
		<div className={styles.filtersContainer}>
			<h2>Фильтры: </h2>
			<div className={styles.filterItemContainer}>
				{filters.map((item, i) => (
					<span
						key={item.id}
						onClick={() => handleClick(i)}
						className={index === item.id ? styles.filterItem : ''}
					>
						{item.name}
					</span>
				))}
			</div>
		</div>
	)
}
