import React, { Component } from 'react'

class Contact extends Component {
    constructor() {
        super()
       
    }
    
    componentDidLoad() {
        
    }
    componentDidMount () {
        
    }
    componentWillUnmount() {
        
    }
    render() {
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

                <div className="ES-section _contact pt-0">
                    <div className="container">
                        <div className="row">
            
                            <div className="col-12">
            
                                <div className="form-group row m-0">
                                    <label className="col-3 col-form-label">Name &amp; surname</label>
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="Who are you?"/>
                                    </div>
                                </div>
            
                                <div className="form-group row m-0">
                                    <label className="col-3 col-form-label">Your Email</label>
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="Not a fake email"/>
                                    </div>
                                </div>
            
                                <div className="form-group row m-0">
                                    <label className="col-3 col-form-label">Telephone number</label>
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="Your number"/>
                                    </div>
                                </div>
            
                                <div className="form-group row m-0">
                                    <label className="col-3 col-form-label">Your message</label>
                                    <div className="col">
                                        <textarea className="form-control" name="text" rows="6" placeholder="Insert your request here" id=""></textarea>
                                    </div>
                                </div>
                                <div className="col-12 text-center pt-3">
                                    <a className="button" href="#">Send</a>
                                </div>
            
                            </div>
            
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}
export default Contact;