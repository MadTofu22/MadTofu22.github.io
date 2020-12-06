import React, {Component} from 'react';
import './Contact.css';

// Import contact link icons
import linkedIn from '../../assets/images/icons/linkedin.png';
import email from '../../assets/images/icons/email.png';
import github from '../../assets/images/icons/github.png';
import discord from '../../assets/images/icons/discord.png';

// Import EmailJS and dotenv
import emailjs, {init} from 'emailjs-com';
init(process.env.REACT_APP_EMAILJS_USERID);

class ContactDisplay extends Component {
    
    state = {
        nameInput: '',
        subjectInput: '',
        messageInput: '',
    }

    // This function handles the input field changes
    handleChange = (event, type) => {
        // console.log(`${type}Input has changed:`, event.target.value);
        this.setState({
            ...this.state,
            [`${type}Input`]: event.target.value,
        });
    }

    // This function handles sending the email using emailjs when the send message button is clicked
    handleSubmit = (event) => {
        
        const templateParams = {
            from_name: this.state.nameInput,
            subject: this.state.subjectInput,
            message: this.state.messageInput,
        };
        const serviceId = process.env.REACT_APP_EMAILJS_SERVICEID;
        const templateId = process.env.REACT_APP_EMAILJS_TEMPLATEID;

        event.preventDefault();
         
        emailjs
            .send(serviceId, templateId, templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                event.target.reset();
                alert('Message sent! Thanks for contacting me!'); // Need to replace with custom modal
            }, function(error) {
               console.log('FAILED...', error);
            });
    }

    render () {
        // console.log(this.state);

        return (
            <div className='foreground'>
                <h1 className='contentHeader contact'>Contact Me</h1>
                <p className='contentTextBlock contact'>Please feel free to drop me a message here or  connect with me on any of the following platforms:
                </p>
                <div className='linkIcons contact'>
                    <a rel='noreferrer' target='_blank' href='https://www.linkedin.com/in/tom-stutler'>
                        <img src={linkedIn} alt='LinkedIn icon and link' />
                    </a>
                    <a rel='noreferrer' target='_blank' href='https://github.com/MadTofu22'>
                        <img src={github} alt='Github icon and link' />
                    </a>
                    <a rel='noreferrer' target='_blank' href='https://discordapp.com/users/175778800100048896'>
                        <img src={discord} alt='Discord icon and link' />
                    </a>
                </div>
                <form 
                className='messageForm contact' 
                onSubmit={event => this.handleSubmit(event)} >
                    <div className='formTop contact'>
                        <div className='formField contact' id='nameField'>
                            <label 
                                htmlFor='nameInput' 
                                className='formLabel contact' >
                                Name:
                            </label>
                            <br/>
                            <input 
                                className='formInput contact' 
                                name='nameInput' 
                                id='nameInput' 
                                onChange={event => this.handleChange(event, 'name')} 
                            />
                        </div>
                        <div className='formField contact' id='subjectField'>
                            <label 
                                htmlFor='subjectInput' 
                                className='formLabel contact' >
                                Subject:
                            </label>
                            <br/>
                            <input 
                                type='text' 
                                className='formInput contact' 
                                name='subjectInput' 
                                id='subjectInput' 
                                onChange={event => this.handleChange(event, 'subject')} 
                            />
                        </div>
                    </div>
                    <div className='formArea contact'>
                        <label 
                            htmlFor='messageInput' 
                            className='formLabel contact' >
                            Message:
                        </label>
                        <br/>
                        <textarea 
                            required 
                            className='formInput contact' 
                            name='messageInput' 
                            id='messageInput'
                            onChange={event => this.handleChange(event, 'message')} 
                        />
                    </div>
                    <button 
                        className='formButton contact'
                        type='submit'
                        name='submitButton' >
                        Send Message
                    </button>
                </form>
            </div>
        );
    }
}

export default ContactDisplay;