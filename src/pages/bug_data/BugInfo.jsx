import React, { useState, useEffect } from 'react'
import MainLayout from '../../layout/MainLayout'
// api
import { getBugInfo } from '../../api/api_calls'
// useLocation
import { useLocation } from 'react-router-dom'


function BugInfo({props}) {
    // state
    const [bugInfo, setBugInfo] = useState({})
    // location - have access to
    let location = useLocation()

    useEffect(() =>{
        // console.log(location)
        // grabs specific info from url based on bug
        getBugInfo(location.state.bug.id) // ?? wrong path?? if bug.id = endless loop
        .then(bugData => setBugInfo(bugData))
    })

  return (
        <MainLayout>
    <div id='bugInfo'>
            {/* <p>BUG INFO HERE</p> */}
            <div className='bugInfo'>
                <img src={bugInfo?.['image_uri']} alt="bugImg" className='bugIMG'/>
                {/* name not showing!! file path xxx */}
                <h3 className='bugName'>{bugInfo?.['file-name']}</h3>
                <div className='bugData'>
                    <h2>Price: {bugInfo?.price} bells</h2>
                    {/* <h3>"{bugInfo?.['catch-phrase']}"
                        <br />
                        <span>- Villager</span>
                    </h3> */}
                    <p className='blathers'>
                        "{bugInfo?.['museum-phrase']}"
                        <br />
                        <br />
                        <span>- Blathers, Museum Director</span>
                    </p>
                </div>
            </div>
    </div>
        </MainLayout>
  )
}

export default BugInfo