import React from 'react';

export default class PerfectCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    increase = (event) => {
        event.preventDefault();
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }

    decrease = (event) => {
        event.preventDefault();
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        });
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <h1>Current Count: {this.state.count}</h1>
                </div>
                <div>
                    <form>
                        <button onClick={this.increase}>Increase</button>
                        <button onClick={this.decrease}>Decrease</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}