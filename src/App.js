import React from 'react';
import Fullcoupon from './Components/fullcoupon.jsx';
import Footer from './Components/footer.jsx';
import Indcouponpage1 from './Components/indcouponpage1.jsx';
import Relatedprod from './Components/relatedprod.jsx';









// components
import LargeNavbar from './Components/LargeNavbar';
import SearchResults from './Components/SearchResults';
// import LargeFooter from './components/LargeFooter';

const App = () => { 


  return (
<div>
    <div className="page-container">    
    <LargeNavbar />      
      <main>
        {/* <SearchResults />  */}
      </main> 
      {/* <LargeFooter /> */}
  </div>
    <div className="App">
    {/* <Fullcoupon /> */}
    <Indcouponpage1 />
  
    
</div>
</div>
  );
}

export default App;
