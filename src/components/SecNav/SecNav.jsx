import FollInfo from './FollInfo/FollInfo';
import NavButton from './NavButton/NavButton';
import c from './SecNav.module.css';
import c1 from './NavButton/NavButton.module.css';
import { setClassOnEvent } from '../../redux/reduxStore';
// console.log(111);

const SecNav = (props) => {
    // debugger;
    const state = props.state;
    let setClassToNavButton = setClassOnEvent(`.${c1.button}:not(.${c1.burger})`, c1.hovered);
    console.log(`${c1.newsfeed}, ${c1.hovered}`);
    return (
        <nav className={c.secNav}>
            <NavButton name="burger" />
            <div className={c.pageCaro}>
                <NavButton name="newsfeed" />
                <NavButton name="videos" />
                <NavButton name="courses" />
                <NavButton name="books" />
                <NavButton name="blog" />
                <NavButton name="groups" />
            </div>

            <FollInfo state={state.follInfo} />
        </nav>
    );
}

export default SecNav;