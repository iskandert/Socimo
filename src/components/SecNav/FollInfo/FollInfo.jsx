import Stars from "../Stars/Stars";
import c from './FollInfo.module.css';

const FollInfo = (props) => {

    return (
        <div className={c.follInfo}>
            <div>
                <span>Followers: {props.state.count}</span>
                <Stars rate={props.state.rate} />
            </div>
        </div>
    )
}

export default FollInfo;