import c from './SecNav.module.css'

const SecNav = () => {
    return (
        <nav className={c.secNav}>
            <div className={c.sidemenu}>=</div>
            <div className={c.pageCaro}>
                <ul>
                    <li>+</li>
                    <li>+</li>
                    <li>+</li>
                    <li>+</li>
                    <li>+</li>
                    <li>+</li>
                </ul>
            </div>
            <div className={c.userInfo}>Followers: 101</div>
        </nav>
    );
}

export default SecNav;