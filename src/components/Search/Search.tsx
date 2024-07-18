import React, { useState } from 'react';
import filtersData, { Filter } from '../../assets/data/filtersData/filtersData';

const Search: React.FC = () => {
  const [checkedState, setCheckedState] = useState(
    filtersData.map((filter) => ({
      id: filter.id,
      options: filter.option.map((_, index) => index === 0)
    }))
  );

  const handleCheckboxChange = (filterId: number, index: number) => {
    setCheckedState((prevState) => {
      const newState = prevState.map((filter) => {
        if (filter.id === filterId) {
          if (index === 0) {
            const allChecked = filter.options[index];
            const newOptions = filter.options.map(() => !allChecked);
            return { ...filter, options: newOptions };
          } else {
            const newOptions = filter.options.map((checked, idx) => {
              if (idx === 0) {
                return false;
              }
              return idx === index ? !checked : checked;
            });
            return { ...filter, options: newOptions };
          }
        }
        return filter;
      });
      return newState;
    });
  };

	return (
		<section className='search'>
			<div className='container'>
				<form className='form-inline my-2 my-lg-0 row align-items-center'>
          <div className='search-box col-10 py-2 px-2'>
            <input
              className='form-control col mr-sm-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <button className='btn-search btn btn-outline-success col-2 mr-2' type='submit'>
              Поиск
            </button>
          </div>
					<button
						className='btn-filters-list btn btn-outline-secondary col-3 px-2 py-2'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#filterOptions'
						aria-expanded='false'
						aria-controls='filterOptions'
					>
						<span className='button-text'>ФИЛЬТРЫ</span>
					</button>
					<div className='collapse w-100 mt-2' id='filterOptions'>
						<div className='card card-body card-filter-bg row'>
              {filtersData.map((filter: Filter, i) => (
                <div className='card-filter-flex col-12 col-md-6 col-lg-4 col-xl-3'>
                  <button
                    className='btn btn-options btn-outline-secondary mb-2'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target={`#filter${filter.id}Options`}
                    aria-expanded='false'
                    aria-controls={`filter${filter.id}Options`}
                  >
                    {filter.title}
                  </button>
                  <div className='collapse w-100 mt-2' id={`filter${filter.id}Options`}>
                    <div className='card card-body'>
                      {filter.option.map((el, index) => (
                        <div className='form-check'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            id={`filter${filter.id}Option${index + 1}`}
                            checked={checkedState.find((f) => f.id === filter.id)?.options[index] || false}
                            onChange={() => handleCheckboxChange(filter.id, index)}
                          />
                          <label
                            className='form-check-label'
                            htmlFor={`filter${filter.id}Option${index + 1}`}
                          >
                            {el}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
						</div>
					</div>
				</form>
			</div>
		</section>
	)
}

export default Search
