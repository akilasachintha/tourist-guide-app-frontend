import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './RegistrationComponent.css';
import {
  Form,
  Input,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  DatePicker,
  Tag,
  Cascader,
} from 'antd';



const RegistrationComponent = () => {
  const [form] = Form.useForm();

  const { Option } = Select;
const [title, setTitle] = useState("");
const options = [{ value: 'English' }, { value: 'Russian' }, { value: 'French' }, { value: 'Korean' }];

function handleChange(value) {
  console.log(`selected ${value}`);
}


function handleChangeTitle(value) {
  console.log(value);
  console.log("GGGGGG");
  setTitle(value);
}

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="94">+94</Option>
      </Select>
    </Form.Item>
  );
  
  return (
    <div className='base-container'>
     <div className="header">User Registration</div>
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        prefix: '94',
      }}
      scrollToFirstError
    >
    
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="Full Name"
        label="Full Name"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: 'Please input your name!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>


      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>
      <Form.Item 
      label="Date of Birth"
      rules={[
        {
          required: false,
          message: 'Please input your birthday!',
        },
      ]}
      >
        <DatePicker />
        
        </Form.Item>

      <Form.Item
        name="intro"
        label="Intro"
        rules={[
          {
            required: false,
            message: 'Please input Intro',
          },
        ]}
      >
        <Input.TextArea showCount maxLength={100} />
      </Form.Item>

      <Form.Item
        name="title"
        label="Role"
        rules={[
          {
            required: true,
            message: 'Please select your role',
          },
        ]}
      >
        <Select placeholder="select your role" onChange={handleChangeTitle}>
          <Option value="tourist">Tourist</Option>
          <Option value="hotelOwner">Hotel Owner</Option>
          <Option value="driver">Driver</Option>
          <Option value="guide">Guide</Option>
        </Select>
      </Form.Item>
{ title==='tourist' ? (<div>
  <Form.Item
        name="passportNo"
        label="Passport No"
        rules={[
          {
            required: true,
            message: 'Please input your passport no!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="country"
        label="Country"
        rules={[
          {
            required: true,
            message: 'Please input your country!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
</div> ) : null }

{ title==='driver' ? (<div>
  <Form.Item
        name="drivinglicenseno"
        label="Driving License No"
        rules={[
          {
            required: true,
            message: 'Please input your driving license no!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      
</div> ) : null }

{ title==='guide' ? (<div>
  <Form.Item
        name="NIC"
        label="NIC"
        rules={[
          {
            required: true,
            message: 'Please input your driving NIC!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="languages"
        label="Languages"
        
      >
          <Select
    mode="multiple"
    showArrow
    style={{ width: '100%' }}
    options={options}
  />
        
      </Form.Item>

      
</div> ) : null } 
  
      <Form.Item label="Captcha" extra="We must make sure that your are a human.">
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item
              name="captcha"
              noStyle
              rules={[
                {
                  required: true,
                  message: 'Please input the captcha you got!',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Button>Get captcha</Button>
          </Col>
        </Row>
      </Form.Item>
      
      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export default RegistrationComponent;