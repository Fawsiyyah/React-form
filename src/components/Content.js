import React, { useState } from "react";
import axios from "axios";
import {nanoid} from "nanoid"
import { Icon } from '@iconify/react';
import './style.css';

const FormContent =  () => {
    const [form, setForm] = useState({name: '',
email: '',
subject: '',
message: ''})
const handleChange = (event) => {
setForm({
    ...form,
    [event.target.id]: event.target.value,
});
};

const handleSubmit = (event) => {
    const post = {
        id: nanoid(),
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message
    };
    axios.post(`https://my-json-server.typi.com/tundeojediran/contacts-api-server/inquiries`, post)
    .then((res) => {
        console.log(res.data)
    }).catch((error) => {
        console.log(error)
    });
    setForm({
        name: '',
        email: '',
        message: '',
    })
    alert('Your response has been recorded!')
}

return (
    <div>
        <div className="body">
            <h2 className="sub-head">Let's have your feedback.</h2>
            <form onSubmit={handleSubmit} className="inline">
                <div className="icons">
                    <label htmlFor="name">Name</label>
                    <Icon icon="et:profile-male" className="icon" />
                    <input id='name' onChange={handleChange} value={form.name} type="text" className="input" placeholder="Enter your fullname" required />
                </div>
                <div className="icons">
                    <label htmlFor="email">Email Address</label>
                    <Icon icon="mdi:email-edit-outline" className="icon" />
                    <input id='email' onChange={handleChange} value={form.email} type="email" className="input" placeholder="Enter your Email Address" required />
                </div>
                <div className="icons">
                    <label htmlFor="subject">Subject</label>
                    <Icon icon="uit:subject" className="icon" />
                    <input id='subject' onChange={handleChange} value={form.subject} type="text" className="input" placeholder="Enter message subject" required />
                </div>
                <div className="icons">
                    <label htmlFor="message">Message</label>
                    {/* <Icon icon="mdi:message-reply-outline" className="icon" /> */}
                    <textarea id='message' onChange={handleChange} value={form.message} type="text" rows="8" cols="50" className="input" placeholder="Enter message" required />
                </div>

                <button type="submit" className="btn">Submit</button>
            </form>
        </div>
    </div>
)
};

export default FormContent;