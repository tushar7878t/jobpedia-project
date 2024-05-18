import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Jobs = () => {

  const [container, setContainer] = useState([
    {
      title: "SDE",
      company: "google",
      text: "something",
      city: "mumbai"
    },
    {
      title: "Software Eingineer",
      company: "Tech company Inc.",
      text: "we are looking for skilled software engineers to join our team",
      city: "New York,NY",
    },
    {
      title: "SDE-2",
      company: "Apple Inc.",
      text: "we are looking for skilled software engineers to join our team",
      city: "California",
    },
    {
      title: "Software  Development Eingineer",
      company: "Tesla Inc.",
      text: "we are looking for dedicated employee",
      city: "Texas,AX",
    },
    {
      title: "SDE-1",
      company: "JP Morgan Chase",
      text: "we are looking for people",
      city: "mumbai",
    },
    {
      title: "SDE-1",
      company: " Morgan Chase",
      text: "we are looking for jp rejects",
      city: "mumbai",
    }

  ])
  return (
    <div>
      <div className="job-list">
        <h5 className="job-card-title">Job listings</h5>
        <div className='btn'><Link to="/add_jobs" >Add jobs</Link></div>
        <div className="container">
          {
            container.map((card, i) => {
              return <div key={i} className='job-card'>
                <h5>{card.title}</h5>
                <p>{card.company}</p>
                <p>{card.text}</p>
                <p>{card.city}</p>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Jobs
