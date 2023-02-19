import React from 'react'

function Resume() {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <a href="./Resume.pdf" download>Download Resume</a>
      <div className="prompt">
        <h2>Front-End Proficiencies </h2>
        <ul>
          <li>In regards to the Front-End, I am knowledgeable in HTML, CSS, Git, JavaScript, Web API's, Third-Party API's and Server-Side API's.</li>
        </ul>
        <br />
        <h2>Back-End Proficiencies</h2>
        <ul>
          <li>For the Back-End, Node.js, Object-Oriented Programming (OOP), Express.js, SQL and Object-Relational Mapping (ORM). I also know NoSQL, React and MERN stack.</li>
        </ul>
      </div>
    </div>
  )
}

export default Resume;