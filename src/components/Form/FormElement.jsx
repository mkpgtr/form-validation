import React, { useEffect, useRef, useState } from 'react'

const FormElement = ({children}) => {


  let formHasErrors = false 
 

    const handleSubmit = (e)=>{
      e.preventDefault();

      const errorHash = {

      }
      console.log(e.target)
      console.log(e.target.childNodes)
      formHasErrors = false
      Array.from(e.target.childNodes).forEach((childNode)=>{
        if(childNode.className ==='form-row'){
          Array.from(childNode.childNodes).forEach((grandChildNode)=>{
            if(grandChildNode.value===''){
              errorHash['empty value(s)'] = 1;
              formHasErrors=true
            }
            if(grandChildNode.type==='select-one'){
              if(grandChildNode.value==='choose_city'){
                errorHash[grandChildNode.value] = 1
                formHasErrors=true;
              }
            }
          
            if(grandChildNode.className.includes('error-input')){
            
              errorHash[grandChildNode.name] = 1
              formHasErrors = true
            }
          })
        }
      })

      if(Object.keys(errorHash).length > 0){
        console.log(errorHash)
        alert('form has errors. please correct them')
      }else{
        alert('form submitted succcessfully')
        
      }

    

    }

    // useEffect(()=>{
    //   console.log(formContainsErrors)
    //   if(formContainsErrors){
    //     setBlockSubmit(true)
    //   }else{
    //     setBlockSubmit(false)
    //   }
    // },[formContainsErrors])
   
    // const handleErrorStatus = (e)=>
    // {
    //     e.preventDefault();
    //     const {children} = e.target;
    //     console.log(children)
      
    //     const nodes = Array.from(children)
    //     console.log(nodes)
    //     // set form contains error to false
    //     setFormContainsErrors(false)
    //     nodes.forEach((node)=>{
    //         const {children} = node
    //         Array.from(children).forEach((childNode)=>{
    //            if(childNode.constructor.name==='HTMLSpanElement'){
                
    //             setFormContainsErrors(true)

    //            }
               
    //         })
           
    //     })
    // }
   
 
    return (
      <form className='form' onSubmit={handleSubmit}>
    
      {children}
      
    </form>
  )
    
  
}

export default FormElement