import c from './Post.module.css';
import c1 from '../Widjet.module.css';
import Svg from '../../../sprite';
import PostContent from './PostContent/PostContent';
import StatisticIcon from './StatisticIcon/StatisticIcon';

const Post = (props) => {
    const content = props.content;
    const statistic = props.statistic.split(', ');
    const indicators = statistic.map((item, ind) => {
        return <StatisticIcon statistic={item} num={ind} />;
    });

    return (
        <div className={`${c.post} ${c1.widjet}`}>
            <div className={c.header}>
                <figure className={c.ava}>
                    <img src={props.avatar} alt="avatar" />
                </figure>
                <div className={c.info}>
                    <ins>
                        <a href="#">{props.name}</a>
                        {props.action}
                    </ins>
                    <span>
                        <Svg name='globus' />
                        Published: {props.date}
                    </span>
                </div>
                <div className={c1.more}>
                    <Svg name='more' />
                </div>
            </div>
            <PostContent content={content} />
            <div className={c.footer}>
                <div className={c.statistic}>
                    <div className={c.indicators}>
                        {indicators}
                    </div>
                    <div className={c.reply}>
                        <span>Reply</span>
                        <Svg name='reply' />
                    </div>
                </div>
                <div className={c.activity}>
                    <div className={c.bttns}>
                        <button>
                            <Svg name='like' />
                            <span>Like</span>
                        </button>
                        <button>
                            <Svg name='comment' />
                            <span>Comment</span>
                        </button>
                        <button>
                            <Svg name='repost' />
                            <span>Share</span>
                        </button>
                    </div>
                    <div className={c.reactions}>
                        <ul>
                            <li><div className={c.L}>
                                <img src="https://wpkixx.com/html/socimo/images/smiles/thumb.png" alt="smile" />
                            </div></li>
                            <li><div className={c.H}>
                                <img src="https://wpkixx.com/html/socimo/images/smiles/heart.png" alt="smile" />
                            </div></li>
                            <li><div className={c.S}>
                                <img src="https://wpkixx.com/html/socimo/images/smiles/smile.png" alt="smile" />
                            </div></li>
                            <li><div className={c.C}>
                                <img src="https://wpkixx.com/html/socimo/images/smiles/weep.png" alt="smile" />
                            </div></li>
                        </ul>
                        <span>10+</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;