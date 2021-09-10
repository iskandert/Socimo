import c from './PostContent.module.css';
// import c1 from '../Widjet.module.css';
// import Svg from '../../../sprite';

const PostContent = (props) => {
    const content = props.content;
    // debugger;
    const partText = (className, data) => {
        if (data.length > 0) {
            if (className === c.link) {
                return (
                    <a href={data} className={className}>{data}</a>
                )
            }
            return (
                <div className={className}>{data}</div>
            )


        }
    }
    const partImg = (className, data, link) => {
        if (data.length > 0) {
            if (data.length === 1) {
                if (link) {
                    return (
                        <a href={link} className={className}>
                            <img src={data[0]} alt={className} />
                        </a>
                    )
                }
                return (
                    <div className={className} >
                        <img src={data[0]} alt={className} />
                    </div>
                )
            } else {
                const lengthImg = data.length;
                const captures = data.slice(0, 5).map((item, ind) => {
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
                            <img className={c.img} src={item} alt={className} />
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
                // console.log(captures);
                return (
                    <div className={`${className} ${count}`}>
                        {captures}
                    </div>
                )
            }
        }
    }
    return (
        <div className={c.content}>
            {partText(c.link, content.link)}
            {partImg(c.captureLink, content.captureLink, content.link)}
            {partImg(c.pictures, content.pictures)}
            {/* TODO .videos */}
            {partText(c.header, content.header)}
            {partText(c.text, content.text)}
        </div>
    )
}


export default PostContent;