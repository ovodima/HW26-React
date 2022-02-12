import React from 'react'
import Data from './Data'
import './style.css'

const DisplayData = () => {
    let data = Data()
    console.log(data)
  return (
    <div className='main'>
        {
            data.map(item => (
                <h2 key={item.id}>Name: {item.firstName} Last Name: {item.lastName} Month Sallery: {item.sallery * item.workedDay} $</h2>
                
            ))
        }
    </div>
  )
}

export default DisplayData