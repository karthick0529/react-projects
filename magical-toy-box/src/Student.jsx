import React from 'react'
import {useSchool} from "./SchoolContext"

function Student() {
    const schoolName= useSchool();

  return (
    <div>
        <p>
            Student is studying in {schoolName}
        </p>
    </div>
  )
}

export default Student