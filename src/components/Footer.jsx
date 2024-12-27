import React from 'react'

const Footer = ({ copyText }) => {
  return (
    <>
    <div className="card text-center mt-5"> 
        <div className="card-body"> 
            <p className="card-text">{ copyText }</p> 
        </div> 
    </div>
    </>
  )
}

export default Footer