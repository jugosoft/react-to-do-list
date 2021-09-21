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

// Reducer определяет, как состояние приложения изменяется в ответ на actions, отправленные в store
// Action только описывает, что произошло, но не описывают, как изменяется store
const reducer = (state = stateInitial, action) => {

    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                counter: action.value ? state.counter + action.value : state.counter + 1
            }
        case 'SUB':
            return {
                ...state,
                counter: action.value ? state.counter - action.value : state.counter - 2
            }
        case 'NULL':
            return {
                ...state,
                object: null
            }
    }
    return state;
}

// Store - хранилище данных
const store = redux.createStore(reducer);
store.subscribe(() => {
    console.log(store.getState());
})

// Action - определяют то, как мы изменяем данные
const actionAdd = {
    type: 'ADD'
};

// Послать действие в store
store.dispatch(actionAdd);

store.dispatch({type: 'ADD', value: 100});
