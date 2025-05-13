import React from 'react'
import '../../assets/css/backbutton.css'
import {useNavigate } from 'react-router-dom';


function BackButton() {
    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate(-1)
    }

    return (
        <div>
            <button className="back-button" on onClick={handleGoBack}>
                ← Back
            </button>
        </div>
    )
}

export default BackButton