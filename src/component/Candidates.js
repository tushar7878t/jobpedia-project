import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Candidates = () => {

  const [candidate, setCandidate] = useState([
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
      <div className="candidate-list">
        <h5 className="candidate-card-title">Explore Our Candidates</h5>
        <div className='candidate-btn'><Link to="/add_candidate" >Add candidate</Link></div>
        <div className="candidate">
          {
            candidate.map((card, f) => {
              return <div key={f} className='candidate-card'>
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

export default Candidates
