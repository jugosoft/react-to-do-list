import { RESET } from "./actions/actionTypes";
import { initialState } from "./PerfectCounter";

export default function PerfectCounter(state = { }, action) {
    switch (action.type) {
        case RESET:
            alert('Your Life is Reseted!');
        default:
            return state;
    }
}