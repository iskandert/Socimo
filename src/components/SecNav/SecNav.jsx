import FollInfo from './FollInfo/FollInfo';
import NavButton from './NavButton/NavButton';
import c from './SecNav.module.css'

const SecNav = () => {
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
            <FollInfo rate='4' count='101' />
        </nav>
    );
}

export default SecNav;