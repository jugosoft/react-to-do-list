import React from 'react';
import {connect} from 'react-redux';
import { add, sub, addNumber, onAsyncAdd, reset } from '../../redux/actions/actions';

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
                    <button onClick={this.props.reset}>Reset</button>
                </div>
                <div>
                    <button onClick={this.props.onAsyncAdd}>Async 100</button>
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
        increase: () => dispatch(add()),
        decrease: () => dispatch(sub()),
        // Можно и другим способом уведомлять редьюсер
        addNumber: function () {
            return dispatch(addNumber(228));
        },
        reset: () => dispatch(reset()),
        onAsyncAdd: () => dispatch(onAsyncAdd())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PerfectCounter);