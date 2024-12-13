import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { Form } from './Form'
export const View = () => {
    const [alldata, setAlldata] = useState([])
    const [particulardata, setParticulardata] = useState(null)

    const fetchdata = async () => {
        const data = await axios.get('http://localhost:1000/get/courses')
        setAlldata(data.data)
    }
    useEffect(() => {
        fetchdata()
    }, [])
    
    const deletedata = async (id) => {
        await axios.delete(`http://localhost:1000/delete/course/${id}`)
        fetchdata()
    }

    const editdata = (course) => {
        setParticulardata(course)
    }

  return (
    <div>
      <Form particulardata={particulardata} onreload={() => { setParticulardata(null); fetchdata() }}
      />
      {alldata.map((course, index) =>
        <div key={index}>
          <h1>{course.title}</h1>
          <p>{course.description}</p>
          <p>{course.duration}</p>
          <button onClick={() => deletedata(course._id)}>Delete</button>
          <button onClick={() => editdata(course)}>Edit</button>
        </div>
      )}
    </div>
  )
}
