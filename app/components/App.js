// Import modules
import React from 'react'

// Import stylesheet
import styles from '../stylesheets/style.scss'

export default class App extends React.Component {
	render() {
		return (
			<div className={styles.intro}>
				Hello World!
			</div>
		)
	}
}
