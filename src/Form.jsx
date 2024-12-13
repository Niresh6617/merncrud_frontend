import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
export const Form = ({ particulardata, onreload }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [duration, setDuration] = useState('')
    useEffect(() => {
        if (particulardata) {
          setTitle(particulardata.title)
          setDescription(particulardata.description)
          setDuration(particulardata.duration)
        } else {
          setTitle('')
          setDescription('')
          setDuration('')
        }
      }, [particulardata])

      const submitingdata = async (e) => {
        e.preventDefault()
        if (particulardata) {
          await axios.put(`http://localhost:1000/put/course/${particulardata._id}`, { title, description, duration })
          setTitle('')
          setDescription('')
          setDuration('')
          alert('Course Updated Successfully')
        } else {
          await axios.post('https://merncrud-backend.onrender.com', { title, description, duration })
          setTitle('')
          setDescription('')
          setDuration('')
          alert('Course Added Successfully')
        }
        onreload()
      }
  return (
    <form onSubmit={submitingdata}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Course Title" />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Course Description" />
        <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="Course Duration (hours)" />
        <button type="submit">Submit</button>
    </form>
  )
}
