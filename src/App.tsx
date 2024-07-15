import React from 'react'
// import './App.css'; // импорт стилей CSS

const App: React.FC = () => {
	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Welcome to My React App</h1>
			</header>
			<main className='App-main'>
				<p>This is the main content of the application.</p>
			</main>
			<footer className='App-footer'>
				<p>Footer information goes here.</p>
			</footer>
		</div>
	)
}

export default App
