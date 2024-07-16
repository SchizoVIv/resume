import React from 'react'

const Search: React.FC = () => {
	return (
		<section className='search'>
			<div className='container'>
				<form className='form-inline my-2 my-lg-0 row align-items-center'>
					<input
						className='form-control col mr-sm-2'
						type='search'
						placeholder='Search'
						aria-label='Search'
					/>
					<button className='btn btn-outline-success col-2 mr-2' type='submit'>
						Поиск
					</button>
					<button
						className='btn btn-outline-secondary col-2'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#filterOptions'
						aria-expanded='false'
						aria-controls='filterOptions'
					>
						ФИЛЬТРЫ
					</button>
					<div className='collapse w-100 mt-2' id='filterOptions'>
						<div className='card card-body'>
							<button
								className='btn btn-outline-secondary col-2 mb-2'
								type='button'
								data-bs-toggle='collapse'
								data-bs-target='#filter1Options'
								aria-expanded='false'
								aria-controls='filter1Options'
							>
								Версия игры
							</button>
							<div className='collapse w-100 mt-2' id='filter1Options'>
								<div className='card card-body'>
									<div className='form-check'>
										<input
											className='form-check-input'
											type='checkbox'
											id='filter1Option1'
										/>
										<label
											className='form-check-label'
											htmlFor='filter1Option1'
										>
											Выбрать все
										</label>
									</div>
									<div className='form-check'>
										<input
											className='form-check-input'
											type='checkbox'
											id='filter1Option2'
										/>
										<label
											className='form-check-label'
											htmlFor='filter1Option2'
										>
											The Sims
										</label>
									</div>
									<div className='form-check'>
										<input
											className='form-check-input'
											type='checkbox'
											id='filter1Option3'
										/>
										<label
											className='form-check-label'
											htmlFor='filter1Option3'
										>
											The Sims2
										</label>
									</div>
									<div className='form-check'>
										<input
											className='form-check-input'
											type='checkbox'
											id='filter1Option4'
										/>
										<label
											className='form-check-label'
											htmlFor='filter1Option4'
										>
											The Sims3
										</label>
									</div>
									<div className='form-check'>
										<input
											className='form-check-input'
											type='checkbox'
											id='filter1Option5'
										/>
										<label
											className='form-check-label'
											htmlFor='filter1Option5'
										>
											The Sims4
										</label>
									</div>
								</div>
							</div>

							<button
								className='btn btn-outline-secondary col-2 mb-2'
								type='button'
								data-bs-toggle='collapse'
								data-bs-target='#filter2Options'
								aria-expanded='false'
								aria-controls='filter2Options'
							>
								Filter 2
							</button>
							<div className='collapse w-100 mt-2' id='filter2Options'>
								<div className='card card-body'>
									<div className='form-check'>
										<input
											className='form-check-input'
											type='checkbox'
											id='filter2Option1'
										/>
										<label
											className='form-check-label'
											htmlFor='filter2Option1'
										>
											Filter 2 Option 1
										</label>
									</div>
									<div className='form-check'>
										<input
											className='form-check-input'
											type='checkbox'
											id='filter2Option2'
										/>
										<label
											className='form-check-label'
											htmlFor='filter2Option2'
										>
											Filter 2 Option 2
										</label>
									</div>
									<div className='form-check'>
										<input
											className='form-check-input'
											type='checkbox'
											id='filter2Option3'
										/>
										<label
											className='form-check-label'
											htmlFor='filter2Option3'
										>
											Filter 2 Option 3
										</label>
									</div>
								</div>
							</div>

							<button
								className='btn btn-outline-secondary col-2 mb-2'
								type='button'
								data-bs-toggle='collapse'
								data-bs-target='#filter3Options'
								aria-expanded='false'
								aria-controls='filter3Options'
							>
								Filter 3
							</button>
							<div className='collapse w-100 mt-2' id='filter3Options'>
								<div className='card card-body'>
									<div className='form-check'>
										<input
											className='form-check-input'
											type='checkbox'
											id='filter3Option1'
										/>
										<label
											className='form-check-label'
											htmlFor='filter3Option1'
										>
											Filter 3 Option 1
										</label>
									</div>
									<div className='form-check'>
										<input
											className='form-check-input'
											type='checkbox'
											id='filter3Option2'
										/>
										<label
											className='form-check-label'
											htmlFor='filter3Option2'
										>
											Filter 3 Option 2
										</label>
									</div>
									<div className='form-check'>
										<input
											className='form-check-input'
											type='checkbox'
											id='filter3Option3'
										/>
										<label
											className='form-check-label'
											htmlFor='filter3Option3'
										>
											Filter 3 Option 3
										</label>
									</div>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</section>
	)
}

export default Search
