export const numbers: number[] = [2, 3, 5]

// import style from './index.module.scss';
import './index.scss'
import './assets/images/dog.jpg'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
