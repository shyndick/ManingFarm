import {
    Button,
    Form,
    Input,
    InputNumber,
    Select,
  } from 'antd';
  import React, { useState } from 'react';
  const { Option } = Select;
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
  const FormCart = ({onOk}) => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
      console.log('Received values of form: ', values);
      localStorage.setItem('Позвони мне', JSON.stringify(values))
      onOk()
    };
    const prefixSelector = (
      <Form.Item name="prefix" noStyle>
        <Select
          style={{
            width: 100,
          }}
        >
          <Option value="37525">+37525</Option>
          <Option value="37529">+37529</Option>
          <Option value="37544">+37544</Option>
        </Select>
      </Form.Item>
    );
    return (
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          prefix: '37529',
        }}
        scrollToFirstError
      >
  
        <Form.Item
          name="nickname"
          label="Имя"
          tooltip="Как вы хотите, чтобы называли вас?"
          rules={[
            {
              required: true,
              message: 'Пожалуйста, введите своё имя!',
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          name="phone"
          label="Мобильный номер"
          rules={[
            {
              required: true,
              message: 'Пожалуйста, введите свой номер телефона!',
            },
          ]}
        >
          <InputNumber
            addonBefore={prefixSelector}
            style={{
              width: '100%',
            }}
          />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Отправить
          </Button>
        </Form.Item>
      </Form>
    );
  };
  
  export default FormCart;