import React from 'react'
import Data from './Data'
import { OperationData } from './OperationData'
import './style.css'


const DisplayData = () => {
    let data = Data()
    function multiply (a, b) {
        return a * b
    }
  return (
    <div className='main'>
        {
            data.map(item => {
                return (
                    <OperationData data={item} sallery={item.sallery} workedDay={item.workedDay} key={item.id}/>
                )
            })
        }
    </div>
  )
}

export default DisplayData