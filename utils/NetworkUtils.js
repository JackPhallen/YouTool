

export function initPostFetch() {

}

function buildPath(perPage, pageNumber) {
    return `https://2rogues.com/wp-json/wp/v2/posts?per_page=${perPage}&page=${pageNumber}`;
}

function fetchContent(URLs , onSuccess, onFailure) {
    return function(dispatch, getState) {
        return fetch(url)
            .then(function(response) {
                if (response.status === 400) {

                } else {
                    response.json()
                        .then(data =>
                            dispatch(onSuccess(data)));
                }
            })
            .catch(err => {
                onFailure(err);
            });
    };
}