export interface Card {
  id: number
	title: string
	level: number
	mood: string
  series: string[]
  supplement: string
  price: number
  method: string
  feedTime: string[]
  nation: string
}

const rawCardsData = [
	{
		title: 'Сосиски с болгарским перцем',
		level: 1,
		mood: 'normal',
    series: ['The Sims4'],
    supplement: 'Luxury Party',
    price: 48,
    method: 'гриль',
    feedTime: ['different'],
    nation: 'other'
	},
  {
		title: 'Богатая белком пища',
		level: 2,
		mood: 'excited',
    series: ['The Sims4'],
    supplement: 'Basic game',
    price: 23,
    method: 'Плита/духовка',
    feedTime: ['Dinner'],
    nation: 'other'
	},
  {
		title: 'Садовый салат',
		level: 1,
		mood: 'normal',
    series: ['The Sims4', 'The Sims3'],
    supplement: 'Basic game',
    price: 9,
    method: 'Ручками',
    feedTime: ['different'],
    nation: 'other'
	},
  {
		title: 'Бабушкина уха',
		level: 0,
		mood: 'normal',
    series: ['The Sims4','The Sims3','The Sims2'],
    supplement: 'Basic game',
    price: 9,
    method: 'Плита/духовка',
    feedTime: ['Dinner', 'Lunch'],
    nation: 'other'
	},

]

const cardsData: Card[] = rawCardsData.map((filter, index) => ({
	id: index + 1,
	...filter
}));

export default cardsData
