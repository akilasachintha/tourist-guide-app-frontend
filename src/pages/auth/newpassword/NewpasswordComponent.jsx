import React from 'react';
import 'antd/dist/antd.css';
import './NewpasswordComponent.css';
import { Form, Input, Button } from 'antd';

const NewpasswordComponent = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='base-container1'>
      
    <Form 
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 20,
        
      }}
      
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
<label htmlFor='Passwrod'>New Password</label>
<Form.Item
        
        name="Password"
        className="block"
        rules={[
          {
            required: true,
            message: 'Please input your new password!',
          },
          {min:6},
        ]}
        hasFeedback
        style={{
          width: 450,
        }}
      >
        <Input.Password placeholder='Your New Password'/>
      </Form.Item>
<label htmlFor='Confirm Passwrod'>Confirm Password</label>
      <Form.Item
        
        name="password"
        className="block"
        dependencies={['Password']}
        rules={[
          {
            required: true,
            message: 'Please confirm your new password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('Password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
        style={{
          width: 450,
        }}
      >
        <Input.Password placeholder='Confirm Your New'/>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit"
        to="/login"
        className="submit"
        >
          Confirm
        </Button>
      </Form.Item>
      
    </Form>
    </div>
 
  );
};

export default NewpasswordComponent;