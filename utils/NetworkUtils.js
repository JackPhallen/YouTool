
export function fetchContent(url , onSuccess, onFailure) {
    return function(dispatch, getState) {
        return fetch(url)
            .then( data => data.json())
            .then( data => {
                dispatch(onSuccess(data));
            })
            .catch( err => {
                console.log(err.toString());
                dispatch(onFailure());
            })
    }
}