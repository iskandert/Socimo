import c from './Profile.module.css';
import c1 from '../SecContent.module.css';

const Profile = () => {
    return (
        <div className={c.info}>
            <div className={c.banner}>
                <img src="https://wpkixx.com/html/socimo/images/resources/profile-banner.jpg" alt="background" />
                <div className={c.avatar}>
                    <img src="https://wpkixx.com/html/socimo/images/resources/user.jpg" alt="avatar" />
                </div>
            </div>
            <div className={c.nav}>
                Tolstikh Alexander
            </div>
            <div className={`${c.about} ${c1.widjet}`}>
                About me
            </div>
        </div>
    );
}

export default Profile;