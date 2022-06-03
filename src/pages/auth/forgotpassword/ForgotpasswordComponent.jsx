
import React from 'react';
import 'antd/dist/antd.css';
import './ForgotpasswordComponent.css';
import { Form, Button} from 'antd';
import { MailOutlined} from '@ant-design/icons';

const ForgotpasswordComponent = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
   <div className='base-container2'>

  
      <Form
      name="forgot_password"
      className="forgot_password-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    ><div className='Paragraph'>
      <p>Enter your email address and we will send you a link to reset your password.</p>
      </div>
      <label className='Email'>Email</label>
    
      <Form.Item
      
        name="email"
        rules={[
          {
            type: 'email',
            message: 'Please enter a valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
        style={{
          width: 650,
        }}
        hasFeedback
      >
        <input prefix={ <MailOutlined />} placeholder="Your Email" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="Submit" className="reset-btn">
          Reset Password
        </Button>
         
      </Form.Item>
    </Form>
    </div>

  );
};

export default ForgotpasswordComponent;
