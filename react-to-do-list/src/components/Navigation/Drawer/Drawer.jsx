import React, { useLayoutEffect, useState } from 'react';
import './Drawer.css';
import Backdrop from '../Backdrop/Backdrop';
import { NavLink } from 'react-router-dom';

export default class Drawer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            links: [
                {
                    id: 1,
                    to: '/todo',
                    name: 'todo List', 
                    exact: true
                },
                {
                    id: 2,
                    to: '/counter',
                    name: 'Perfect Counter', 
                    exact: true
                },
                {
                    id: 3,
                    to: '/quiz',
                    name: 'Quiz Interview', 
                    exact: true
                },
                {
                    id: 4,
                    to: '/quizlist',
                    name: 'List Of Quizes', 
                    exact: true
                },
                {
                    id: 5,
                    to: '/createquiz',
                    name: 'Generate New Quiz', 
                    exact: true
                },
                {
                    id: 6,
                    to: '/auth',
                    name: 'Auth', 
                    exact: true
                },
            ]
        }
    }

    getLinks = function () {
        return this.state.links.map((link, index) => {
            return (
                <li key={link.id} onClick={this.onClose}>
                    <NavLink to={link.to} exact={link.exact} activeClassName="active">{link.id}.&nbsp;{link.name} </NavLink>
                </li>
            );
        });
    }

    onClose = () => {
        this.props.onCloseBackdrop();
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