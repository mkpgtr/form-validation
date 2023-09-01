import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormRow from './components/Form/FormRow'
import Button from './components/Button/Button'
import FormElement from './components/Form/FormElement'

function App() {
  const [count, setCount] = useState(0)


  
 
  return (
    <>
      <FormElement>
        <FormRow type='text' name='first_name' label={"First Name"}/>
        <FormRow type='text' name='last_name' label={"Last Name"}/>
        
        <FormRow type='select' name='city' label={"City"} 
        
        options = {
          [
            {
              id : 0,
              value : "choose_city",
              text : "Choose City"
            },
            {
              id : 1,
              value : "delhi",
              text : "Delhi"
            },
            {
              id : 2,
              value : "maharashtra",
              text : "Maharashtra"
            },
          

          ]
         
        }
        />
        <FormRow type='email' name='email' label={"Email"}/>
        <FormRow type='number' name='mobile_number' label={"Mobile No."}/>
        <Button type={'submit'} buttonText={'Register'}/>
      </FormElement>
    </>
  )
}

export default App
