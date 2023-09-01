import React, { useEffect } from 'react'

const Button = ({buttonText,type}) => {


  

  

  return (
    <button className='btn' type={type}>{buttonText}</button>
  )

}

export default Button