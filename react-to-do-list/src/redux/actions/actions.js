import { ADD, ADD_NUMBER, FETCH, RESET, SUB } from "./actionTypes";

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

export const receiveRandoms= (result) => ({
    type: 'RECEIVE_RANDOMS',
    items: result.map(child => child),
    isLoaded: true
  })

  export const requestRandoms = () => ({
    type: 'REQUEST_RANDOMS'
  })

export function fetchRandom() {
    return dispatch => {
        dispatch(requestRandoms());
        return fetch('http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=5', { mode: 'no-cors' })
            .then(res => res.json())
            .then(
                (result) => {
                    return dispatch(receiveRandoms(result));
                },
                (error) => {
                    return {
                        isLoaded: true,
                        error
                    };
                }
            )
    };
}