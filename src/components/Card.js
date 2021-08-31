import React from 'react';

const Card =({name, email, id}) => {
    return(
        <div className='dib br4 ma3 grow bw2 shadow-5 tc mw5 bg-animate hover-bg-moon-gray'>
            <img alt=" Staff" src={`https://robohash.org/${id}?200x200`}/>
            <div className='tc pa3 '>
                <h3 className='bodoni black'>{name}</h3>
                <p className='avenir white hover-red'>{email}</p>
            </div>
        </div>
    );
}


export default Card;

