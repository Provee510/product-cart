import React from 'react'

const Wrapper = ({children}) => {
  return (
    <div className='w-full lg:max-w-[90%] mx-auto bg-yellow-50'>
        {children}   
    </div>
  )
}

export default Wrapper