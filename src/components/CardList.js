import React from 'react';
import Card from './Card';


const CardList = ({staff}) => {
    return(
        <div>
            {
                staff.map((user, i) => {
                    return(
                        <Card 
                            key={i} 
                            id={staff[i].id} 
                            name={staff[i].name} 
                            email={staff[i].email}
                        />
                    );
                })
            }
        </div>   
    );
}

export default CardList;
