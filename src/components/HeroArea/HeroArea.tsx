import React from 'react'

const HeroArea: React.FC = () => {
	return (
		<section className='hero-area'>
			<div className='container'>
				<div
					id='carouselExampleFade'
					className='carousel carousel-dark slide carousel-fade'
				>
					<div className='carousel-inner'>
						<div className='carousel-item active'>
							<div className='carousel-img carousel-img-1 d-block w-100'></div>
						</div>
						<div className='carousel-item'>
							<div className='carousel-img carousel-img-2 d-block w-100'></div>
						</div>
						<div className='carousel-item'>
							<div className='carousel-img carousel-img-3 d-block w-100'></div>
						</div>
					</div>
					<div className='carousel-control-box'>
						<button
							className='carousel-control-prev'
							type='button'
							data-bs-target='#carouselExampleFade'
							data-bs-slide='prev'
						>
							<span className='carousel-control-prev-icon' aria-hidden='true' />
							<span className='visually-hidden'>Previous</span>
						</button>
						<button
							className='carousel-control-next'
							type='button'
							data-bs-target='#carouselExampleFade'
							data-bs-slide='next'
						>
							<span className='carousel-control-next-icon' aria-hidden='true' />
							<span className='visually-hidden'>Next</span>
						</button>
					</div>
					<div className='carousel-indicators'>
						<div>
							<button
								type='button'
								data-bs-target='#carouselExampleFade'
								data-bs-slide-to={0}
								className='active'
								aria-current='true'
								aria-label='Slide 1'
							>
								<div>
									<span className='carousel-button-text'>01</span>
								</div>
							</button>
						</div>
						<div>
							<button
								type='button'
								data-bs-target='#carouselExampleFade'
								data-bs-slide-to={1}
								aria-label='Slide 2'
							>
								<div>
									<span className='carousel-button-text'>02</span>
								</div>
							</button>
						</div>
						<div>
							<button
								type='button'
								data-bs-target='#carouselExampleFade'
								data-bs-slide-to={2}
								aria-label='Slide 3'
							>
								<div>
									<span className='carousel-button-text'>03</span>
								</div>
							</button>
						</div>
					</div>
				</div>

				{/*<Carousel slide={false} indicators={true} interval={null} variant="dark">
          <Carousel.Item>
            <div className='carousel-img carousel-img-1'></div>
            {/* <img className='carousel-img' src={IMG1} alt="" /> */}
				{/*</Carousel.Item>
          <Carousel.Item>
            <div className='carousel-img carousel-img-2'></div>
            {/* <img className='carousel-img' src={IMG2} alt="" /> */}
				{/*</Carousel.Item>
          <Carousel.Item>
            <div className='carousel-img carousel-img-3'></div>
            {/* <img className='carousel-img' src={IMG3} alt="" /> */}
				{/*</Carousel.Item>
        </Carousel>*/}
			</div>
		</section>
	)
}

export default HeroArea
