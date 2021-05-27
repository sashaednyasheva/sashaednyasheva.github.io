import React, { useState } from 'react'
import Welcome from './Welcome'


const Form = (props) => {

    const [email, setEmail] = useState(" ") 
    const [showSignup, setShowSignup] = useState(" ")

    const handleSignup = (event) => {
        event.preventDefault()
        setShowSignup(<Welcome email= {email}/>) 
        }

    const handleChange = (event) => setEmail(event.target.value)

    return(
        <div> 
            <form className="formDiv" onSubmit = {handleSignup}>
            <label> Email: <input id='email' type="text" onChange={handleChange}/> </label>
            <button>SUBMIT!</button>
            </form>

           <div> {showSignup} </div>

          
        </div>
    )
}
export default Form;