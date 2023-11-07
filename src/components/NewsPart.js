import React, { Component } from 'react'

export class NewsPart extends Component {
  render() {
    let  {title , description ,imageUrl,url,alt} = this.props;
    return (
      <div>
        <div  className="card" style={{ width: '18rem',margin:'15px',padding:'10px',textAlign:'center' }}>
          <img src={imageUrl} className="card-img-top" alt={alt}/>
          <div className="card-body">
            <h5 className="card-title">{title.slice(0,45)}...</h5>
            <p className="card-text" >{description}...</p>
            <a target='blank' href={url} className="btn btn-dark">See Full Article</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsPart