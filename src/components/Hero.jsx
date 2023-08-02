import React from 'react'

function Hero() {
  return (
<div className="hero grid min-h-screen ">
  <div className="hero-content text-center">
    <div className="max-w-4xl">
      <h1 className="text-4xl sm:text-8xl font-bold">Make your website <span className="text-4xl sm:text-8xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">wonderful</span> </h1>
                  <p className="py-6 text-xl sm:text-3xl">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
                  
                  <div className='flex flex-col sm:flex-row gap-4 p-4 text-center m-auto justify-center'>
                  <button className="btn btn-outline">Explore </button>
<button className="btn btn-outline btn-primary">Learn More</button>
        
       </div>

    </div>
  </div>
</div>
  )
}

export default Hero

