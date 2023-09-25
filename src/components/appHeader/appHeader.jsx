import React from "react";

import {Logo} from '@ya.praktikum/react-developer-burger-ui-components';

import styleAppHeader from './appHeader.module.css';

class AppHeader extends React.Component {
    render () {
        return (
            <div className={styleAppHeader.header}>
                <Logo />
            </div>
        );
    };
}

export default AppHeader;