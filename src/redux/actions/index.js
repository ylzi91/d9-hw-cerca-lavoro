
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES'
export const REMOVE_TO_FAVORITES = 'REMOVE_TO_FAVORITES'
export const TAKE_ARRAY = 'TAKE_ARRAY'



export const addToFavoriteAction = (data) => {
    return {
            type: ADD_TO_FAVORITES,
            payload: data
    }
}
export const removeToFavoriteAction = (data) => {
    return {
        type: REMOVE_TO_FAVORITES,
        payload: data._id
    }
}

export const ViewSearch = (query) => {
    return async (dispatch, getstate) => {
        const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";
        try {
            const response = await fetch(baseEndpoint + query + "&limit=20");
            if (response.ok) {
              const { data } = await response.json();
              dispatch({
                type: TAKE_ARRAY,
                payload: data
              })
            } else {
              alert("Error fetching results");
            }
          } catch (error) {
            console.log(error);
          }
    }
}