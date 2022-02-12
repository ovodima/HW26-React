import React, {useState} from 'react'

export const OperationData = (props) => {
    const {sallery, workedDay, data} = props

    const [sell, setSell] = useState(sallery)
    const [work, setWork] = useState(workedDay)
  return (
    <div>
        {
            <div key={data.id}>
            <h1>{data.firstName} {data.lastName}</h1>
            <p>Sallery / h</p>
            <input type = 'text' defaultValue={sell} onChange={(e) => setSell(e.target.value * work)}/>
            <p> Total {sell}</p>
            <p>Forked Time / h</p>
            <input type = 'text' defaultValue={work} onChange={(e) => setWork(e.target.value * sell)}/>
            <p> Total {work}</p>
        </div>
                    
        }
    </div>
  )
}
