import React, { Component } from 'react';
import './form.css'

class Form extends Component {
    state = {
        name: "",
        dob: "",
        email: "",
        contact: "",
        about: "",
        errMsg: {
            nameErr: "",
            dobErr: "",
            emailErr: "",
            contactErr: "",
            aboutErr: ""
        }
    }

    checkName = (name) => {
        let nameErr = ""
        let pattern = /^([a-zA-Z ]){2,30}$/
        let valid = false

        if(name.trim() == ""){
            nameErr = "Please enter a name"
        } else if (!pattern.test(name)){
            nameErr = "Please enter a valid name"
        } else {
            valid = true
        }

        this.setState({
            name,
            errMsg: {...this.state.errMsg, nameErr} 
        })

        return valid
    }

    //Also set max date as current date
    checkDob = (dob) => {
        let dobErr = ""
        let valid = false

        if(dob == ""){
            dobErr = "Please enter a date"
        } else if (dob > new Date().toISOString().split("T")[0]){
            dobErr = "Please enter a valid date"
        } else {
            valid = true
        }

        this.setState({
            dob,
            errMsg: {...this.state.errMsg, dobErr} 
        })

        return valid
    }

    checkEmail = (email) => {
        let emailErr = ""
        let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
        let valid = false

        const filter = this.props.data.filter(i => {
            return i.email == email
        })

        if(email.trim() == ""){
            emailErr = "Please enter an email"
        } else if (!pattern.test(email)){
            emailErr = "Please enter a valid email"
        } else if (filter.length > 0){
            emailErr = "Email is already used"
        } else {
            valid = true
        }

        this.setState({
            email,
            errMsg: {...this.state.errMsg, emailErr} 
        })

        return valid
    }

    checkContact = (contact) => {
        let contactErr = ""
        let pattern = /^\d{10}$/
        let valid = false

        if(contact.trim() == ""){
            contactErr = "Please enter a contact number"
        } else if (!pattern.test(contact)){
            contactErr = "Please enter a valid contact number with 10 digits"
        } else {
            valid = true
        }

        this.setState({
            contact,
            errMsg: {...this.state.errMsg, contactErr} 
        })

        return valid
    }

    checkAbout = (about) => {
        let aboutErr = ""
        let valid = false

        if(about.trim() == ""){
            aboutErr = "Please describe yourself"
        } else {
            valid = true
        }

        this.setState({
            about,
            errMsg: {...this.state.errMsg, aboutErr} 
        })

        return valid
    }

    change = (e) => {
        if(e.target.id == "name"){
            this.checkName(e.target.value)
        }

        if(e.target.id == "dob"){
            this.checkDob(e.target.value)
        }

        if(e.target.id == "email"){
            this.checkEmail(e.target.value)
        }

        if(e.target.id == "contact"){
            this.checkContact(e.target.value)
        }

        if(e.target.id == "about"){
            this.checkAbout(e.target.value)
        }
    }

    submit = (e) => {
        e.preventDefault()
        if(this.checkName(this.state.name) && this.checkDob(this.state.dob) && this.checkEmail(this.state.email) && this.checkContact(this.state.contact) && this.checkAbout(this.state.about)){
            alert('The form is submitted');
            this.props.insertData(this.state);

        } else {
            alert('Please check the fields again');
        }
    }

    render() {
        return (
            <React.Fragment>
                <form>
                <h2>Form</h2>
                <label>Name</label>
                <input type="text" id="name" name="name" onChange={this.change}/>
                <p>{this.state.errMsg.nameErr}</p>

                <label>Date of Birth</label>
                <input type="date" id="dob" name="dob" onChange={this.change} max={new Date().toISOString().split("T")[0]}/>
                <p>{this.state.errMsg.dobErr}</p>

                <label>Email Id</label>
                <input type="text" id="email" name="email" onChange={this.change}/>
                <p>{this.state.errMsg.emailErr}</p>

                <label>Contact Number</label>
                <input type="text" id="contact" name="contact" onChange={this.change}/>
                <p>{this.state.errMsg.contactErr}</p>

                <label>About Me</label>
                <textarea id="about" onChange={this.change}/>
                <p>{this.state.errMsg.aboutErr}</p>

                <button id="submit" onClick={this.submit}>Submit</button>
                </form>

            </React.Fragment>
        );
    }
}

export default Form;