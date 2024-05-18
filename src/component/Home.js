import React from 'react'
import amazon_logo from "../assets/amazon_logo.png"
import google_logo from "../assets/google_logo.png"
import applelogo from "../assets/apple_logo.png"
import twitter_logo from "../assets/twitter_logo.png"
import netlflix_logo from "../assets/netlflix_logo.png"
import dell_logo from "../assets/dell_logo.png"
import tesla_logo from "../assets/tesla_logo.png"
import candidate2 from "../assets/candidate2.jpg"
import candidate1 from "../assets/candidate1.jpeg"
import businessuser from "../assets/businessuser.jpg"



const Home = () => {
  return (
    <div>
      <div className="welcome-card">
        <h5 className="card-title">Welcome to Jobpedia</h5>
        <p className="card-text">your source for finding the best Talent and opportunites.</p>
        <div className="card-container">
          <div className="card-box">
            <h5 >500+</h5>
            <p>Companies</p>
          </div>
          <div className="card-box">
            <h5 >2000+</h5>
            <p >job posted</p>
          </div>
          <div className="card-box">
            <h5 >1500+</h5>
            <p >candidates</p>
          </div>
        </div>
      </div>
      <div className="instruction-card">
        <h2 className="instruction-title">How to Use</h2>
        <div className="instruction-for-companies">
          <h4>for Companies</h4>
          <div className='compaines-content'>
            <ul>
              <li>Create an Account</li>
              <li>Build your Profile</li>
              <li>Apply in job listings</li>
            </ul>
          </div>
        </div>
        <div className="instruction-for-candidates">
          <h4>for Candidates</h4>
          <div className='candidates-content'>
            <ul>
              <li>Create an Account</li>
              <li>Build your Profile</li>
              <li>Apply in job listings</li>
            </ul>
          </div>
        </div>



      </div>
      <div className="tech-giants">
        <p className='tech-giants-text'>Trust by leading Tech Giants</p>
        <div className="tech-companies">
          <img src={amazon_logo} alt="Amazon" />
          <img src={applelogo} alt="Apple" />
          <img src={google_logo} alt="google" />
          <img src={twitter_logo} alt="twitter" />
          <img src={netlflix_logo} alt="netflix" />
          <img src={dell_logo} alt="dell" />
          <img src={tesla_logo} alt="tesla" />
        </div>
      </div>
      <div className="users-card">
        <h1> What our users says about us</h1>
        <div className='users-main-card'>
          <div className="card">
            <img src={candidate2} alt="users" />
            <div className="user-card-body">
              <h5 className="user-name">jack ryan</h5>
              <p className="user-text">Excelet platform to find job opportunites i find my dream job through this portal.</p>
            </div>
            <div className="card-footer">
              <small className="user-update">posted 20 days ago</small>
            </div>
          </div>
          <div className="card">
            <img src={candidate1} alt="users" />
            <div className="user-card-body">
              <h5 className="user-name">Quentin Trantino</h5>
              <p className="user-text">Heighly recomended for both job and employes this process is effecient and easy to use.</p>
            </div>
            <div className="card-footer">
              <small className="user-update">posted 10 months  ago</small>
            </div>
          </div>
          <div className="card">
            <img src={businessuser} alt="users" />
            <div className="user-card-body">
              <h5 className="user-name">AI pacino</h5>
              <p className="user-text">As an employee.I've have found expetationnal talent for my teaam through this platform.</p>
            </div>
            <div className="card-footer">
              <small className="user-update">posted 3 months  ago</small>
            </div>
          </div>
        </div>
      </div>
      <footer className='footer'>
      <ul className="footer-menu">
                            <li className="footer-item">
                                <a className="footer-link" href="/about us">about us</a>
                            </li>
                            <li className="footer-item">
                                <a className="footer-link" href="/Contact">Contact</a>
                            </li>
                            <li className="footer-item">
                                <a className="footer-link" href="/Terms and Condition">Terms and Condition</a>
                            </li>
                            <li className="footer-item">
                                <a className="footer-link" href="/Privacy Polics">Privacy Polics</a>
                            </li>
                            <li className="footer-item">
                                <a className="footer-link" href="/FAQ">FAQ</a>
                            </li>
                            <li className="footer-item">
                                <a className="footer-link" href="/Carrer">Carrer</a>
                            </li>
                            <li className="footer-item">
                                <a className="footer-link" href="/Feedback">Feedback</a>
                            </li>
                        </ul>
      </footer>

    </div>
  )
}

export default Home
