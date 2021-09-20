import c from './SecGroups.module.css';
import c1 from '../Widjets/Widjet.module.css';
import Block from '../Widjets/Block/Block';
import GroupsList from './GroupsList/GroupsList';
import Recommends from '../Widjets/Recommends/Recommends';
import GroupsPaginationContainer from './GroupsPagination/GroupsPaginationContainer';
import GroupsListContainer from './GroupsList/GroupListContainer';

const SecGroups = (props) => {
    return (
        <div className={c.secGroups}>
            <main className={c.main}>
                <GroupsListContainer
                // state={props.state}
                />
                <Recommends />

            </main>
            <aside className={c.aside}>
                <div className={c.blocksWrap}>
                    <Block />
                    <Block />
                </div>
                <div className={c.blocksWrap}>
                    <Block />
                    <Block />
                </div>
            </aside>
        </div>
    )
}

export default SecGroups;