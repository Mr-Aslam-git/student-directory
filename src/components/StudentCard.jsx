import React from 'react'

export default function StudentCard({ name, rollNumber, course, email, skills, isActive }) {
  return (
    <div className={`card ${isActive ? 'active' : 'inactive'}`}>
      <div className="card-header">
        <h3>{name}</h3>
        <span className={`status ${isActive ? 'green' : 'gray'}`}>
          {isActive ? 'Active' : 'Inactive'}
        </span>
      </div>
      <p><strong>Roll:</strong> {rollNumber}</p>
      <p><strong>Course:</strong> {course}</p>
      <p><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>
      <div className="skills">
        {skills.map((skill, i) => (
          <span className="skill" key={`${rollNumber}-skill-${i}`}>{skill}</span>
        ))}
      </div>
    </div>
  )
}
