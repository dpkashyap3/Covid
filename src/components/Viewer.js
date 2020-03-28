import React from 'react'

function Viewer({title,image,count}) {
    
    return (

<div className="col col-lg-4 col-md-4 col-sm-12 col-xs-12">
<div className="card mb-3" style={{maxWidth:"540px"}}>
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src={image} className="card-img mt-5 ml-3 image-fluid" height="128px" width="128px" alt="Total Cases"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title h3">{title}</h5>
        <p className="card-text display-4">{count}</p>
        <p className="card-text"><small className="text-muted">World Wide</small></p>
      </div>
    </div>
  </div>
</div>
</div>

    )
}

export default Viewer
