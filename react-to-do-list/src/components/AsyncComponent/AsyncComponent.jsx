import React from 'react';
import { fetchRandom } from '../../redux/actions/actions';
import { connect } from 'react-redux';

class AsyncComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchRandom()
    }

    render() {
        if (this.props.error) {
            return <div>Ошибка: {this.props.error.message}</div>;
        } else if (!this.props.isLoaded) {
            return <div>Загрузка...</div>;
        } else {
            return (
                <ul style={{listStyle:'none'}}>
                    {this.props.items.map((item, index) => <li style={{display:'inline'}} key={index}>&nbsp;{item}&nbsp;</li>)}
                </ul>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        error: state.AsyncComponent.error,
        isLoaded: state.AsyncComponent.isLoaded,
        items: state.AsyncComponent.items
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchRandom: () => dispatch(fetchRandom())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AsyncComponent);