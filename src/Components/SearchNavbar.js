import React, {useState} from 'react';
//components
import CustomButton from './CustomButton';

const SearchNavbar = () => {

    //state for user's input
    const [input, setInput] = useState('');

    // button click handler
    const handleBtnClick = (e) => {
        e.preventDefault();
        console.log('You clicked the search button');
        setInput('');
    }

    return <nav className='navbar-search'>
        <ul >
            <li><a href="#">All Deals</a></li>
            <li><a href="#">Deals By Category</a></li>
            <li><a href="#">Deals By Price</a></li>
            <li><a href="#">Recent Viewed</a></li>
        </ul>
        <form className='search-form'>
            <input
                className='input-address'
                type="text"
                value={input}
                placeholder="Enter your address to find deals"
                onChange={(e) => setInput(e.target.value)} />
            <CustomButton type='submit' handleBtnClick={handleBtnClick}>Search</CustomButton>
        </form>
    </nav>
}

export default SearchNavbar;