// import React from 'react';
import c from './NavButton.module.css';
import c1 from '../SecNav.module.css';
import { NavLink } from 'react-router-dom';
import Svg from '../../../sprite';
import { setClassOnEvent } from '../../../redux/reduxStore';

const NavButton = (props) => {
    let name = () => {
        if (props.name !== 'burger') return (
            <span>{props.name}</span>
        )
    }
    let setClassToNavButton;
    if (props.name !== 'burger') {
        setClassToNavButton = setClassOnEvent(`.${c[props.name]}`, c.hovered);
    }
    return (
        <div
            className={`${c.button} ${c[props.name]}`}
            onMouseEnter={setClassToNavButton}
            onMouseLeave={setClassToNavButton}
        >
            <NavLink to={"/" + props.name} activeClassName={c.active}>
                <Svg name={props.name} />
                {name()}
            </NavLink>
        </div>
    )
}

export default NavButton;