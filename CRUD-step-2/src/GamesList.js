import React from 'react';

export default function GamesList({games}) {

	const emptyMessaage = (
		<p>There are yet no games in the collection</p>
	);

	const gamesList = (
		<p>Games list</p>
	);

	return (
		<div>
			{games.length === 0 ? emptyMessaage : gamesList}
		</div>
	);

}

GamesList.propTypes = {
	games: React.PropTypes.array.isRequired
}