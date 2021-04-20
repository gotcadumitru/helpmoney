import React from 'react';
import MyButton from '../../components/Button/MyButton';
import DollarIMG from '../../assets/images/kisspng-number-circle-symbol-pi-subscript-and-superscript-recharge-svg-png-icon-free-download-122719-on-5c5f3b5be1a1b4.2817777015497449879242.png'
import s from './MainPage.module.css'
import { Link } from 'react-router-dom';

const MainPage = (props)=>{
    
    return (
        <div>
                <div className={s.dollarimage}>
                <img src={DollarIMG} alt="g"/>
                </div>
            <div>
            <Link to='/newDay'><MyButton>Add New Day</MyButton></Link>
            <Link to='/show'><MyButton>Show History</MyButton></Link>
            <Link to='/other'><MyButton>Other</MyButton></Link>
            </div>
        </div>

    ) 
}
export default MainPage;