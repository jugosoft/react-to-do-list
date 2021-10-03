import { ADD, ADD_NUMBER, RESET, SUB } from "./actionTypes";

export function add() {
    return {
        type: ADD
    }
}

export function sub() {
    return {
        type: SUB
    }
}

export function onAsyncAdd() {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(addNumber(3000));
        }, 5000);
        // type: SUB
    }
}

export function addNumber(number) {
    return {
        type: ADD_NUMBER,
        payload: {
            value: number
        }
    }
}

export function reset() {
    return {
        type: RESET
    }
}