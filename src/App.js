import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      inputText : "",
      msg       : ""
    }
  }

  componentDidMount() {
    // 接受domain2返回数据
    window.addEventListener('message', this.getMessage , false);
  }

  componentWillUnmount() {
    window.removeEventListener('mesage', this.getMessage)
  } 

  getMessage = (e) => {
    this.setState({ msg: `${e.data}, from parent page` })
    console.log('OK response', e.data)
  }

  buttonClick = (e) => {
    let data = {
      title: "title",
      body: "body",
      from: "newsFeed or webChat"
    }
    window.parent.postMessage( JSON.stringify(data), "http://localhost:8000" )
    //window.parent.postMessage( JSON.stringify(data), "http://10.201.102.15:20001" )
  }

  render() {
    return (
      <div className="App">
        <input type='text' onChange={ event=>{this.setState({inputText: event.target.value})} }/>
        <div style={{color: 'red'}}> {this.state.msg} </div>
        <button onClick={ this.buttonClick } >send</button>
        {/* <button>send</button> */}
      </div>
    );
  }
  
}

export default App;
