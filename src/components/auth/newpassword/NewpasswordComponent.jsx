import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';

const NewpasswordComponent = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >

<Form.Item
        label="New Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your new password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Confirm Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please confirm your new password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit"
        to="/login"
        className="login-form"
        >
          Confirm
        </Button>
      </Form.Item>
    </Form>
  );
};

export default NewpasswordComponent;