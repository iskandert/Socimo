import Svg from '../../../sprite'
import c from './Stars.module.css'

let rateClass = (num, rate) => {
    if (+num <= rate) {
        return "gold"
    }
    return "black"
}

const Stars = (props) => {
    return (
        <ul className={c.stars}>
            <li className={c[rateClass(1, props.rate)]}>
                <Svg name='star' />
            </li>
            <li className={c[rateClass(2, props.rate)]}>
                <Svg name='star' />
            </li>
            <li className={c[rateClass(3, props.rate)]}>
                <Svg name='star' />
            </li>
            <li className={c[rateClass(4, props.rate)]}>
                <Svg name='star' />
            </li>
            <li className={c[rateClass(5, props.rate)]}>
                <Svg name='star' />
            </li>
        </ul>
    )
}

export default Stars;


