import React, {Component} from 'react';
import './Contact.css'

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

    render () {
        console.log(this.state);

        return (
            <div className='foreground'>
                <h1 className='contentHeader contact'>Contact Me</h1>
                <p className='contentTextBlock contact'>Please drop me a message or feel free to connect with me on any of the following platforms:</p>
                <form className='messageForm contact'>
                    <div className='formTop contact'>
                        <div className='formField contact'>
                            <label 
                                htmlFor='nameInput'
                                className='formLabel contact'
                            >
                                Name:
                            </label>
                            <br/>
                            <input
                                className='formInput contact'
                                id='nameInput'
                                onChange={event => this.handleChange(event, 'name')}
                            ></input>
                        </div>
                        <div className='formField contact'>
                            <label 
                                htmlFor='subjectInput'
                                className='formLabel contact'
                            >
                                Subject:
                            </label>
                            <br/>
                            <input
                                type='text'
                                className='formInput contact'
                                id='subjectInput'
                                onChange={event => this.handleChange(event, 'subject')}
                            ></input>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className='formArea contact'>
                        <label 
                            htmlFor='messageInput'
                            className='formLabel contact'
                        >
                            Message:
                        </label>
                        <br/>
                        <textarea
                            className='formInput contact'
                            id='messageInput'
                            onChange={event => this.handleChange(event, 'message')}
                        >
                        </textarea>
                    </div>
                </form>
            </div>
        );
    }
}

export default ContactDisplay;