
export const REQUEST_APPS = 'REQUEST_APPS'
export const RECEIVE_APPS = 'RECEIVE_APPS'

/* Begin action creator*/
function requestApps() {
  return {
    type: REQUEST_APPS
    //no payload on requesting. Payload is optional
  }
}
/*end action creator*/

function receiveApps(json) {
  return {                      /*Begin action*/
    type: RECEIVE_APPS,
    apps: json/* payload */
  }                            /* end actionce */
}

function fetchApps() {
  return dispatch => {
    dispatch(requestApps())
    return fetch(`assets/data.json`)
      .then(response => response.json())
      .then(json => dispatch(receiveApps(json)))
  }
}

function shouldFetchApps(state) {
  const apps = state.apps
  if (apps.length==0) {
    return true
  } else if (state.isFetching) {
    return false
  }
}

export function fetchAppsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchApps(getState())) {
      return dispatch(fetchApps())
    }
  }
}
