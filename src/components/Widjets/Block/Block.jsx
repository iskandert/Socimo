import c from './Block.module.css';
import c1 from '../Widjet.module.css';

const Block = () => {
    return (
        <div className={`${c.block} ${c1.widjet}`}>
            <div></div>
        </div >
    );
}

export default Block;