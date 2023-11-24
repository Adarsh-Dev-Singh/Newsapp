import React, { Component } from 'react'

export class NewsPart extends Component {
  render() {
    let { title, description, imageUrl, url, alt, publishedAt, Author ,name} = this.props;
    return (
      <div>
        <div className="card" style={{ margin: '15px', padding: '10px', textAlign: 'center' }}>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{name}
        </span>
          <img src={imageUrl} className="card-img-top" alt={alt} />
          <div className="card-body">
            <h5 className="card-title">{title.slice(0, 45)}...</h5>
            <p className="card-text" >{description}...</p>
            <a target='blank' href={url} className="btn btn-dark">See Full Article</a>
            <p className='text-muted'> <small> Published At : {new Date(publishedAt).toGMTString()} by {!Author ? 'Unknown' : Author}</small></p>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsPart