import { NavLink } from 'react-router-dom';
import Svg from '../../sprite'
import c from './SecNav.module.css'
import Stars from './Stars/Stars'

const SecNav = () => {
    return (
        <nav className={c.secNav}>
            <div className={c.burger}>
                <Svg name="burger" />
            </div>
            <div className={c.pageCaro}>
                <ul>
                    <li className={c.newsfeed}>
                        <NavLink to="/newsfeed">
                            <Svg name='newsfeed' />
                        </NavLink>
                    </li>
                    <li className={c.videos}>
                        <NavLink to="/videos">
                            <Svg name='videos' />
                        </NavLink>
                    </li>
                    <li className={c.courses}>
                        <NavLink to="/courses">
                            <Svg name='courses' />
                        </NavLink>
                    </li>
                    <li className={c.books}>
                        <NavLink to="/books">
                            <Svg name='books' />
                        </NavLink>
                    </li>
                    <li className={c.blog}>
                        <NavLink to="/blog">
                            <Svg name='blog' />
                        </NavLink>
                    </li>
                    <li className={c.groups}>
                        <NavLink to="/groups">
                            <Svg name='groups' />
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className={c.userInfo}>
                <div>
                    <span>Followers: 101</span>
                    <Stars rate="4" />
                </div>

            </div>
        </nav>
    );
}

export default SecNav;