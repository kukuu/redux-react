import { SET_GAMES } from '../actions'

//reducer is just a oure function
export default function games( state = [], action = {}) {
	switch(action.type){
		case SET_GAMES: 
		return action.games;

		default: return state;
	}
}