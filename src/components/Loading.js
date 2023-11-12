import React, { Component } from 'react'
import giphy from './giphy.gif'
export class Loading extends Component {
  render() {
    return (
       

      <div className='text-center' >
        <img style={{height:'300px',width:'400px',textAlign:'center'}} src={giphy} alt="loading" />
      </div>
    )
  }
}

export default Loading