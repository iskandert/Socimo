import c from './Profile.module.css';
import c1 from '../SecContent.module.css';

const Profile = () => {
    return (
        <div className={c.info}>
            <div className={c.img}>
                <div className={c.avatar}></div>
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