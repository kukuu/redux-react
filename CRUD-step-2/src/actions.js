export const SET_GAMES = 'SET_GAMES';


//Redux action is a pure function that returns one parameter type, and a collection
export function setGames(games) {
	return {
		type: SET_GAMES, //Will be returned to CASE in reducer. the value is a simple string and is exported above. Not necessary here. the string could have been passed here.
		games //collection or payload. Will be returned to action in reducer
	}
}


//Define thunk action
export function fetchGames() {
	//return a function that takes espatch as an argument
	return dispatch => {
		//fetch returns a promise. use polyfill to suppott IE and safari
		fetch('/api/games')
		.then(res => res.json())// using then it first converts data into JSON and passes it on further. you can make a status check
		.then(data => dispatch(setGames(data.games)));//second then we dispatch setGame action and pass collection data games to it
	}
}