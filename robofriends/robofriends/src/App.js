import React, {Component} from 'react';
import CardList from './CardList.js';
import {robots} from './robots';
import SearchBox from './SearchBox'
import './App.css'


class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchField: ''
        }
    }

    onSearchChange = (event) => {
        // To actually set the state so constructor will activate the searchfield properly
        this.setState({searchField: event.target.value})

    }

    render() {
        const filteredRobots = this.state.robots.filter(({name}) => {
            //If robots name (lower cased) includes the searchfield then return matching
            return name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        console.log(filteredRobots);
        return (
            <div>
                <div className={'tc'}>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <CardList robots={filteredRobots}/>
                </div>
            </div>
        );
    }
}

export default App;

//The above is now constantly changing so now it needs to communicate with 'filteredRobots'

// How it works:
// 1. App component with two states - 'robots' and 'searchField'. Any component with state uses 'class' syntax
// 2. Virtual DOM collects entire state which React uses to render and pass them down as props to the components
// 3. Components are pure functions so they render. App will always look the same
// 4. App only changes the state
// 5. Pass down things as props so passed down 'onSearchChange' to the 'SearchBox'
// 6. Every time there's an 'onChange' on the input, the SearchBox communicates with App.js saying "there was a change",
// telling it to run the onSearchChange function
// 7. Function runs and updates the state of searchField to whatever is typed
// 8. Info in searchbox can communicate with cardlist and tell it to filter robot state
