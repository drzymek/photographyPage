import React from 'react';

import img from '../images/contactPage_photos/contact_img.jpg';

import '../css/Contact.css';

class ContactPage extends React.Component {
    state = {
        nameValue: "",
        emailValue: "",
        phoneValue: "",
        messageValue: ""
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            nameValue: "",
            emailValue: "",
            phoneValue: "",
            messageValue: ""
        })
    }

    handleNameChange = (e) => {
        this.setState({
            nameValue: e.target.value
        })
    }

    handleEmailChange = (e) => {
        this.setState({
            emailValue: e.target.value
        })
    }

    handlePhoneChange = (e) => {
        this.setState({
            phoneValue: e.target.value
        })
    }

    handleMessageChange = (e) => {
        this.setState({
            messageValue: e.target.value
        })
    }



    render() {
        return (
            <div className="contact navScrollToPage">
                <form onSubmit={this.handleSubmit}>
                    <h3>Napisz</h3>
                    <input type="text" value={this.state.nameValue} onChange={this.handleNameChange} placeholder="Imię" />
                    <input type="email" value={this.state.emailValue} onChange={this.handleEmailChange} placeholder="@email" />
                    <input type="tel" value={this.state.phoneValue} onChange={this.handlePhoneChange} placeholder="Numer telefonu" />
                    <textarea value={this.state.messageValue} onChange={this.handleMessageChange} placeholder="Napisz...."></textarea>
                    <button>Wyślij</button>
                </form>
                <div className="contactImg">
                    <img src={img} alt="collage little girl with flowers in white sheet" />
                </div>
            </div>
        )
    }
}

export default ContactPage;

