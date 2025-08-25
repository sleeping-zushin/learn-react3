
import React from 'react'

// export const Title = (props) => {

//   console.log(props)

//   return (
//     <h1>{props.name1} + {props.name2} + {props.name3}</h1>
//   )
// }
export const Title = ({name1, name2, name3}) => {

  // console.log(props)

  return (
    <h1>{name1} + {name2} + {name3}</h1>
  )
}
