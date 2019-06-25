import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import 'antd/dist/antd.css'
import './index.scss'



export default class Login extends Component{
    constructor(props){
        super(props);


    }
    render(){
        return(
            <div className="login-form">
                <Form>
                    <Form.Item>
                        <Input
                            prefix={<Icon type="user" style={{color:'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            prefix={<Icon type="lock" style={{color:'rgba(0,0,0,.25)' }}/>}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Checkbox>Remember me</Checkbox>
                        <a className="login-form-fogot">forgot password</a>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                        >Login
                        </Button>
                        <br/>Or <a> Register now!</a>
                    </Form.Item>
                </Form>
            </div>
            
        )
    }
}