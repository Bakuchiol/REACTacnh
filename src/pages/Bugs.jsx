import React, { useState,useEffect } from 'react'
import MainLayout from '../layout/MainLayout'
import Bug from '../components/Bug'
// import api
import { getBugs } from '../api/api_calls'

function Bugs(props) {
  // set State
  const [bugs, setBugs] = useState([]);
  // use API
  useEffect(() => {
    getBugs()
    .then(bugData => setBugs(bugData))
  }, [])



  return (
    <MainLayout>
      <div>
        <h1>*BUGS PAGE*</h1>
        <div id='bugComp'>
          {bugs.map((bug) => {
            return (
              <Bug key={bug.id} bug={bug} />
            )
          })}
        </div>
      </div>
    </MainLayout>
  )
}

export default Bugs
