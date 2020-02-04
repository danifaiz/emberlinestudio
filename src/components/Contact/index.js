import React, { Component } from 'react'
import axios from 'axios';
import * as PATHS from '../../constants/data_routes'
import Loader from 'react-loader-spinner'

const INITIAL_STATE = {
    name:'',
    email:'',
    contact:'',
    msg:'',
    error:null,
    response:null,
    showLoader:false
}

class Contact extends Component {
    constructor() {
        super()
        this.state = {
            ...INITIAL_STATE
        }
       
    }
    
    submitHandler = event => {
        document.getElementById("contactBtn").disabled = true;
        this.setState({ showLoader: true });
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
            .then((response) => {
                this.setState({ showLoader: false });
                this.setState({ ...INITIAL_STATE });
                this.setState({ response:response.data });
                console.log(response);
                document.getElementById("contactBtn").disabled = false;
            })
            .catch((response)=> {
                //handle error
                console.log(response);
                this.setState({ showLoader: false });
                document.getElementById("contactBtn").disabled = false;

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
        window.scrollTo(0, 0)
    }
    componentWillUnmount() {
        
    }
    render() {
        const { name, email, contact, msg, error, response} = this.state;
        const isInvalid =  name == "" || email == "" || contact == "" || msg == ""
        return (
            <div>
                 <div className="ES-section about subpage">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1 className="text-uppercase">GET IN TOUCH</h1>
                                <p className="mb-0">Don't be shy, Say Hi!</p>
                            </div>
                        </div>
                    </div>
                </div>
             <form id="contactForm" onSubmit={this.submitHandler}>
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
                                <div className="form-group row m-0">
                                            <div className="col-sm-12 text-center" style={{padding:'1rem 0px 0 0px', marginRight:'6px'}}>
                                                <button type="submit" id="contactBtn" name="submit" className="button" disabled={isInvalid}>Send</button>
                                            </div>
                                            <div className="col-sm-12 text-center" style={{padding:'0', marginTop:'1.4rem'}}>
                                                { this.state.showLoader ? <Loader
                                                        type="Circles"
                                                        color="#ef373a"
                                                        height={30}
                                                        width={30}
                                                        timeout={3000000} //3 secs
                                                        visible={true}
                                                    /> : null }
                                                
                                            </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="center-aligned">
                                        {error && <h4 className="text-danger">Submission Error</h4>}
                                        {error && <p className="text-danger">{error.message}</p>}
                                    </div>
                                    <div className="center-aligned">
                                        {response && <h4 className="text-success">{response.status}</h4>}
                                        {response && <p className="text-success">{response.message}</p>}
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