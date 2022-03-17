import React from 'react'

export const Modal = ({ children, setModal, title }) => {
	return (
		<>
			<div className="modal-container">
				<div className="modal">
					<div className="modal-background"></div>
					<div className="modal-card">
						<header className="modal-card-head">
							<p className="modal-card-title">{title}</p>
							<button
								onClick={() => setModal(prev => !prev)}
								className="delete"
								aria-label="close"
							></button>
						</header>
						<section className="modal-card-body">{children}</section>
						<footer className="modal-card-foot">
							<button className="button" onClick={() => setModal(prev => !prev)}>
								Cancel
							</button>
						</footer>
					</div>
				</div>
			</div>
		</>
	)
}
