import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
} from "antd/lib";
import React, { useState } from "react";

export const MovieAddForm = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const showAddModal = () => {
    console.log("Modal open");
    setIsAddModalOpen(true);
  };
  const handleAddOk = () => {
    console.log("Modal Ok pressed");
    setIsAddModalOpen(false);
  };

  const handleAddCancel = () => {
    console.log("Modal cancel pressed");
    setIsAddModalOpen(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    console.log("Data after processed", {
      ...values,
      isDeleted: false,
      createdat: values["createdat"].format("YYYY-MM-DDThh:mm:ss"),
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Button type="primary" onClick={showAddModal}>
        Open Modal
      </Button>
      <Modal
        title="Form add medicine"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isAddModalOpen}
        onOk={handleAddOk}
        onCancel={handleAddCancel}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Medicine Name"
            name="medicinename"
            rules={[
              { required: true, message: "Please input!" },
              { min: 5, message: "Minimum 5 characters" },
              {
                validator: (_, value) => {
                  if (value === "special@example.com")
                    return Promise.reject("This email is not allowed!")
                    //else return Promise.resolve();

                  if (value === "special2@example.com")
                    return Promise.reject("This email is not allowed!")
                    else return Promise.resolve()
                },
                  
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Medicine Category Id"
            name="medicinecategoryid"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item name="createdat" label="Date Picker">
            <DatePicker />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" label={null}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
