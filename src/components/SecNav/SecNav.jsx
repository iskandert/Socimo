import FollInfo from './FollInfo/FollInfo';
import NavButton from './NavButton/NavButton';
import c from './SecNav.module.css'
console.log(111);

const SecNav = (props) => {
    // debugger;
    const state = props.state;
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