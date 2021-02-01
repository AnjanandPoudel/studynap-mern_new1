import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Main from './components/mainComponent.jsx';

class App extends Component {

  
  render(){
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
  
}

export default App;
