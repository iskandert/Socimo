import c from './Post.module.css';
import c1 from '../../SecContent.module.css';

const Post = (props) => {
    return (
        <div className={`${c.post} ${c1.widjet}`}>
            <div className={c.header}>
                <figure className={c.ava}>
                    <img src="http://wpkixx.com/html/socimo/images/resources/user4.jpg" alt="avatar" />
                </figure>
                <div className={c.info}>
                    <ins>
                        <a href="#">{props.name}</a>
                        {props.action}
                    </ins>
                    <span>
                        <i>O </i>
                        Published: {props.date}
                    </span>
                </div>
                <div className={c.more}><span>...</span></div>
            </div>
            <div className={c.body}></div>
            <div className={c.footer}>
                <div className={c.statistic}>
                    <div className={c.indicators}>
                        <div className={c.views}>
                            <span>
                                V
                                <ins>{props.statistic.split(', ')[0]}</ins>
                            </span>
                        </div>
                        <div className={c.comments}>
                            <span>
                                C
                                <ins>{props.statistic.split(', ')[1]}</ins>
                            </span>
                        </div>
                        <div className={c.rate}>
                            <span>
                                R
                                <ins>{props.statistic.split(', ')[2]}</ins>
                            </span>
                        </div>
                        <div className={c.share}>
                            <span>
                                S
                                <ins>{props.statistic.split(', ')[3]}</ins>
                            </span>
                        </div>
                    </div>
                    <div className={c.reply}>
                        <span>Reply
                            <ins>

                            </ins>
                        </span>
                    </div>
                </div>
                <div className={c.activity}>
                    <div className={c.bttns}>
                        <div className={c.button}>
                            <button>Like</button>
                        </div>
                        <div className={c.button}>
                            <button>Comment</button>
                        </div>
                        <div className={c.button}>
                            <button>Share</button>
                        </div>
                    </div>
                    <div className={c.reactions}>
                        <ul>
                            <li><div className={c.L}></div></li>
                            <li><div className={c.H}></div></li>
                            <li><div className={c.S}></div></li>
                            <li><div className={c.C}></div></li>
                        </ul>
                        <span>10+</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;