import React from 'react'
import BackButton from './BackButton'
import '../../assets/css/All.css'

function NotFound() {
    return (
        <div className='notfound'>
            <div className="backbutton">
                <BackButton />
            </div>
            <h1 className='not'>Page NotFound</h1>
        </div>
    )
}

export default NotFound