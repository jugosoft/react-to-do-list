import React, { useLayoutEffect, useState } from 'react';
import './Drawer.css';
import Backdrop from '../Backdrop/Backdrop';

export default class Drawer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            links: [
                {
                    id: 1,
                    name: 'todo List'
                },
                {
                    id: 2,
                    name: 'Perfect Counter'
                },
                {
                    id: 3,
                    name: 'Quiz Interview'
                },
            ]
        }
    }

    getLinks = function () {
        return this.state.links.map((link, index) => {
            return (
                <li key={link.id}>
                    <a href="#">Link {link.name}</a>
                </li>
            );
        });
    }

    render() {
        const cls = ["Drawer"];
        if (!this.props.isOpen) {
            cls.push('closed');
        }
        return (
            <React.Fragment>
            <nav className={cls.join(' ')}>
                <ul>
                    {
                        this.getLinks()
                    }
                </ul>
            </nav>
            { this.props.isOpen ? <Backdrop onCloseBackdrop={this.props.onCloseBackdrop}/> : null }
            </React.Fragment>
        );
    }
}