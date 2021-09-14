import c from '../PostContent.module.css';

const PostPartText = (props) => {
    if (props.data.length > 0) {
        if (props.className === c.link) {
            return (
                <a href={props.data} className={props.className}>{props.data}</a>
            )
        }
        return (
            <div className={props.className}>{props.data}</div>
        )
    }
    return null;
}

export default PostPartText;