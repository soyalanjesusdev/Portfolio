import React from 'react'

function Hero() {
  return (
    <div id="hero" className='flex items-center justify-center flex-col py-20'>
    <div className='text-center'>

     <h1 className='text-2xl md:text-4xl mb-1 md:mb-3 text-amber-500 font-semibold dark:text-amber-500'>Hi, This is Alan</h1>
     <p className='text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300 '>Lorem ipsum dolor sit amet, con con Lorem</p>
    <a href="#works" className='inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-500 hover:bg-amber-700 md:text-md'> See Works</a>
    </div>
    </div>
  )
}

export default Hero
