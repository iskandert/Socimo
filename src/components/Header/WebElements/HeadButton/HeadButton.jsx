import { NavLink } from 'react-router-dom';
import Svg from '../../../../sprite';
import c from './HeadButton.module.css'

const HeadButton = (props) => {
    return (
        <div className={c.webButtons}>
            <NavLink to={props.addres}>
                <Svg name={props.name} />
            </NavLink>
        </div>
    );
}

export default HeadButton;