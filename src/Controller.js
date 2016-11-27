import React from 'react';

const Controller = ({ setWH }) => {

	let width, height;

	return (
		<div>
			width <input />
			height <input />
			<button onclick={setWH(width, height)}>Change Board</button>
		</div>
	)
}

export default Controller;
