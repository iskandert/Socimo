import c from './NavButton.module.css';
import c1 from '../SecNav.module.css';
import { NavLink } from 'react-router-dom';
import Svg from '../../../sprite';

const NavButton = (props) => {
    return (
        <div className={`${c1[props.name]} ${c.button}`}>
            <NavLink to={"/" + props.name}>
                <Svg name={props.name} />
            </NavLink>
        </div>
    )
}

export default NavButton;