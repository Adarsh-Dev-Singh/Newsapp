import './App.css';
import NavBar from './components/NavBar';
import React, { Component } from 'react';
import News from './components/News';
import { Routes, Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar';
export class App extends Component {
  pageSize = 6;
  apiKey = '2a8790ce7fb14b2ca018b8db815a134f';
  //key1 = 'f54f10bd9140481996b082cfc1273f4d'
  //key2 = '2a8790ce7fb14b2ca018b8db815a134f'

  state = {
    progress: 0
  }

  setProgress = (progress)=>{
    this.setState({ progress: progress })
  }

  render() {
    return (
      <>
        <NavBar />
        <LoadingBar
          color='#f11946'
          height={4}
          loaderSpeed={800}
          progress={this.state.progress}
          shadow={true}
        />
        {/* <News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} Country="in" category="general"/> */}
        <Routes>
          <Route exact path='/' element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} Country="in" category="general" key="general" />} />
          <Route exact path='/health' element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} Country="in" category="health" key="health" />} />
          <Route exact path='/business' element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} Country="in" category="business" key="business" />} />
          <Route exact path='/entertainment' element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} Country="in" category="entertainment" key="entertainment" />} />
          <Route exact path='/science' element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} Country="in" category="science" key="science" />} />
          <Route exact path='/sports' element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} Country="in" category="sports" key="sports" />} />
          <Route exact path='/technology' element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} Country="in" category="technology" key="technology" />} />
        </Routes>
      </>
    )
  }
}

export default App;