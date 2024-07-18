import React from 'react'
import cardsData, { Card } from '../../assets/data/cardsData/cardsData'
import IMG from '../../assets/images/dish3.png'
import ICON_SIMS1 from '../../assets/images/simsIcon/icon-sims1-base.png'
import ICON_SIMS2 from '../../assets/images/simsIcon/icon-sims2-base.png'
import ICON_SIMS3 from '../../assets/images/simsIcon/icon-sims3-base.png'
import ICON_SIMS4 from '../../assets/images/simsIcon/icon-sims4-base.png'

const getImageSrc = (icon:string) => {
  const lastChar = icon.charAt(icon.length - 1);
  switch (lastChar) {
    case '4':
      return ICON_SIMS4;
    case '3':
      return ICON_SIMS3;
    case '2':
      return ICON_SIMS2;
    default:
      return ICON_SIMS1;
  }
};

const Cards: React.FC = () => {
	return (
		<section className='cards'>
			<div className='container px-4'>
				<div className='row g-3'>
					{cardsData.map((card: Card) => (
						<div key={card.id} className='col-md-3 mb-4'>
							<div className={`cards-item px-4 ${card.mood}-bg  d-flex flex-column justify-content-between`}>
								<img
									src={IMG}
									className='card-img-top card-img'
									alt={card.title}
								/>
								<div className='card-body'>
									<h5 className='card-title'>{card.title}</h5>
									<p className='card-text'>Уровень: {card.level}</p>
								</div>
                <div className='card-body'>
                  {
                    card.series.map((icon) => (
                      <img src={getImageSrc(icon)} className='icon-game' alt='иконка бвзовой игры' />
                    ))
                  }

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
