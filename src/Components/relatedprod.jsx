import React, { Component } from 'react';
import Footer from './footer';
import Logo from './img/pic.jpeg';
import indecouponpage1 from './indcouponpage1';
import relatedprod from './relatedprod.scss';



export default class Relatedprod extends Component {

    render() {
        return(
      <div>      
        
    <div className="relatedprodproblem">
    <div><img className="relatedprodimg " src = {this.props.img} /></div>
            
    <div className="relatedname">{this.props.relatedname}</div> 

<div className="relatedbusiness">{this.props.relatedbusiness}</div>
<div>      
        <div class="relatedstars" data-rating="3">
            <span className="rstar">&nbsp;</span>
            <span className="rstar">&nbsp;</span>
            <span className="rstar">&nbsp;</span>
            <span className="rstar">&nbsp;</span>
            <span className="rstar">&nbsp;</span>
        </div>

 <p className="relateddiscount">{this.props.relateddiscount}% off</p>
  
<button className="btn btn-default relateReservebtn" onClick={this.props.button}>Reserve</button>
    </div>


   
   </div>
   </div>
        )   
    }
}