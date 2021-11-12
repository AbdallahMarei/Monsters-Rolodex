import { Component } from 'react';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';
import { CardList } from './components/card-list/card-list.component';



class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ""
    }
  }

  async componentDidMount(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
    this.setState({monsters: data});
  }


  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }


  render() {
    const {monsters,searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="monster search" handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters}>
        </CardList>
      </div>
    );
  }
}

export default App;
