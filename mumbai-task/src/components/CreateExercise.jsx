import React, { Component } from 'react';
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class CreateExercise extends Component {

    constructor(props){
        super();
        this.state = {
            username: "",
            name: "",
            email: "",
            mobile: "",
            department: "",
            designation: "",
            description: "",
            duration: 0,
            date: new Date(),
            users: []
        }
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeMobile = this.onChangeMobile.bind(this);
        this.onChangeDepartment = this.onChangeDepartment.bind(this);
        this.onChangeDesignation = this.onChangeDesignation.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:5000/users/')
            .then(response => {
                if(response.data.length > 0) {
                    this.setState({ 
                        users: response.data.map(user => user.username),
                        username: response.data[0].username
                    });
                }
            })
    }

    onChangeUsername(e) {
        this.setState({ username: e.target.value})
    }
    onChangeName(e) {
        this.setState({ name: e.target.value})
    }
    onChangeEmail(e) {
        this.setState({ email: e.target.value})
    }
    onChangeMobile(e) {
        this.setState({ mobile: e.target.value})
    }
    onChangeDepartment(e) {
        this.setState({department : e.target.value})
    }
    onChangeDesignation(e) {
        this.setState({ designation: e.target.value})
    }
    onChangeDescription(e) {
        this.setState({ description: e.target.value})
    }
    onChangeDuration(e) {
        this.setState({ duration: e.target.value})
    }
    onChangeDate(date) {
        this.setState({ date: date})
    }
    onSubmit(e) {
        e.preventDefault();
        const exercise = {
            username: this.state.username,
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile,
            department: this.state.department,
            designation: this.state.designation,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }

        console.log(exercise);

        axios.post('http://localhost:5000/exercises/add', exercise)
            .then(res => console.log(res.data));

        window.location = "/";
    }
    
    render() { 
        return ( 
            <div className="container">
                <h3>Create New Exercise Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername} >
                            {
                                this.state.users.map(function(user) {
                                    return <option key={user} value={user}>{user}</option>;
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Name: </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email id: </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                        />
                    </div>
                    <div className="form-group">
                        <label>Mobile Number: </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.mobile}
                            onChange={this.onChangeMobile}
                        />
                    </div>
                    <div className="form-group">
                        <label>Department: </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.department}
                            onChange={this.onChangeDepartment}
                        />
                    </div>
                    <div className="form-group">
                        <label>Designation: </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.designation}
                            onChange={this.onChangeDesignation}
                        />
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label>Duration(in minutes): </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.duration}
                            onChange={this.onChangeDuration}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
                    </div>
                </form>
            </div>
         );
    }
}
 
export default CreateExercise;