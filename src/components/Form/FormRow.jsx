import React, { useState } from 'react'

const FormRow = ({type,name,label,options}) => {

    const [errorText,setErrorText] = useState('')
    const [error,setError] = useState(false)
  
    

    
   
    const handleChange = (e)=>{
        if(e._reactName ==='onChange'){
            if(name==='mobile_number'){
                console.log('mobile number validation triggered');
                if(e.target.value.length > 10){
                    setError(true)
                    setErrorText('phone number should be of 10 digits');
                }else{
                    setError(false);
                    setErrorText('');
                  }
            }
        }
        if(e._reactName ==='onBlur'){
          





          if(name==='first_name' || name==='last_name'){
            if(e.target.value.length===0){
              console.log('first name on blur')
              setError(true);
              setErrorText(`${label} cannot be blank`);

              return;
            }else{
              setError(true)
              setErrorText('first name cannot be blank');
            }
          }else if(name==='mobile_number'){
              if(e.target.value.length===0){
                      setError(true)
                      setErrorText('phone field cannot be empty');
            }else if(e.target.value.length !==10){
              setError(true)
              setErrorText('phone number should be of 10 digits');
                    }else{
                    setError(false);
                    setErrorText('');
                  }
            }
        }
       

        if(e.target.type==='email'){
          if(e.target.value.length===0){
            setError(true)
            setErrorText('email cannot be empty');
          }else if(!e.target.value.match(/^([a-zA-Z0-9_.+-]+)@([a-zA-Z0-9-]+)\.([a-zA-Z]{2,})$/)){
                setError(true)
                setErrorText('invalid email');
            }else{
                setError(false);
                setErrorText('');
              }
        }


        if(e.target.name==='first_name' || e.target.name==='last_name'){

         

          if(e.target.value.match(/\d/)){
            setError(true)
            setErrorText('name cannot contain numbers');
          }else{
            setError(false)
            setErrorText('')
          }
        }
      }
   

    if(type==='select'){
        return (
            <div className='form-row'>
            <label htmlFor={name}>
                {label}
            </label>
            <select className='form-input select'>
                {
                    options.map((option)=>{
                      if(option.id===0){
                        return <option selected key={option.id} value={option.value}>{option.text}</option>

                      }
                        return <option key={option.id} value={option.value}>{option.text}</option>
                    })
                }
            </select>
            </div>
          )
    }

    if(name==='mobile_number'){
        return (
            <div className='form-row'>
            <label htmlFor={name}>
                {label}
            </label>
            <input minLength={10} maxLength={10} className={`form-input ${error && 'error-input' }`} type={type} name={name} onBlur={handleChange} onChange={handleChange}/>
            {error && <span className='error'> {errorText}</span>}
            </div>
          )
    }
  return (
    <div className='form-row' >
    <label htmlFor={name}>
        {label}
    </label>
    <input className={`form-input ${error && 'error-input' }`} type={type} name={name} onBlur={handleChange} onChange={handleChange}/>
    {error && <span className='error'> {errorText}</span>}
    </div>
  )
}

export default FormRow