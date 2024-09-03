import { TAKE_ARRAY } from "../actions"


const initialState = {
    searchList: []
}

export default function searchResultAction (state = initialState, action) {

    switch(action.type){
        case TAKE_ARRAY: {
            return{
                ...state,
                searchList: action.payload
            }           
        }

    default: {
        return state
        
    }
}

    

}