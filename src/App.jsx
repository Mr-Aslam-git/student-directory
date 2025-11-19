import React from 'react'
import StudentCard from './components/StudentCard'
import { activeStudents, alumniStudents } from './data/students'

function mostCommonSkill(allStudents) {
  const counts = {}
  allStudents.forEach(s => s.skills.forEach(skill => {
    const k = skill.toLowerCase()
    counts[k] = (counts[k] || 0) + 1
  }))
  let max = 0, common = 'N/A'
  Object.entries(counts).forEach(([skill, c]) => {
    if (c > max) { max = c; common = skill }
  })
  return { common: common.charAt(0).toUpperCase() + common.slice(1), count: max }
}

export default function App() {
  const allStudents = [...activeStudents, ...alumniStudents]
  const stats = mostCommonSkill(allStudents)

  return (
    <div className="container">
      <header className="header">
        <h1>Student Directory 2025</h1>
        <p className="subtitle">Full Stack Development Batch</p>
      </header>

      <section className="stats">
        <h2>Directory Statistics</h2>
        <p>Total students: <strong>{allStudents.length}</strong></p>
        <p>Active: <strong>{activeStudents.length}</strong> | Alumni: <strong>{alumniStudents.length}</strong></p>
        <p>Most common skill: <strong>{stats.common} ({stats.count})</strong></p>
      </section>

      <section>
        <h2>Active Students</h2>
        <div className="grid">
          {activeStudents.map(student => (
            <StudentCard key={student.rollNumber} {...student} />
          ))}
        </div>
      </section>

      <section>
        <h2>Alumni</h2>
        <div className="grid">
          {alumniStudents.map(student => (
            <StudentCard key={student.rollNumber} {...student} />
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>Yenepoya Deemed to be University — B.Tech (CS & IT)</p>
        <p>Contact: <a href="mailto:your-email@example.com">your-email@example.com</a></p>
        <p>© 2025 Student Portal</p>
      </footer>
    </div>
  )
}
