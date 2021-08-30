import React from 'react';


const SearchBox = ({searchfield, searchChange}) =>{

    return(
        <div className='pa2 tc'>
            <input 
            className='pa2 ba b--washed-blue bg-washed-blue tc i br3 '
            type='search' 
            placeholder='search staff' 
            onChange={searchChange}
            />

        </div>
    );
}

export default SearchBox;