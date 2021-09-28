import React from 'react';
import {connect} from 'react-redux';

class PerfectCounter extends React.Component {
    render() {
        console.log('APP', this.props);
        debugger
        return (
            <React.Fragment>
                <div>
                    <h1>Current Count: {this.props.counter}</h1>
                </div>
                <div>
                    <button onClick={this.props.increase}>Increase</button>
                    <button onClick={this.props.decrease}>Decrease</button>
                </div>
            </React.Fragment>
        )
    }
}

// Позволяет избавиться от локального стейта
function mapStateToProps(state) {
    return {
        ...state,
        counter: state.counter
    };
}

// позволяет передать экшены редьюсера как пропсы в компонент
function mapDispatchToProps(dispatch) {
    return {
        increase: () => dispatch({type: 'ADD'}),
        decrease: () => dispatch({type: 'SUB'})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PerfectCounter);