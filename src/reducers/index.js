
let defaultColour = {
    color: "red";
}

const mainReducer = (state = defaultColour, action) => {
    if(action.type === "CHANGE_COLOR"){
        return {
            ...state,
            color:action.color
        }
    } else {
        return ...state
    }
}

export default mainReducer;