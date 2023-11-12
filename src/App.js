import './App.css';
import NavBar from './components/NavBar';
import React, { Component } from 'react';
import News from './components/News';
import  {Routes , Route} from 'react-router-dom'
export class App extends Component {
  pageSize = 15;
  render() {
    return (
      <>
        <NavBar />
        {/* <News apiKey="f54f10bd9140481996b082cfc1273f4d" pageSize={this.pageSize} Country="in" category="general"/> */}
      <Routes>
        <Route exact path='/' element={<News  apiKey="2a8790ce7fb14b2ca018b8db815a134f" pageSize={this.pageSize} Country="in" category="general" key="general"/>}/>
        <Route exact path='/health' element={<News  apiKey="f54f10bd9140481996b082cfc1273f4d" pageSize={this.pageSize} Country="in" category="health" key="health"/>}/>
        <Route exact path='/business' element={<News  apiKey="f54f10bd9140481996b082cfc1273f4d" pageSize={this.pageSize} Country="in" category="business" key="business"/>}/>
        <Route exact path='/entertainment' element={<News  apiKey="f54f10bd9140481996b082cfc1273f4d" pageSize={this.pageSize} Country="in" category="entertainment" key="entertainment"/>}/>
        <Route exact path='/science' element={<News  apiKey="f54f10bd9140481996b082cfc1273f4d" pageSize={this.pageSize} Country="in" category="science" key="science"/>}/>
        <Route exact path='/sports' element={<News  apiKey="f54f10bd9140481996b082cfc1273f4d" pageSize={this.pageSize} Country="in" category="sports" key="sports"/>}/>
        <Route exact path='/technology' element={<News  apiKey="f54f10bd9140481996b082cfc1273f4d" pageSize={this.pageSize} Country="in" category="technology" key="technology"/>}/>
      </Routes>
      </>
    )
  }
}

export default App;