import {FETCH_POSTS, NEW_POST} from '../actions/types';

const initialState = {
    items: [],//represents the post coming in from the action
    item: {} //represents the single post to be added. response put here
}

export default function(state=initialState, action){
    switch(action.type){
        case FETCH_POSTS:
        console.log('reducer');
            return {
                ...state,
                items: action.payload
            };
        case NEW_POST:
        return {
            ...state,
            item: action.payload
        };
        default: 
            return state;
    }

}