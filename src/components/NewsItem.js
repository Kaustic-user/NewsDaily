// import React, { Component } from 'react'
import React from 'react'


export default function NewsItem(props) {
  let {title,description,imageUrl,newsUrl,date,author,sourceName}=props; //called destructuring
  const myBadgeStyle = {
    fontSize: '15px',
    width : '90px',
    left : '92%',
    padding: '6px 8px'
  }
  return (
    <>
      <div className="my-3">
        <div className="card">
        
          <img src={imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">

            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={myBadgeStyle}>
              <div className="text-travel-container">
                <div className="text-travel-animation">
                  <span>{sourceName}</span>
                </div>
              </div>
            </span>


            <h5 className="card-title mycard-text-title">{title?title:""}</h5>
            <p className="card-text mycard-text-desc">{description?description:""}...</p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-success">Read More</a>  
          </div>
          
          <div className="card-footer">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <small className="text-body-secondary">{new Date(date).toGMTString()}</small>
              <small className="text-body-secondary">{author}</small>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// export class NewsItem extends Component {

//     myBadgeStyle = {
//       fontSize: '12px',
//       width : '90px',
//       left : '92%',
//       padding: '4px 8px'
//     }

//   render() {
//     let {title,description,imageUrl,newsUrl,date,author,sourceName}=this.props; //called destructuring
//     return (
//       <div className="my-3">
//         <div className="card">
        
//         <img src={imageUrl} className="card-img-top" alt="..."/>
//         <div className="card-body">

        

//           <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={this.myBadgeStyle}>
//             <div className="text-travel-container">
//               <div className="text-travel-animation">
//                 <span>{sourceName}</span>
//               </div>
//             </div>
//           </span>


//           <h5 className="card-title">{title}...</h5>
//           <p className="card-text">{description}...</p>
//           <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>  
//         </div>
//         <div className="card-footer">
//           <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//             <small className="text-body-secondary">{new Date(date).toGMTString()}</small>
//             <small className="text-body-secondary">{author}</small>
//           </div>
//         </div>
//       </div>
//       </div>
//     )
//   }
// }

// export default NewsItem
