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
                // const captures = data.slice(0, 6).map((item) => {
                //     return (
                //         <div className={c.imgCont}>
                //             <img src={item} alt={className} />
                //         </div>
                //     )
                // })
                // let fst, snd, count;
                // console.log(captures);
                // switch (captures.length) {
                //     case 2:
                //         fst = captures[0];
                //         snd = captures[1];
                //         count = c.two;
                //     case 3:
                //         fst = captures[0];
                //         snd = [captures[1], captures[2]];
                //         count = c.three;
                //     case 4:
                //         fst = captures[0];
                //         snd = [captures[1], captures[2], captures[3]];
                //         count = c.four;
                //     default:
                //         fst = [captures[0], captures[1]];
                //         snd = [captures[2], captures[3], captures[4]];
                //         count = c.many;
                // }
                // return (
                //     <div className={`${className} ${count}`}>
                //         {/* <div className={c.square}> */}
                //         <div className={c.fst}>{fst}</div>
                //         <div className={c.snd}>{snd}</div>
                //         {/* </div> */}
                //         {/* {captures} */}
                //     </div>
                // )
                const lengthImg = data.length;
                const captures = data.slice(0, 5).map((item, ind) => {
                    const more = () => {
                        const n = lengthImg - 5;
                        if (n > 0 && ind === 4) {
                            return (
                                <div>
                                    <span>{`${lengthImg - 5}+`}</span>
                                </div>
                            )
                        }
                    };

                    return (
                        // <div className={c.imgCont}>
                        // <img src={item} alt={className} />
                        // </div>
                        <div className={c.img} style={{ backgroundImage: `url(${item})` }}>
                            {more()}
                        </div>
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
                console.log(captures);
                return (
                    <div className={`${className} ${count}`}>
                        {/* <div className={c.square}> */}
                        {/* <div className={c.fst}>{fst}</div> */}
                        {/* <div className={c.snd}>{snd}</div> */}
                        {/* </div> */}
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