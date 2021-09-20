import c from './ReferExemp.module.css';
import c1 from '../Widjet.module.css';

const ReferExemp = (props) => {
    // let state = props.state;
    let status;
    props.joined ? status = 'Leave The Group' : status = 'Join The Group';
    let setClass = () => {
        if (props.joined) return `${c.referExemp} ${c.joined}`;
        return c.referExemp;
    }
    return (
        <div className={setClass()}>
            <img src={props.avatar} alt="avatar" />
            <p>
                <a href='#'>{props.name}</a>
                <span>{`${props.membersCount} Members`}</span>
            </p>
            <button
                type="submit"
                onClick={props.onJoined}
            >
                {status}
            </button>
        </div>
    )
}

export default ReferExemp;