import React, { Component } from 'react';
import Footer from './footer';
import Logo from './img/pic.jpeg';
import Scss from './indcouponpage1.scss';
import Countdown from './indcoupcountdown.jsx';
import Countdwon from './countdown.scss';
import MainImage from './img/main-image.jpeg';
import RelateDeal from './relatedprod.jsx';
import Relatedprod from './relatedprod.scss';
import Indcustreview from './indcustreview.jsx'



export default class Indcouponpage1 extends Component {

render() {
    return (
        <div>
            <a className="indcoupback" href= "#"> &lt; Back </a>
          
        <div className="datepage2"> <Countdown dealends={Date.parse("30 May 2021 12:28")}/>
        </div>
        <hr className="indcoupline">
                    </hr>
            {/* <div className="container"> */}
        <img className="mainpic"  src={ MainImage } />

            <div className="titleindcoup">Small Plate Sale!</div>  

            <i class="fa fa-share-alt" aria-hidden="true"></i> 

            <div className="indaddress">8956 Tiger Lane, San Antonio, Tx 77987</div>

            <p className="indtextinfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt imperdiet commodo. Fusce varius purus eu velit accumsan, sed tristique quam sollicitudin."Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt imperdiet commodo. </p>

            <div className="indpercentoff">50% OFF</div>

            <div className="indprice">$11.99</div>

            <div className="indorigprice">original price $23.99</div>

            <button className="btn btn-default indreservebtn" onClick={this.props.button}>Reserve</button>

           

        <div className="xmiles"> "X" miles from your location</div>
            <hr className="indcoupline2">
                    </hr>

            <div className="vl1"></div>

           

           <vl className="indcoupvl"></vl>

           <a className= "followLC" href="#">Follow on LC</a>

           <div className="indbussiness vl1"><h6 className="indabout">ABOUT</h6>Valley Dines Restaurant</div>
         

           <p className="indinfobusiness">"Frito ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt imperdiet commodo. Fusce varius purus eu velit accumsan, sed tristique quam sollicitudin.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt imperdiet commodo. Fusce varius purus eu velit accumsan, sed tristique quam sollicitudin."Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt imperdiet commodo. accumsan, sed tristique quam sollicitudin.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt imperdiet commodo. Fusce varius purus eu velit accumsan, sed tristique quam sollicitudin."Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt imperdiet commodo."</p>

           <hr className="indcoupline3">
                                   </hr>


        <div className="relproducts">RELATED PRODUCTS</div>

    <div className="row">
        <div className="col-6 firstrecommended">
       <div> <RelateDeal  img="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&w=1000&q=80" relatedname="Group Dinner" relatedbusiness="The Gathering"  relateddiscount="25"/> </div>

       <div> <RelateDeal  img="https://upload.wikimedia.org/wikipedia/commons/5/59/Finca_Solano_Tempranillo_Crianza.jpg" relatedname="By the Glass" relatedbusiness=" Wine Bar"  relateddiscount="Bottle BOGO"/> </div>
       </div>

        <div className="col-6 secondrecommended">
       <div> <RelateDeal  img="https://hips.hearstapps.com/del.h-cdn.co/assets/17/38/1506010503-spinach-lasagna-delish.jpg" relatedname="Meatless Menu" relatedbusiness="Burrito Bob's"  relateddiscount="20"/> </div>

       <div> <RelateDeal  img="https://contenthandler.azureedge.net/cont/136/1/1600/0/farm-banner-box-lx.jpg" relatedname="Fresh Fruit Sale" relatedbusiness="Farmhouse" relateddiscount="60"/> </div>

    </div>
    </div>
    <hr className="indcoupline4">
                         </hr>

                
                         <div className="indreviewmain">  

<div> <Indcustreview img = "https://images.snapwi.re/f206/53cd64fa6fe58cbf0dd6e6c8.w800.jpg"  custreviewname="EMMERSON GIETZ" reviewstate="Cras tincidunt imperdiet commodo. Fusce varius purus eu velit accumsan, sed tristique quam sollicitudin.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt imperdiet commodo." /></div>

<div> <Indcustreview img = "https://patch.com/img/cdn20/users/22844250/20200227/044853/styles/patch_image/public/michelleheadshot2020a___27164310951.jpg"  custreviewname="RACHEL OHN" reviewstate="Cras tincidunt imperdiet commodo. Fusce varius purus eu velit accumsan, sed tristique quam sollicitudin.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt imperdiet commodo." /></div>

<div> <Indcustreview img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYsFMtuo7mTv4q8i_C0EZwO_Hj91kDWqjjKA&usqp=CAU"  custreviewname="JASMAIN SLAMENT" reviewstate="Cras tincidunt imperdiet commodo. Fusce varius purus eu velit accumsan, sed tristique quam sollicitudin.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt imperdiet commodo." /></div>

<div> <Indcustreview img = "https://image.shutterstock.com/image-photo/people-lifestyle-indoor-shot-young-260nw-492175654.jpg"  custreviewname="RAY BLIGH" reviewstate="Cras tincidunt imperdiet commodo. Fusce varius purus eu velit accumsan, sed tristique quam sollicitudin.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt imperdiet commodo." /></div>

<div> <Indcustreview img = "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"  custreviewname="SAMANTHA TOWNSAN" reviewstate="Cras tincidunt imperdiet commodo. Fusce varius purus eu velit accumsan, sed tristique quam sollicitudin.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt imperdiet commodo." /></div>


</div>             
                  
                  
           
  

        <div> <Footer /> 
        </div>
        </div>
    )
}


}

