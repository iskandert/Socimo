import c from './GroupsList.module.css';
import c1 from '../../Widjets/Widjet.module.css';
import ReferExemp from '../../Widjets/ReferExemp/ReferExemp';
import ReferExempContainer from '../../Widjets/ReferExemp/ReferExempContainer';
import GroupsPaginationContainer from '../GroupsPagination/GroupsPaginationContainer';

const GroupsList = (props) => {
    // let interval = [0, 15]; //1
    // let interval = [0, 30]; //1 more
    // let interval = [15, 30]; //2
    // let interval = [45, 60]; //4
    // let interval = [60, 75]; //5
    // let interval = [75, 90]; //6
    // let interval = [90, 105]; //7
    // let interval = [105, 120]; //7
    // let interval = [120, 135]; //9
    // let interval = [135, 150]; //10
    let interval = props.interval;
    let count = props.groupsData.length;
    // debugger;
    let groupsElements = props.groupsData.slice(interval[0], interval[1]).map((item) => {
        return (
            <ReferExempContainer data={item} />
        )
    });
    return (
        <div className={c1.widjet}>
            <span className={c1.header1}>Groups</span>
            <div className={c.groupsList}>
                {groupsElements}
            </div>
            <div className={c.pagination}>
                <GroupsPaginationContainer />
            </div>
        </div>
    )
}

export default GroupsList;