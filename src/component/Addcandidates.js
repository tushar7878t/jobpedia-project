import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Addcandidates = () => {

  const [candidates, setCandidates] = useState({
    Name: "",
    Resume: "",
    Experience: "",
    Bio: ""
  });

  const [records, setRecords] = useState([]);

  const handleinput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCandidates({ ...candidates, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newdata = { ...candidates, id: new Date().getTime().toString() }
    setRecords([...records, newdata]);
    setCandidates({
      Name: "",
      Resume: "",
      Experience: "",
      Bio: ""
    });
  }

  return (
    <div>
      <div className="form-container">
        <h1 className="form-heading">Add candidates</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              placeholder='Name'
              autoComplete='off'
              type="text"
              name="Name"
              value={candidates.Name}
              onChange={handleinput}
              className='form-input'
            />
          </div>
          <div className="form-group">
            <label>Resume</label>
            <input
              placeholder='Resume'
              autoComplete='off'
              type="text"
              name="Resume"
              value={candidates.Resume}
              onChange={handleinput}
              className='form-input'
            />
          </div>
          <div className="form-group">
            <label>Experience</label>
            <input
              placeholder='Experience'
              autoComplete='off'
              type="text"
              name="Experience"
              value={candidates.Experience}
              onChange={handleinput}
              className='form-description'
            />
          </div>
          <div className="form-group">
            <label>Bio</label>
            <input
              placeholder='Bio'
              autoComplete='off'
              type="text"
              name="Bio"
              value={candidates.Bio}
              onChange={handleinput}
              className='form-input'
            />
          </div>
          <button type="submit" className="candidates-submit-btn">
            Add candidates
          </button>
        </form>
        <div className='back-to-candidates'><Link to="/Candidates">
          Back
        </Link></div>

        <div>
          {
            records.map((curElem, data) => {
              return (
                <div className='candidate-data' key={data}>
                  <p>{curElem.Name}</p>
                  <p>{curElem.Resume}</p>
                  <p>{curElem.Experience}</p>
                  <p>{curElem.Bio}</p>
                </div>
              )
            })

          }
        </div>

      </div>
    </div>
  )
}

export default Addcandidates
