import React, { Component } from 'react'
import axios from 'axios';
import * as PATHS from '../../constants/data_routes'
const INITIAL_STATE = {
    name:'',
    email:'',
    contact:'',
    msg:'',
    error:null
}

class Contact extends Component {
    constructor() {
        super()
        this.state = {
            ...INITIAL_STATE
        }
       
    }
    
    submitHandler = event => {
        event.preventDefault();
        const {  name,email,contact,msg } = this.state;
        var bodyFormData = new FormData();
        bodyFormData.set('name', name);
        bodyFormData.set('email', email);
        bodyFormData.set('contact', contact);
        bodyFormData.set('msg', msg);
        axios({
            method: 'post',
            url: `${PATHS.BASE_URL}`+`${PATHS.CONTACT_FORM}`,
            data: bodyFormData,
            headers: {'Content-Type': 'multipart/form-data' }
            })
            .then(function (response) {
                this.setState({ ...INITIAL_STATE });
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                this.setState({ error: response });
                console.log(response);
        });
      }
    onChange = event => {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }
    componentDidLoad() {
        
    }
    componentDidMount () {
        
    }
    componentWillUnmount() {
        
    }
    render() {
        const { name, email, contact, msg, error} = this.state;
        const isInvalid =  name == "" || email == "" || contact == "" || msg == ""
        return (
            <div>
                 <div className="ES-section about subpage">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1 className="text-uppercase">GET IN TOUCH</h1>
                                <p className="mb-0">xxxxx xx x xx x xx xxxx</p>
                            </div>
                        </div>
                    </div>
                </div>
             <form onSubmit={this.submitHandler}>
                <div className="ES-section _contact pt-0">
                    <div className="container">
                        <div className="row">
                        
            
                            <div className="col-12">
            
                                <div className="form-group row m-0">
                                    <label className="col-3 col-form-label">Name &amp; surname</label>
                                    <div className="col">
                                        <input
                                            className="form-control"
                                            name="name"
                                            value={name}
                                            onChange={this.onChange}
                                            type="text"
                                            placeholder="Who are you?"/>
                                    </div>
                                </div>
            
                                <div className="form-group row m-0">
                                    <label className="col-3 col-form-label">Your Email</label>
                                    <div className="col">
                                        <input
                                            className="form-control"
                                            name="email"
                                            value={email}
                                            onChange={this.onChange}
                                            type="email"
                                            placeholder="Not a fake email" />
                                    </div>
                                </div>
            
                                <div className="form-group row m-0">
                                    <label className="col-3 col-form-label">Telephone number</label>
                                    <div className="col">
                                        <input
                                            className="form-control"
                                            name="contact"
                                            value={contact}
                                            onChange={this.onChange}
                                            type="text"
                                            placeholder="Your number"/>
                                    </div>
                                </div>
            
                                <div className="form-group row m-0">
                                    <label className="col-3 col-form-label">Your message</label>
                                    <div className="col">
                                        <textarea onChange={this.onChange} className="form-control" name="msg" value={msg} rows="6" placeholder="Insert your request here"></textarea>
                                    </div>
                                </div>
                                <div className="col-12 text-center pt-3">
                                    <button type="submit" name="submit" className="button" disabled={isInvalid}>Send</button>
                                </div>
                                <div className="col-sm-12">
                                    <div className="center-aligned">
                                        {error && <h4 className="text-danger">Submission Error</h4>}
                                        {error && <p className="text-danger">{error.message}</p>}
                                    </div>
                                </div>
            
                            </div>
                            
                        </div>
                    </div>
                </div>
                </form>
            </div>
            
        )
    }
}
export default Contact;