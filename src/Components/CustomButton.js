import React from 'react';

const CustomButton = (props) => { 
    return <button className='custom-btn' onClick={props.handleBtnClick}>{props.children}</button>;
}

export default CustomButton;