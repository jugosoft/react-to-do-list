// Redux - подход к работе и организации состояния приложения
// в котором используется один глобальный state, а 
// взаимодействие с ним осуществляется через действия (actions)
const redux = require('redux');

// Описываем привычный state
const stateInitial = {
    counter: 0,
    object: {
        propertyOne: '1',
        propertyTwo: 2
    }
};

// Reducer - это
const reducer = (state = stateInitial, action) => {

    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'SUB':
            return {
                ...state,
                counter: state.counter - 2
            }
        case 'NULL':
            return {
                object: null
            }
    }
    return state;
}

// Store - 
const store = redux.createStore(reducer);
console.debug(store.getState());

// Action - 
const actionAdd = {
    type: 'ADD'
};

store.dispatch(actionAdd);
console.debug(store.getState());

store.dispatch(actionAdd);
console.debug(store.getState());
