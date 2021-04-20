import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import s from '../../pages/HistoryPage/HistoryPage.module.css';
import DropDown from '../drop-down/DropDown';
const ItemComponent = (props) => {
    const weekNumber = Number(props.match.params.weekNumber);

    useEffect(() => {
        props.getOneWeek(weekNumber)
    }, );

    let items;
    if (Object.keys(props.week).length!==0) {

        items = props.dayOfWeek.map(dayWeek => {
            if(Object.keys(props.week).indexOf(dayWeek) === -1){
                return (
                    <li key={dayWeek} className={s.item}>
                        <span className={s.dayAndMonth}>{dayWeek}</span>
                    </li>
                ) 
            }
            const values = props.week[dayWeek];
            let allValue = {};
            Object.keys(values).forEach(item => {
                
                const value = Object.values(values[item])[0]
                
                allValue[item] = value

            })
            return (
                <li  className={s.item} >
                    <span className={s.dayAndMonth}>{dayWeek}</span>
                    <DropDown className={s.dropdown} values ={{...allValue}} />
                </li>
            )
        })
    } else {
        return <div>Pusto</div>
    }
    console.log(items)

    return (
        <div className={s.HistoryComponent}>
            <div className={s}>Week number : | Start week :  | End week : </div>
            <ul className={s.listItems}>
                {items}
            </ul>
        </div>

    )

}
export default withRouter(ItemComponent)