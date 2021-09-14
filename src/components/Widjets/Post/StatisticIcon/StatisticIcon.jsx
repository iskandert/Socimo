import c from '../Post.module.css';
import Svg from '../../../../sprite';

const StatisticIcon = (props) => {
    let className, name;
    let num = props.num;
    switch (num) {
        case 0:
            className = c.views;
            name = 'eye';
            break;
        case 1:
            className = c.comments;
            name = 'messages';
            break;
        case 2:
            className = c.rate;
            name = 'rate';
            break;
        case 3:
            className = c.share;
            name = 'share';
            break;
    }
    return (
        <div className={className}>
            <Svg name={name} />
            <ins>{props.statistic}</ins>
        </div>
    )
}

export default StatisticIcon;