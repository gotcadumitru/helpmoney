import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { calcSaptamanal } from '../../calc';
import DropDown from '../../components/drop-down/DropDown';
import s from './HistoryPage.module.css'

const History = (props) => {
    useEffect(() => {
        props.getWeeks()
    }, )

    const dayWeekYear = [
{
    weekNumber: 1,
    weekStart:'January, 4, 2021',
    weekEnd:'January, 10, 2021'
},
{
    weekNumber: 2,
    weekStart:'January, 11, 2021',
    weekEnd:'January, 17, 2021'
},
{
    weekNumber: 3,
    weekStart:'January, 18, 2021',
    weekEnd:'January, 24, 2021'
},
{
    weekNumber: 4,
    weekStart:'January, 25, 2021',
    weekEnd:'January, 31, 2021'
},
{
    weekNumber: 5,
    weekStart:'February, 1, 2021',
    weekEnd:'February, 7, 2021'
},
{
    weekNumber: 6,
    weekStart:'February, 8, 2021',
    weekEnd:'February, 14, 2021'
},
{
    weekNumber: 7,
    weekStart:'February, 15, 2021',
    weekEnd:'February, 21, 2021'
},
{
    weekNumber: 8,
    weekStart:'February, 22, 2021',
    weekEnd:'February, 28, 2021'
},
{
    weekNumber: 9,
    weekStart:'March, 1, 2021',
    weekEnd:'March, 7, 2021'
},
{
    weekNumber: 10,
    weekStart:'March, 8, 2021',
    weekEnd:'March, 14, 2021'
},
{
    weekNumber: 11,
    weekStart:'March, 15, 2021',
    weekEnd:'March, 21, 2021'
},
{
    weekNumber: 12,
    weekStart:'March, 22, 2021',
    weekEnd:'March, 28, 2021'
},
{
    weekNumber: 13,
    weekStart:'March, 29, 2021',
    weekEnd:'April, 4, 2021'
},
{
    weekNumber: 14,
    weekStart:'April, 5, 2021',
    weekEnd:'April, 11, 2021'
},
{
    weekNumber: 15,
    weekStart:'April, 12, 2021',
    weekEnd:'April, 18, 2021'
},
{
    weekNumber: 16,
    weekStart:'April, 19, 2021',
    weekEnd:'April, 25, 2021'
},
{
    weekNumber: 17,
    weekStart:'April, 26, 2021',
    weekEnd:'May, 2, 2021'
},
{
    weekNumber: 18,
    weekStart:'May, 3, 2021',
    weekEnd:'May, 9, 2021'
},
{
    weekNumber: 19,
    weekStart:'May, 10, 2021',
    weekEnd:'May, 16, 2021'
},
{
    weekNumber: 20,
    weekStart:'May, 17, 2021',
    weekEnd:'May, 23, 2021'
},
{
    weekNumber: 21,
    weekStart:'May, 24, 2021',
    weekEnd:'May, 30, 2021'
},
{
    weekNumber: 22,
    weekStart:'May, 31, 2021',
    weekEnd:'June, 6, 2021'
},
{
    weekNumber: 23,
    weekStart:'June, 7, 2021',
    weekEnd:'June, 13, 2021'
},
{
    weekNumber: 24,
    weekStart:'June, 14, 2021',
    weekEnd:'June, 20, 2021'
},
{
    weekNumber: 25,
    weekStart:'June, 21, 2021',
    weekEnd:'June, 27, 2021'
},
{
    weekNumber: 26,
    weekStart:'June, 28, 2021',
    weekEnd:'July, 4, 2021'
},
{
    weekNumber: 27,
    weekStart:'July, 5, 2021',
    weekEnd:'July, 11, 2021'
},
{
    weekNumber: 28,
    weekStart:'July, 12, 2021',
    weekEnd:'July, 18, 2021'
},
{
    weekNumber: 29,
    weekStart:'July, 19, 2021',
    weekEnd:'July, 25, 2021'
},
{
    weekNumber: 30,
    weekStart:'July, 26, 2021',
    weekEnd:'August, 1, 2021'
},
{
    weekNumber: 31,
    weekStart:'August, 2, 2021',
    weekEnd:'August, 8, 2021'
},
{
    weekNumber: 32,
    weekStart:'August, 9, 2021',
    weekEnd:'August, 15, 2021'
},
{
    weekNumber: 33,
    weekStart:'August, 16, 2021',
    weekEnd:'August, 22, 2021'
},
{
    weekNumber: 34,
    weekStart:'August, 23, 2021',
    weekEnd:'August, 29, 2021'
},
{
    weekNumber: 35,
    weekStart:'August, 30, 2021',
    weekEnd:'September, 5, 2021'
},
{
    weekNumber: 36,
    weekStart:'September, 6, 2021',
    weekEnd:'September, 12, 2021'
},
{
    weekNumber: 37,
    weekStart:'September, 13, 2021',
    weekEnd:'September, 19, 2021'
},
{
    weekNumber: 38,
    weekStart:'September, 20, 2021',
    weekEnd:'September, 26, 2021'
},
{
    weekNumber: 39,
    weekStart:'September, 27, 2021',
    weekEnd:'October, 3, 2021'
},
{
    weekNumber: 40,
    weekStart:'October, 4, 2021',
    weekEnd:'October, 10, 2021'
},
{
    weekNumber: 41,
    weekStart:'October, 11, 2021',
    weekEnd:'October, 17, 2021'
},
{
    weekNumber: 42,
    weekStart:'October, 18, 2021',
    weekEnd:'October, 24, 2021'
},
{
    weekNumber: 43,
    weekStart:'October, 25, 2021',
    weekEnd:'October, 31, 2021'
},
{
    weekNumber: 44,
    weekStart:'November, 1, 2021',
    weekEnd:'November, 7, 2021'
},
{
    weekNumber: 45,
    weekStart:'November, 8, 2021',
    weekEnd:'November, 14, 2021'
},
{
    weekNumber: 46,
    weekStart:'November, 15, 2021',
    weekEnd:'November, 21, 2021'
},
{
    weekNumber: 47,
    weekStart:'November, 22, 2021',
    weekEnd:'November, 28, 2021'
},
{
    weekNumber: 48,
    weekStart:'November, 29, 2021',
    weekEnd:'December, 5, 2021'
},
{
    weekNumber: 49,
    weekStart:'December, 6, 2021',
    weekEnd:'December, 12, 2021'
},
{
    weekNumber: 50,
    weekStart:'December, 13, 2021',
    weekEnd:'December, 19, 2021'
},
{
    weekNumber: 51,
    weekStart:'December, 20, 2021',
    weekEnd:'December, 26, 2021'
},
{
    weekNumber: 52,
    weekStart:'December, 27, 2021',
    weekEnd:'January, 2, 2022'
},
    ]
    const dayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const items = Object.keys(props.weeks).map(item =>{
        
        let startValues = 0;
        for(let i=0; i<dayOfWeek.length; i++){
            if(Object.keys(props.weeks[item]).indexOf(dayOfWeek[i])!==-1){
                startValues =  Number(Object.values(props.weeks[item][dayOfWeek[i]].startValues)[0]);
                break
            }
        }
        let endValues = 0;
        for(let i=dayOfWeek.length-1; i>=0; i--){
            
            if(Object.keys(props.weeks[item]).indexOf(dayOfWeek[i])!==-1){

                endValues =  Number(Object.values(props.weeks[item][dayOfWeek[i]].endValues)[0]);
                break
            }
        }
        const allGasValue =  calcSaptamanal('gasValues',props.weeks[item]);
        const allCheltValue =  calcSaptamanal('otherValues',props.weeks[item]);
        const allCheltPFAValue =  calcSaptamanal('otherValuesPFA',props.weeks[item]);
        const allCiubuk =  calcSaptamanal('ciubuc',props.weeks[item]);
        // const allCiubuk = calcCiubuk(startValues,endValues,allCheltValue,allCheltPFAValue,allGasValue);
        return (

            <Link to={`/show/${item}`}  className={s.item}>
                <span className={s.number}>{item}</span>
                <span className={s.dayAndMonth}>{dayWeekYear[item-1].weekStart}</span>
                <span className={s.dayAndMonth}>{dayWeekYear[item-1].weekEnd}</span>
                <DropDown values={
                    {
                        startValues: startValues,
                        endValues: endValues, 
                        gasValues: allGasValue,
                        otherValues: allCheltValue,
                        otherValuesPFA: allCheltPFAValue,
                        ciubuc: allCiubuk,
                    }
                } className={s.dropdown} />
            </Link>
            )
        })
        
        return (
            <div className={s.HistoryComponent}>
            <div className={s}>Week number : | Start week :  | End week : </div>
            <ul className={s.listItems}>
                {items}
            </ul>
        </div>

    )
}
export default History;

