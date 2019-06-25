import React,{Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import './index.scss'



export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: "",
            password: "",
            error: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }

    handleInputChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        const user = {
            user : this.state.user,
            password : this.state.password
        }
        console.log(user);
    }

    render(){
        return(
            <div className="login-form">
                <Form onSubmit = {this.handleSubmit}>
                    <Form.Item>
                        <Input
                            prefix={<Icon type="user" style={{color:'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                            name="user"
                            value = {this.state.user}
                            onChange = {this.handleInputChange}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            prefix={<Icon type="lock" style={{color:'rgba(0,0,0,.25)' }}/>}
                            type="password"
                            placeholder="Password"
                            name="password"
                            value = {this.state.password}
                            onChange = {this.handleInputChange}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Checkbox 
                            className="login-form-remember">
                            Remember me
                        </Checkbox>
                        <a className="login-form-forgot">Forgot password</a>
                        
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                        >Login
                        </Button>
                        <br/>Or <Link to = "/register">
                        Register now!
                        </Link>
                    </Form.Item>
                </Form>
            </div>
            
        )
    }
}