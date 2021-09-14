import c from './PostContent.module.css';
import PostPartImg from './PostPartImg/PostPartImg';
import PostPartText from './PostPartText/PostPartText';

const PostContent = (props) => {
    const content = props.content;
    return (
        <div className={c.content}>
            <PostPartText className={c.link} data={content.link} />
            <PostPartImg className={c.captureLink} data={content.captureLink} link={content.link} />
            <PostPartImg className={c.pictures} data={content.pictures} />
            <PostPartText className={c.header} data={content.header} />
            <PostPartText className={c.text} data={content.text} />
        </div>
    )
}

export default PostContent;