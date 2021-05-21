import React, { Component } from 'react';
import Scss from './countdown.scss';
import Countdown from 'react-countdown';
import time from './img/time.svg';

export default class CustomCountdown extends Component {

     renderer = ({ days, hours, minutes, seconds }) => {
        return <div>
           <div className="beforedealends">BEFORE THE DEAL ENDS</div> 
           
            <img className="timeclock" src ={time}/> 

            <span className="timingdays1">{days}</span>
            <span className="timingdays">{hours}</span>
            <span className="timingdays">{minutes}</span>
            <span className="timingdays">{seconds}</span>
          
            <div className="initialgroup">
            <span className="initial1"> D </span>
            <span className="initial2"> H </span>
            <span className="initial3"> M </span>
   <span className="initial4"> S </span>   
            </div>
        </div>; 
    } 
          
    render(){
        return(
                //library countdown date count down to deal ends,   
            <Countdown
                date={Date.now() + (this.props.dealends - Date.now())}
                renderer={this.renderer}
            />

    )
  }
}