import React from 'react'
import cardsData, { Card } from '../../assets/data/cardsData/cardsData'
import IMG from '../../assets/images/dish3.png'

const Cards: React.FC = () => {
	return (
		<section className='cards'>
			<div className='container px-4'>
				<div className='row g-3'>
					{cardsData.map((card: Card) => (
						<div key={card.id} className='col-md-3 mb-4'>
							<div className={`cards-item px-4 ${card.mood}-bg`}>
								<img
									src={IMG}
									className='card-img-top card-img'
									alt={card.title}
								/>
								<div className='card-body'>
									<h5 className='card-title'>{card.title}</h5>
									<p className='card-text'>Уровень: {card.level}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Cards
