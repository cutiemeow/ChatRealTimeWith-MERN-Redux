import React,{Component} from 'react';
import {Form, Input, Icon, Button} from 'antd';
import './index.scss'




export default class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            username : "",
            email    : "",
            password : "",
            password_confirm : "", 
            err : {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault()
        const registerUser = {
            username : this.state.username,
            email    : this.state.email,
            password : this.state.password,
            password_confirm : this.state.password_confirm
        }
        console.log(registerUser)
    }
    render(){
        return(
            <div className = "form-register">
                <Form onSubmit = {this.handleSubmit}>
                    <Form.Item>
                        <Input
                        placeholder = "Email"
                        name = "email"
                        value = {this.state.email}
                        onChange = {this.handleInputChange} />
                    </Form.Item>
                    <Form.Item>
                        <Input
                         placeholder = "Username"
                         name = "username"
                         value = {this.state.username}
                         onChange = {this.handleInputChange} />
                    </Form.Item>
                    <Form.Item>
                        <Input
                         placeholder = "Password"
                         type = "password"
                         name = "password"
                         value = {this.state.password}
                         onChange = {this.handleInputChange} />
                    </Form.Item>
                    <Form.Item>
                        <Input
                        placeholder = "Confirm password"
                        type = "password"
                        name = "password_confirm"
                        value = {this.state.password_confirm}
                        onChange = {this.handleInputChange} />
                    </Form.Item>
                    <Form.Item>
                        <Button
                        type = "primary"
                        htmlType = "submit"
                        className = "form-register-button"  >
                        Register
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }

}