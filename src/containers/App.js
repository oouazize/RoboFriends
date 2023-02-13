import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
        this.updateInput = this.updateInput.bind(this);
    }
    
    updateInput(e) {
        this.setState({searchfield: e.target.value});
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
    }

    render () {
        const { robots, searchfield } = this.state;
        const search = robots.filter(robot => robot.name.toLowerCase().includes(searchfield.toLowerCase()));
        return (
            <div>
                <div>
                    <h1>RoboFriends</h1>
                    <SearchBox SearchChange={this.updateInput}/>
                </div>
                <Scroll>
                    <CardList robots={search} />
                </Scroll>
            </div>
        );
    }
}

export default App;