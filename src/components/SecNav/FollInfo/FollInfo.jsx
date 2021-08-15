import Stars from "../Stars/Stars";
import c from './FollInfo.module.css';

const FollInfo = (props) => {
    return (
        <div className={c.follInfo}>
            <div>
                <span>Followers: {props.count}</span>
                <Stars rate={props.rate} />
            </div>
        </div>
    )
}

export default FollInfo;