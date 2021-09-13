import React, { useLayoutEffect, useState } from 'react';
import './Drawer.css';

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
            <nav className={cls.join(' ')}>
                <ul>
                    {
                        this.getLinks()
                    }
                </ul>
            </nav>
        );
    }
}