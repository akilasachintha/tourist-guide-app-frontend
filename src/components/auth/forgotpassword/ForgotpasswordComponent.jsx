
import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button} from 'antd';
import { MailOutlined} from '@ant-design/icons';

const ForgotpasswordComponent = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
   
      <Form
      name="forgot_password"
      className="forgot_password-form"
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
            message: 'Please input your Email or Username!',
          },
        ]}
      >
        <Input prefix={ <MailOutlined />} placeholder="Email or Username" />
      </Form.Item>
      
      

      <Form.Item>
        <Button type="primary" htmlType="Submit" className="forgot_password-button">
          Reset
        </Button>
         
      </Form.Item>
    </Form>
   
  );
};

export default ForgotpasswordComponent;
