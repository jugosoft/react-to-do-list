import React from 'react';
import './Layout.css';

export default class Layout extends React.Component {

    render(){
        return(
            <div style={{width: 400, border: '1px solid black'}} className={'Layout'}>
                <main>
                    { this.props.children }
                </main>
            </div>
        );
    }
}