import React, {
  Component
} from 'react';

let defaultStyle = {
  color: '#fff'
}

class Aggregate extends Component {
  render() {
    return (
      <div style={{ ...defaultStyle, width: "50%", display: "inline-block" }}>
        <h2>Number Text</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={{ defaultStyle }}>
        <img />
        <input type="text" />
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style={{ ...defaultStyle, display: "inline-block", width: "25%" }}>
        <img />
        <h3>Playlist name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      < div className="App" style={{ ...defaultStyle, backgroundColor: "black" }} >
        <h1 style={{ 'font-size': '54px' }}>Title</h1>
        <Aggregate />
        <Aggregate />
        <Filter />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
      </div >
    );
  }
}


export default App;