import React from 'react'

function WelcomeBanner() {
  return (
    <div className = "p-5 bg-gradient-to-tr from-[#ac3e48] rounded-xl">
        <h2 className = "font-bold text-2xl">AI Career Coach Agent</h2> <p className = "text-white mt-2"> Smart career decisions start here</p>
        <button  className={"outline, mt-3"}>Let's Get Started</button>
        
    </div>
  )
}

export default WelcomeBanner