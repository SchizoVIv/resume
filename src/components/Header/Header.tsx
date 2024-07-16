import React from 'react'

const Header: React.FC = () => {
	return (
		<header className='header' id='home'>
			<div className='container'>
				<nav className='navbar navbar-expand-lg bg-body-tertiary'>
					<div className='container-fluid'>
						<a className='navbar-brand' href='#home'>
							LOGO
						</a>
						<button
							className='navbar-toggler'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#navbarText'
							aria-controls='navbarText'
							aria-expanded='false'
							aria-label='Toggle navigation'
						>
							<span className='navbar-toggler-icon' />
						</button>
						<div className='collapse navbar-collapse' id='navbarText'>
							<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
								<li className='nav-item'>
									<a
										className='nav-link active'
										aria-current='page'
										href='#home'
									>
										Главная
									</a>
								</li>
								<li className='nav-item'>
									<a className='nav-link' href='#home'>
										О проекте
									</a>
								</li>
								<li className='nav-item'>
									<a className='nav-link' href='#home'>
										Войти
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</header>
	)
}

export default Header
