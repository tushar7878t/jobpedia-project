import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Addjobs = () => {

  const [registration, setRegistration] = useState({
    Title: "",
    Company: "",
    Description: "",
    Location: ""
  });

  const [data, setData] = useState([]);



  const handleinput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRegistration({ ...registration, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newdata = { ...registration, id: new Date().getTime().toString() }
    setData([data, newdata]);
    setRegistration({
      Title: "",
      Company: "",
      Description: "",
      Location: ""
    });
  }



  return (
    <div>
      <div className="form-container">
        <h1 className="form-heading">Add Job</h1>

        <form onSubmit={handleSubmit} >
          <div className="form-group">
            <label>Title</label>
            <input
              placeholder='Title'
              type="text"
              name="Title"
              value={registration.Title}
              onChange={handleinput}
              className='form-input'
            />
          </div>
          <div className="form-group">
            <label>Company</label>
            <input
              placeholder='Company'

              type="text"
              name="Company"
              value={registration.Company}
              onChange={handleinput}
              id='company'
              className='form-input'
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              placeholder='Description'
              name="Description"
              value={registration.Description}
              onChange={handleinput}
              id='description'
              className='form-description'
            />
          </div>
          <div className="form-group">
            <label>Location</label>
            <input
              placeholder='Location'
              type="text"
              name="Location"
              value={registration.Location}
              onChange={handleinput}
              id='location'
              className='form-input'
            />
          </div>
          <button type="submit" className="submit-btn">
            Add Job
          </button>
        </form>
        <div className='back-to-jobs'><Link to="/jobs">
          Back
        </Link></div>

        <div>
          {
            data.map((curElem, data) => {
              return (
                <div className='jobs-data' key={data}>
                  <p>{curElem.Title}</p>
                  <p>{curElem.Company}</p>
                  <p>{curElem.Description}</p>
                  <p>{curElem.Location}</p>
                </div>
              )
            })
          }
        </div>

      </div>
    </div>
  )
}

export default Addjobs
