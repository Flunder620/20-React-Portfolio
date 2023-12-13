import './css/Contact.scss'
import { useState, useEffect } from "react";


export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        text: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
        setFormData({
            name: '',
            email: '',
            text: '',
        })
      };


    return(
        <>
        <h1>Contact Me</h1>
        <div>
            <form onSubmit={handleSubmit} className="contact-form">
                <input type ='text' value={formData.name} placeholder="Enter your name" required onChange={(e) => setFormData({ ...formData, name: e.target.value })}></input>
                <input type ='text' value ={formData.email} placeholder="Enter your email" required onChange={(e) => setFormData({ ...formData, email: e.target.value })}></input>
                <textarea placeholder="Send me a message!" value = {formData.text} onChange={(e) => setFormData({ ...formData, text: e.target.value })}></textarea>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
        </>
    )
}