import React from 'react'

export const NavigationBar = ({ setOffset }) => {
	const handleNext = () => {
		setOffset(prev => prev + 100)
	}

	const handlePrev = () => {
		setOffset(prev => prev - 100)
	}

	return (
		<>
			<div className="level">
				<div className="level-left">
					<button onClick={handlePrev} className="button is-info">
						Prev
					</button>
				</div>
				<div className="level-item"></div>
				<div className="level-rigth">
					<button onClick={handleNext} className="button is-info">
						Next
					</button>
				</div>
			</div>
		</>
	)
}
