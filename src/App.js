import React, {Component} from 'react';
import CardList from './CardList';
import Scroll from './Scroll';
import './Card.css';
import {staff} from './staff'
import SearchBox from './SearchBox';
// import {staff} from './staff';


class App extends Component{
    constructor(){
        super()
        this.state ={
            staff:staff,
            searchfield:''
        }
    }

    // To fetch data from a server

    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response=>response.json())
    //         .then(users=>this.setState({staff:users}));
    // }

    onSearchChange = (event) => {
        this.setState({searchfield:event.target.value})
        this.setState({staff:staff})
    }
    render(){
        const filteredStaffs = this.state.staff.filter(staff => {
            return staff.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
             })
             if(this.state.staff.length===0){
                 return <h1>Loading...</h1>
             }else{

        return(
                <div className='tc'>
                    <h1 className='black b '>Aimtoget Staff</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList staff={filteredStaffs}/>
                    </Scroll>
                </div> 
            );
        }
    }
    
}

export default App;