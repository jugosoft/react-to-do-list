import React from 'react';
import './Layout.css';
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle';
import Drawer from '../../components/Navigation/Drawer/Drawer';

export default class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    toggleMenu = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    onCloseBackdrop = () => {
        this.setState({
            isOpen: false
        });
    }

    render() {
        return (
            <div className={'Layout'}>

                <Drawer 
                    isOpen={this.state.isOpen}
                    onCloseBackdrop={this.onCloseBackdrop}/>

                <MenuToggle
                    onToggle={this.toggleMenu}
                    isOpen={this.state.isOpen} />

                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}