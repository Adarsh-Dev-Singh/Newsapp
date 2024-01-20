import './App.css';
import NavBar from './components/NavBar';
import React, {useState} from 'react';
import News from './components/News';
import { Routes, Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar';
const App = () =>{
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API
 const [Progress, setProgress] = useState(0)

    return (
      <>
        <NavBar />
        <LoadingBar
          color='#f11946'
          height={4}
          loaderSpeed={800}
          Progress={Progress}
          shadow={true}
        />
        {/* <News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} Country="in" category="general"/> */}
        <Routes>
          <Route exact path='/' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} Country="in" category="general" key="general" />} />
          <Route exact path='/health' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} Country="in" category="health" key="health" />} />
          <Route exact path='/business' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} Country="in" category="business" key="business" />} />
          <Route exact path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} Country="in" category="entertainment" key="entertainment" />} />
          <Route exact path='/science' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} Country="in" category="science" key="science" />} />
          <Route exact path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} Country="in" category="sports" key="sports" />} />
          <Route exact path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} Country="in" category="technology" key="technology" />} />
        </Routes>
      </>
    )
}

export default App;