import { ADD_TO_FAVORITES, REMOVE_TO_FAVORITES } from "../actions";

const initialState = {
  jobs: [],
};

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
    case REMOVE_TO_FAVORITES:
      return {
        ...state,
        jobs: state.jobs.filter((job) => job._id !== action.payload),
      };

    default: {
      return state;
    }
  }
};

export default favouritesReducer;
