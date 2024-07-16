import React from 'react'
// import './App.css'; // импорт стилей CSS
import Header from './components/Header/Header'
import HeroArea from './components/HeroArea/HeroArea'
import Search from './components/Search/Search'
import Cards from './components/Cards/Cards'

const App: React.FC = () => {
	return (
		<div className='App'>
			<Header />
			<main className='App-main'>
				<HeroArea />
				<Search />
				<Cards />
			</main>
			<footer className='App-footer'>
				<p>Footer information goes here.</p>
			</footer>
		</div>
	)
}

export default App
