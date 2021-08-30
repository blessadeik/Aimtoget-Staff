import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {staff} from './staff';


class App extends Component{
    constructor(){
        super()
        this.state ={
            staff:staff,
            searchfield:''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield:event.target.value})
        
       
    }
    render(){
        const filteredStaffs = this.state.staff.filter(staff => {
            return staff.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
             })
        return(
                <div className='tc'>
                    <h1 className='black bodoni b'>Aimtoget Staff</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <CardList staff={filteredStaffs}/>
                </div> 
            );
    }
    
}

export default App;