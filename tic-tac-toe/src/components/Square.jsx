// generate functional React component called Square that represents a square in tic-tac-toe
// Square component should accept onClick function as a prop. this function accepts the row and column number of the square
// Square component should accept value prop that can be either 'X', 'O', or null

import React from 'react';
import './Square.css';

import { RxCross1, RxCircle } from 'react-icons/rx';

export default function Square(props) {
    console.log(props);
    const renderIcon = () => {
        switch (props.value) {
            case 1:
                return <RxCross1 />;
            case 2:
                return <RxCircle />;
        }
    };

    return (
        <span className={'square' + (props.disabled ? ' disabled' : '')} onClick={props.onClick}>
            {renderIcon()}
        </span>
    );
}

