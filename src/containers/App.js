import React, { Component } from 'react';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import Scroll from '../component/Scroll';
import ErrorBoundry from '../component/ErrorBoundry';
import './App.css';

//STATE describes app and changes value of searchbox and input
//app owns state which can change robots - love syntax
//checkout react.component lifecycle hooks
class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users => this.setState({ robots: users}));
    }

    //when you make your own methods use error functions
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }
    render() {
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
//if you had hundreds/thousands of users you can do this to speed reaction time up
        if (this.state.robots.length === 0) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>

                    </Scroll>
                </div>
            );
        }
    }
}

export default App;
