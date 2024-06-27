import React from 'react'
import { useSchool } from './SchoolContext'
import Student from "./Student"

function Classroom() {

    const schoolName=useSchool();
  return (
    <div>
        <h1> Welcome to {schoolName}</h1>
        <Student />
    </div>
  )
}

export default Classroom