import c from './Pagination.module.css';
import c1 from '../Widjet.module.css';
import Svg from '../../../sprite';

const Pagination = (props) => {
    let countPages = props.count;
    let interval = props.interval;
    let l = Math.ceil(countPages / (interval[1] - interval[0]));
    let activePage = Math.round(props.interval[1] / (interval[1] - interval[0]));
    let arrNum = [];
    let pagesElements;
    if (l <= 1) {
        arrNum.push(1);
    } else {
        if (l <= 6) {
            for (let i = 1; i <= l; i++) {
                arrNum.push(i);
            }
        } else {
            if (activePage <= 4) {
                arrNum.push(1);
                for (let i = 2; i <= 5; i++) {
                    arrNum.push(i);
                }
                arrNum.push('....');
                arrNum.push(l);
            } else if ((l - activePage) <= 3) {
                arrNum.push(1);
                arrNum.push('....');
                for (let i = l - 4; i < l; i++) {
                    arrNum.push(i);
                }
                arrNum.push(l);
            } else {
                arrNum.push(1);
                arrNum.push('....');
                let setsNum = [];
                let countNum = l - 3 * 2;
                let countSets = Math.ceil((countNum - 2) / (5 - 2));
                // console.log(countSets);
                for (let i = 4; i <= 4 + 3 * (countSets - 1); i += 3) {
                    setsNum.push([i, i + 4]);
                }
                setsNum.forEach((item) => {
                    if (activePage > item[0] && activePage < item[1]) {
                        for (let i = item[0]; i <= item[1]; i++) {
                            arrNum.push(i);
                        }
                    }
                })
                arrNum.push('....');
                arrNum.push(l);
            }
        }
    }
    pagesElements = arrNum.map((item) => {
        if (typeof item === 'number') {
            let numClass;
            item === activePage ? numClass = c.activePage : numClass = c.numbers;
            return (
                <li
                    className={numClass}
                    key={item}
                    // numValue={item}
                    onClick={() => props.onChangePage(item)}
                >
                    {/* <span>{`${item}`}</span> */}
                    <span>{item}</span>
                </li>
            )
        };
        return (
            <li className={c.dots}>
                <span>{item}</span>
            </li>
        )
    });

    return (
        <ul className={c.pagination}>
            <li
                className={c.showLess}
                onClick={() => {
                    props.showLess();
                    props.onChangePage(activePage);
                }}
            >
                <Svg name='scrollUp' />
                <span>Show Less</span>
            </li>
            <li
                className={c.arrows}
                onClick={() => props.onShiftPage(0)}
            >
                <Svg name='scrollUp' />
            </li>
            {pagesElements}
            <li
                className={c.arrows}
                onClick={() => props.onShiftPage(1)}
            >
                <Svg name='scrollUp' />
            </li>
            <li
                className={c.showMore}
                onClick={() => {
                    props.showMore();
                    props.onChangePage(activePage);
                }}
            >
                <span>Show More</span>
                <Svg name='scrollUp' />
            </li>
        </ul>
    )
}

export default Pagination;