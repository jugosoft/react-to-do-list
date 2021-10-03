import { FETCH } from "./actions/actionTypes";

const initialState = {
    error: null,
    isLoaded: false,
    items: []
};

export default function AsyncComponent(state = initialState, action) {
    switch (action.type) {
        case 'REQUEST_RANDOMS':
            return {
                ...state,
                isFetching: true,
                didInvalidate: false
            }
        case 'RECEIVE_RANDOMS':
            return {
                ...state,
                isFetching: false,
                isLoaded: true,
                items: action.items
            }
        default:
            return state;
    }
}
