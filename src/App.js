import React, { Component } from 'react';
import Form from './components/Form/Form';
import Navbar from './components/Navbar/Navbar'
import DisplayCard from './components/DisplayCard/DisplayCard'
import './App.css'

class App extends Component {
    state = {
        formData: []
    }

    insertData = (newData) => {
        this.setState ({
            formData: [...this.state.formData, newData]
        })
    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Form insertData = {this.insertData} data = {this.state.formData}/>
                <DisplayCard data = {this.state.formData}/>
            </React.Fragment>
        );
    }
}

export default App;