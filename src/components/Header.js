import React from 'react';
import Button from './Button';
import "../index.css";

const Header = ({ showForm, changeTextAndColor }) => {
    return (
        <header className="header">
            <h2 classname="headerimage"><img src={require('./logo.png')} /></h2>
            <Button onClick={showForm} color={changeTextAndColor ? 'red' : 'green'} text={changeTextAndColor ? 'Minimize' : 'Add Employee'} />
        </header>
    )
}

export default Header;
