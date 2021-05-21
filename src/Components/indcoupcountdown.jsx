import React, { Component } from 'react';
import Scss from './countdown.scss';
import Countdown from 'react-countdown';

export default class CustomCountdown extends Component {

     renderer = ({ days, hours, minutes, seconds }) => {
        return <div>
           <div className="beforedealends2">BEFORE THE DEAL ENDS</div> 
            <span className="timingdays">{days}</span>
            <span className="timingdays">{hours}</span>
            <span className="timingdays">{minutes}</span>
            <span className="timingdays">{seconds}</span>
          
            <div className="initialgroup">
            <span className="initial1"> DAYS</span>
            <span className="initial2"> HOURS </span>
            <span className="initial3"> MINUTES </span>
            <span className="initial4"> SECONDS </span>
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