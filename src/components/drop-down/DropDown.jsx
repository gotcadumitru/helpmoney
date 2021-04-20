import React from 'react';
import s from '../../pages/HistoryPage/HistoryPage.module.css';

const DropDown = (props)=>{
    if(props.values){

        return (
            
        <div className={s.dropdown} >
            <div>
                <div>Start with: {props.values.startValues}</div>
                <div>End with: {props.values.endValues}</div>
                <div>Ciubuk: {props.values.ciubuc}</div>
            </div>

            <div>
                <div>Cheltuieli: {props.values.otherValues}</div>
                <div>Cheltuieli PFA: {props.values.otherValuesPFA}</div>
                <div>Benz: {props.values.gasValues}</div>
            </div>
        </div>
    )
}else{return ''}
}
export default DropDown