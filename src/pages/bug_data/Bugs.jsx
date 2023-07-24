import React, { useState,useEffect } from 'react'
import MainLayout from '../../layout/MainLayout'
import Bug from '../../components/Bug'
// import api
import { getBugs } from '../../api/api_calls'
import { Link } from 'react-router-dom';

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
      <div id='bugWrap'>
        {/* <h1>*BUGS PAGE*</h1> */}
        {Bugs.length ? 
          <div id='bugComp'>
          {bugs.map((bug) => {
            return (
              <Link
              to='/Bugs-Info'
              state={{ bug }}
              key={bug.id}
              >
                <Bug key={bug['file-name']} bug={bug} />
              </Link>
            )
          })}
        </div>
        :
        <>
        <h2>LOADING BUG INFO ...</h2>
        </>
      }
      </div>
    </MainLayout>
  )
}

export default Bugs
