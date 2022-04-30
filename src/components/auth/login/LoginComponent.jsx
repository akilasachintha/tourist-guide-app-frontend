
import React from 'react';
import 'antd/dist/antd.css';
import './LoginComponent.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { Link } from "react-router-dom";
import { MailOutlined, LockOutlined } from '@ant-design/icons';

const LoginComponent = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
   <div className='base-container'>
     <div className="header">User Login</div>
      <Form
      id="login"
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input prefix={ <MailOutlined />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
      <div className="container">
    
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Link
                to="/forgotpassword"
                className="forgot_password-form"
              >
                Forgot password
              </Link>
             
              </div>
        
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <Link
                to="/registration"
                className="register"
              >
              
                Register Now!
               
              </Link>
              
      </Form.Item>
    </Form>
    </div>
  );
};

export default LoginComponent;
