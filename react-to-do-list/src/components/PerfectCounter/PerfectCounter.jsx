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
                    <form>
                        <button onClick={this.props.increase}>Increase</button>
                        <button onClick={this.props.decrease}>Decrease</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

// Позволяет избавиться от локального стейта
function mapStateToProps(state) {
    return {
        
        counter: state.counter
    };
}

// позволяет передать экшены редьюсера как пропсы в компонент
function mapDispatchToProps(dispatch) {
    return {
        increase: (number) => dispatch({type: 'ADD', payload: number}),
        decrease: (number) => dispatch({type: 'SUB', payload: number})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PerfectCounter);