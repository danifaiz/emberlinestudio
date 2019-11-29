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
                 <div class="ES-section about subpage">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 text-center">
                                <h1 class="text-uppercase">GET IN TOUCH</h1>
                                <p class="mb-0">xxxxx xx x xx x xx xxxx</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="ES-section _contact pt-0">
                    <div class="container">
                        <div class="row">
            
                            <div class="col-12">
            
                                <div class="form-group row m-0">
                                    <label class="col-3 col-form-label">Name &amp; surname</label>
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="Who are you?"/>
                                    </div>
                                </div>
            
                                <div class="form-group row m-0">
                                    <label class="col-3 col-form-label">Your Email</label>
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="Not a fake email"/>
                                    </div>
                                </div>
            
                                <div class="form-group row m-0">
                                    <label class="col-3 col-form-label">Telephone number</label>
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="Your number"/>
                                    </div>
                                </div>
            
                                <div class="form-group row m-0">
                                    <label class="col-3 col-form-label">Your message</label>
                                    <div class="col">
                                        <textarea class="form-control" name="text" rows="6" placeholder="Insert your request here" id=""></textarea>
                                    </div>
                                </div>
                                <div class="col-12 text-center pt-3">
                                    <a class="button" href="#">Send</a>
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