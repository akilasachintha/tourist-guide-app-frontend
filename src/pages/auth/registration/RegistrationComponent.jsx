import React, { useState } from "react";
import "antd/dist/antd.css";
import "./RegistrationComponent.css";

import { Form, Input, Select, Checkbox, Button, DatePicker } from "antd";

const RegistrationComponent = () => {
  
  const { Option } = Select;
  const [title, setTitle] = useState("");
  
  const options = [
    { value: "English" },
    { value: "Russian" },
    { value: "French" },
    { value: "Korean" },
  ];

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  function OnChange(value) {
    console.log("Captcha value:", value);
  }
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  function handleChangeTitle(e) {
    setTitle(e.target.value);
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
    console.log("Received values of form: ", values);
  };

  console.log(title);

  return (
    <div className="bg-grey-lighter flex min-h-screen flex-col">
      <div className="container mx-auto flex max-w-sm flex-1 flex-col items-center justify-center px-2">
        <div className="w-full rounded bg-white px-6 py-8 text-black shadow-md">
          <h1 className="mb-8 text-center text-3xl">Sign up</h1>
          <input
            type="text"
            className="border-grey-light mb-4 block w-full rounded border p-3"
            name="fullname"
            placeholder="Full Name"
          />
          <input
            type="email"
            className="border-grey-light mb-4 block w-full rounded border p-3"
            name="email"
            placeholder="Email"
          />
          <input
            type="password"
            className="border-grey-light mb-4 block w-full rounded border p-3"
            name="password"
            placeholder="Password"
          />
          <input
            type="password"
            className="border-grey-light mb-4 block w-full rounded border p-3"
            name="confirm_password"
            placeholder="Confirm Password"
          />
          <input
            type="date"
            className="border-grey-light mb-4 block w-full rounded border p-3"
            name="date"
            placeholder="Your Birthday"
          />
          {/* <Input
            addonBefore={prefixSelector}
            style={{
              width: "100%",
            }}
            placeholder="Phone Number"
          />{" "} */}
          
          <input
            type="text"
            className="border-grey-light mb-4 block w-full rounded border p-3"
            name="about"
            placeholder="About You"
          />
          <div className="relative" placeholder="Select your role">
            <select
              className="bg-white-200 block w-full appearance-none rounded border border-gray-200 py-3 px-4 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="grid-state"
              onChange={handleChangeTitle}
            >
              <option title="tourist" >Tourist</option>
              <option value="driver">Guide</option>
              <option value="guide" >Driver</option>
              <option value="hotelOwner" >Hotel Owner</option>
            </select>
            <div className="text-white-700 pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
              <svg
                className="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div><br></br>
          {title === "Tourist" && (
            <div>
              <input
                type="text"
                className="border-grey-light mb-4 block w-full rounded border p-3"
                name="country"
                placeholder="Country"
              />
              <input
                type="text"
                className="border-grey-light mb-4 block w-full rounded border p-3"
                name="passportno"
                placeholder="Passport No"
              />
            </div>
          ) }
          {title === "guide" && (
            <div>
              <input
                type="text"
                className="border-grey-light mb-4 block w-full rounded border p-3"
                name="drivinglicenseNo"
                placeholder="Driving License No"
              />
            </div>
          ) }
          {title === "driver" && (
            <div>
              <input
                type="text"
                className="border-grey-light mb-4 block w-full rounded border p-3"
                name="nic"
                placeholder="NIC"
              />
            </div>
          ) }
          <br></br>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                className="focus:shadow-outline rounded bg-purple-500 py-2 px-4 font-bold text-white shadow hover:bg-purple-400 focus:outline-none"
                type="button"
              >
                Sign Up
              </button>
            </div>
          </div>
          <div className="text-grey-dark mt-4 text-center text-sm">
            By signing up, you agree to the
            <a
              className="border-grey-dark text-grey-dark border-b no-underline"
              href="#"
            >
              Terms of Service
            </a>{" "}
            and
            <a
              className="border-grey-dark text-grey-dark border-b no-underline"
              href="#"
            >
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="text-grey-dark mt-6">
          Already have an account?
          <a
            className="border-blue text-blue border-b no-underline"
            href="../login/"
          >
            Log in
          </a>
          .
        </div>
      </div>
    </div>
  );
};

export default RegistrationComponent;
