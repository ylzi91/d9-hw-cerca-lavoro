

const initialState = {
    favourites: {
        jobs: [],
    }
}

const mainReducer = (state = initialState, action ) => {

    switch(action.type) {
        case 'ADD_TO_FAVORITES': 
            return {
                    ...state,
                    favourites:{
                        jobs: [...state.favourites.jobs, action.payload]
                    }
                }
        case 'REMOVE_TO_FAVORITES':
            return{
                ...state,
                favourites: {
                    jobs: state.favourites.jobs.filter((job) => job._id !== action.payload)
                }

            }


        default: {
            return state
        }
    }

}

export default mainReducer