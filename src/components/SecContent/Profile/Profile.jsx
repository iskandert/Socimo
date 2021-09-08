import c from './Profile.module.css';
import c1 from '../../Widjets/Widjet.module.css';

import { NavLink } from 'react-router-dom';
import Svg from '../../../sprite';

const Profile = (props) => {
    const state = props.state;
    const info = state.profileInfo;
    // const isActive = () => {

    // }
    return (
        <div className={c.profile}>
            <div className={c.banner}>
                <img src={info.profileBackground} alt="background" />
                <div className={c.avatar}>
                    <img src={info.avatar} alt="avatar" />
                </div>
            </div>
            <div className={c.info}>
                {/* Tolstikh Alexander */}
                {/* <div className={c.nameInfo} > */}
                <h4 className={c.nameInfo}>
                    <span>{info.name}</span>
                    <span>{info.email}</span>
                </h4>

                {/* </div> */}
                <div className={c.statistic}>
                    <div className>
                        <span>Joined:</span>
                        <span>{info.joined}</span>
                    </div>
                    <div className>
                        <span>Follow:</span>
                        <span>{info.follow}</span>
                    </div>
                    <div className>
                        <span>Followers:</span>
                        <span>{info.followers.count}</span>
                    </div>
                    <div className>
                        <span>Posts:</span>
                        <span>{info.posts}</span>
                    </div>
                </div>
            </div>
            <div className={c.nav}>
                <div className={c.btts}>
                    <NavLink to='/profile' exact activeClassName={c.active} >Posts</NavLink>
                    <NavLink to='/profile/pictures' activeClassName={c.active}>Pictures</NavLink>
                    <NavLink to='/profile/videos' activeClassName={c.active}>Videos</NavLink>
                    <NavLink to='/profile/friends' activeClassName={c.active}>Friends</NavLink>
                    <NavLink to='/profile/about' activeClassName={c.active}>About</NavLink>
                </div>
                <div className={c.searches}>
                    <form>
                        <input type="text" value='' placeholder='Search...' />
                        <Svg name='search' />
                    </form>
                    <div className={`${c.more} ${c1.more}`}>
                        <Svg name='more' />
                    </div>
                </div>
            </div>
            <div className={`${c.about} ${c1.widjet}`}>
                <div className={c.aboutInfo}>
                    <span className={c1.header}>About me</span>
                    <p>
                        Hi! My name is Georg Peeter but
                        some people may know me as peeter!
                        I have a Twitch channel where I stream,
                        play and review all the newest games.
                    </p>
                    <ul className={c.badjes}>
                        <li><img src="https://wpkixx.com/html/socimo/images/badges/badge2.png" alt="badje" /></li>
                        <li><img src="https://wpkixx.com/html/socimo/images/badges/badge3.png" alt="badje" /></li>
                        <li><img src="https://wpkixx.com/html/socimo/images/badges/badge4.png" alt="badje" /></li>
                        <li><img src="https://wpkixx.com/html/socimo/images/badges/badge5.png" alt="badje" /></li>
                        <li><img src="https://wpkixx.com/html/socimo/images/badges/badge7.png" alt="badje" /></li>
                        <li><img src="https://wpkixx.com/html/socimo/images/badges/badge8.png" alt="badje" /></li>
                    </ul>
                </div>
                <div className={c.links}>
                    <span className={c1.header}>Share profile</span>
                    <div>
                        <a href='#' className={c.facebook}>
                            <Svg name='facebook' />
                        </a>
                        <a href='#' className={c.pinterest}>
                            <Svg name='pinterest' />
                        </a>
                        <a href='#' className={c.instagram}>
                            <Svg name='instagram' />
                        </a>
                        <a href='#' className={c.twitter}>
                            <Svg name='twitter' />
                        </a>
                        <a href='#' className={c.googlePlus}>
                            <Svg name='googlePlus' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;