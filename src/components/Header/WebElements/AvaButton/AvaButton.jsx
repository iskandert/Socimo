import { NavLink } from 'react-router-dom';
import c from './AvaButton.module.css'

const AvaButton = (props) => {
    return (
        <div className={c.userDp}>
            <NavLink to="/profile">
                <img src="http://wpkixx.com/html/socimo/images/resources/user.jpg" alt="avatar" />
                Georg Peter
            </NavLink>
        </div>
    );
}

export default AvaButton;