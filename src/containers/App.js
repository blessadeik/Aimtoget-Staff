import React, {Component} from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import '../components/Card.css';
import {staff} from '../staff'
import SearchBox from '../components/SearchBox';
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
        const{staff, searchfield} = this.state;
        const filteredStaffs = staff.filter(staff => {
            return staff.name.toLowerCase().includes(searchfield.toLowerCase());
             })

             return !staff.length ?
                  <h1>Loading...</h1> :
    (
                <div className='tc'>
                    <h1 className='black b '>Aimtoget Staff</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                        <CardList staff={filteredStaffs}/>
                        </ErrorBoundry>
                    </Scroll>
                </div> 
            );
        }
    }  

export default App;