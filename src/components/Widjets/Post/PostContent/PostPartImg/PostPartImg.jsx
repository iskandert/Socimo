import c from '../PostContent.module.css';

const PostPartImg = (props) => {
    if (props.data.length > 0) {
        if (props.data.length === 1) {
            if (props.link) {
                return (
                    <a href={props.link} className={props.className}>
                        <img src={props.data[0]} alt={props.className} />
                    </a>
                )
            }
            return (
                <div className={props.className} >
                    <img src={props.data[0]} alt={props.className} />
                </div>
            )
        } else {
            const lengthImg = props.data.length;
            const captures = props.data.slice(0, 5).map((item, ind) => {
                const n = lengthImg - 5;
                let more;
                if (n > 0 && ind === 4) {
                    more = (
                        <div>
                            <span>{`${lengthImg - 5}+`}</span>
                        </div>
                    )
                }
                return (
                    <div className={c.imgCont}>
                        <img className={c.img} src={item} alt={props.className} />
                        {more}
                    </div>
                    // <div className={c.img} style={{ backgroundImage: `url(${item})` }}>
                    //     {more}
                    // </div>
                )
            })
            let count;
            switch (lengthImg) {
                case 2:
                    count = c.two;
                    break;
                case 3:
                    count = c.three;
                    break;
                case 4:
                    count = c.four;
                    break;
                case 5:
                    count = c.five;
                    break;
                default:
                    count = `${c.five} ${c.many}`
            }
            return (
                <div className={`${props.className} ${count}`}>
                    {captures}
                </div>
            )
        }
    }
    return null;
}

export default PostPartImg;