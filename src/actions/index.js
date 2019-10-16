import axios from 'axios';

export  function loadColour(){
    return(dispatch) {
        return axios.get('http://www.color.org/json/color/random').then((response) => {
            dispatch(changeColour("#" + response.data.new_color));
        })
    }
}


export function changeColour(color){
    return {
        type: "CHANGE_COLOR", //will be passed to the reducer
        color: color
    }
}