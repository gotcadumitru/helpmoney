import React from 'react';
import './MyButton.scss';


const MyButton = ({children, isSubmitBtn, ...otherProps})=>{

    return (
        <button className={`${isSubmitBtn ? 'submit-btn' : ''} custom-button`} {...otherProps}>{children }</button>
    );
}
export default MyButton;