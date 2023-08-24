// import React, { Component } from 'react'
import React from 'react'
import Loading from './Loading.gif'

export default function Spinner() {
  return (
    <div>
      <div className="text-center">
        <img className="my-3" src={Loading} alt='Loading' />
      </div>
    </div>
  )
}

// export class Spinner extends Component {
//   render() {
//     return (
//       <div className="text-center">
//         <img className="my-3" src={Loading} alt='Loading' />
//       </div>
//     )
//   }
// }

// export default Spinner