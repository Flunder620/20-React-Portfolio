import './css/Contact.scss'
import { useState, useEffect } from "react";


export default function Contact() {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputValue)
    }


    return(
        <>
        <h1>Contact Me</h1>
        <div>
            <form className="contact-form">
                <input type ='text' placeholder="Enter your name" required value ={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
                <input type ='text' placeholder="Enter your email" required value ={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
                <textarea placeholder="Send me a message!"></textarea>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
        </>
    )
}