import React, { Component } from 'react';
import Footer from './footer';
import Logo from './img/pic.jpeg';
import Scss from './fullcoupon.scss';
import Coupondeal from './coupondeal';

  export default class Fullcoupon extends Component {

    render() {
        return (

            <div className="topsection">

            <div className = "Reserve">Reserve/ Redeem Multiple Deals at Once</div> 
            <h8>Select/Deselect All</h8>
           
            
            <div className="dropsection">
                <label className="fulldistance" for="miles">DISTANCE:</label>
                <select className="miles" id="miless">
                    <option value="number"></option>
                    <option value="number">5 miles</option>
                    <option value="number">10 miles</option>
                    <option value="number">15 miles</option>
                    <option value="number">20 miles</option>
                    <option value="number">25 miles</option>
                    <option value="number">30 miles</option>
                </select>  

                  <label className="price" for="price">SAVINGS: </label>
                <select className="price" id="price">
                    <option value="price"></option>
                    <option value="price">$1.00-$5.00</option>
                    <option value="price">$5.00-$10.00</option>
                    <option value="price">$10.00-$15.00</option>
                    <option value="price">$15.00-20.00</option>                  
                </select> 

                  <label className="deals" for="deals"> DEALS REMAINING:</label>
                <select className="deals" id="deals">
                    <option value="deal"></option>
                    <option value="deal">1-5</option>
                    <option value="deal">5-10</option>
                    <option value="deal">10-15</option>
                    <option value="deal">15-20</option>
                    <option value="deal">more than 20</option>                   
                </select>  

                <div><input type="button" class="btn btn-success redeemall" value="REDEEMED ALL SELECTED" onclick=" relocate_home()"></input></div> 

            </div>
            
                 <div><Coupondeal img="https://media.istockphoto.com/photos/spa-and-wellness-setting-picture-id856952970?k=6&m=856952970&s=612x612&w=0&h=lRirZn5e9BAqaNRJ_8yb2PJsHS7fI5AtjAKwijcwnO4=" name="Small Plate Sale" business="Valley Dines Restaurant" category={["RESTAURANT", "FULL BAR"]} paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt imperdiet commodo. Fusce varius purus eu velit accumsan, sed tristique quam sollicitudin.orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} discount="50" original="23.99" couponRemaining= "12" dealends={Date.parse("20 July 2021 12:28")}/></div>
               
                <div> <Coupondeal img="https://media.istockphoto.com/photos/spa-and-wellness-setting-picture-id856952970?k=6&m=856952970&s=612x612&w=0&h=lRirZn5e9BAqaNRJ_8yb2PJsHS7fI5AtjAKwijcwnO4=" name="Sunday Spa Special" business="Meg's Salon" category={["SPA", "NAILS"]} paragraph={["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt imperdiet commodo. Fusce varius purus eu velit accumsan, sed tristique quam sollicitudin. It has survived not only five centuries, but also the leap into electronic typesetting,in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."]} discount="20" original="12.99" couponRemaining= "9" dealends={Date.parse("13 June 2021 12:28")}/></div>

                <div> <Coupondeal img="https://media.istockphoto.com/photos/spa-and-wellness-setting-picture-id856952970?k=6&m=856952970&s=612x612&w=0&h=lRirZn5e9BAqaNRJ_8yb2PJsHS7fI5AtjAKwijcwnO4=" name="Buy 1, Get 1, Free Fries" business= "Freddies's Burgers" category={["RESTAURANT", "AMERICAN"]} paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt imperdiet commodo."} discount="10" original="15.99" couponRemaining= "1" dealends={Date.parse("27 May 2021 12:28")}/></div>

                <div> <Coupondeal img="https://media.istockphoto.com/photos/spa-and-wellness-setting-picture-id856952970?k=6&m=856952970&s=612x612&w=0&h=lRirZn5e9BAqaNRJ_8yb2PJsHS7fI5AtjAKwijcwnO4=" name="Lunch Special" business= "High Class Cafe" category={["RESTAURANT", "cafe"]} paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt imperdiet commodo.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Fusce varius purus eu velit accumsan, sed tristique quam sollicitudin."} discount= "50" original="21.99" couponRemaining= "10" dealends={Date.parse("8 June 2021 12:28")}/></div>

                <div> <Coupondeal img="https://media.istockphoto.com/photos/spa-and-wellness-setting-picture-id856952970?k=6&m=856952970&s=612x612&w=0&h=lRirZn5e9BAqaNRJ_8yb2PJsHS7fI5AtjAKwijcwnO4=" name="3Piece Suite Sale" business= "Top Guy" category={["CLOTHING", "MEN'S"]} paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt imperdiet commodo. Fusce varius purus eu velit accumsan, sed tristique quam sollicitudin."} discount= "50" original="13.99" couponRemaining= "5" dealends={Date.parse("25 June 2021 12:28")}/></div>

                <div> <Coupondeal img="https://media.istockphoto.com/photos/spa-and-wellness-setting-picture-id856952970?k=6&m=856952970&s=612x612&w=0&h=lRirZn5e9BAqaNRJ_8yb2PJsHS7fI5AtjAKwijcwnO4=" name="Half off Cuts" business= "Benny's Hair Salon" category={["Hair Salon", "Barber"]} paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt imperdiet commodo. Fusce varius purus eu velit accumsan, sed tristique quam sollicitudin."}discount="50" original="15.99" couponRemaining= "60" dealends={Date.parse("30 Oct 2021 12:28")}/></div>

                <div> <Coupondeal img="https://media.istockphoto.com/photos/spa-and-wellness-setting-picture-id856952970?k=6&m=856952970&s=612x612&w=0&h=lRirZn5e9BAqaNRJ_8yb2PJsHS7fI5AtjAKwijcwnO4=" name="Half off Cuts" business= "Benny's Hair Salon" category={["Hair Salon", "Barber"]}               paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt imperdiet commodo. Fusce varius purus eu velit accumsan, sed tristique quam sollicitudin."} discount="30" original="25.99" couponRemaining= "24" dealends={Date.parse("20 July 2021 12:28")}/></div>
              
                <div><hr className="bottomeline"></hr></div>

                {/* <div><input type="button" class="btn backbtn" value="BACK" onclick=""></input> */}

                <div><a href="#" type="button" class="btn backbtn">Back</a>

                <div className="botnumb">
                    <a href="#"> 1</a>
                    <a href="#"> 2</a>
                    <a href="#"> 3</a>
                    <a href="#"> 4</a>
                    <a href="#"> 5</a>
                    <a href="#"> > </a> 
                </div>            


            <div> <Footer /> 
</div>
</div>
</div>
      )
    }
  }
