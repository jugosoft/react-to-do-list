import React from 'react';
import {connect} from 'react-redux';

class PerfectCounter extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <h1>Current Count: {this.props.counter}</h1>
                </div>
                <div>
                    <button onClick={this.props.increase}>Increase</button>
                    <button onClick={this.props.decrease}>Decrease</button>
                </div>
                <div>
                    <button onClick={this.props.addNumber}>Add 228</button>
                </div>
            </React.Fragment>
        )
    }
}

// Позволяет избавиться от локального стейта
function mapStateToProps(state) {
    return {
        counter: state.PerfectCounter.counter
    };
}

// позволяет передать экшены редьюсера как пропсы в компонент
function mapDispatchToProps(dispatch) {
    return {
        increase: () => dispatch({type: 'ADD'}),
        decrease: () => dispatch({type: 'SUB'}),
        // Можно и другим способом уведомлять редьюсер
        addNumber: function () {
            return dispatch({type: 'ADD_NUMBER', payload: {value: 228}});
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PerfectCounter);